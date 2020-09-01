import express, { Application } from 'express';
import sequelize from './config/db';
import path from 'path';
import bodyParser from 'body-parser';

import { books,
  categories,
  authors,
  reviews,
  users,
  auth,
  favorites,
  userfavoritesbooks
} from './routes/api';

const app: Application = express();

// Define routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(__dirname + '/public'));

app.use('/api/books', books);
app.use('/api/categories', categories);
app.use('/api/authors', authors);
app.use('/api/reviews', reviews);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/favorites', favorites);
app.use('/api/userfavoritesbooks', userfavoritesbooks);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to Database has been established successfully.');
  })
  .catch(err => console.log('down'));

export default app;