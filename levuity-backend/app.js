// Module imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const connectDB = require('./config/db');
connectDB();

// App initialization
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware - ORDER MATTERS!
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3001', 'http://localhost:3000'], // Vite dev server and other common ports
  credentials: true
}));

app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

// Route imports
const bookmarksRoutes = require('./routes/bookmarks');
const discussionRoutes = require('./routes/discussion');

// Root route
app.get('/', (req, res) => {
  res.send("root");
});

// Mount routes
app.use('/bookmarks', bookmarksRoutes); // MongoDB-based bookmarks route
app.use('/discussion', discussionRoutes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;
