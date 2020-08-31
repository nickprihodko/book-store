import express, { Application, Request, Response } from 'express';
import sequelize from './config/db';
import path from 'path';

import { books,
  categories,
  authors,
  reviews,
  users,
  auth,
  favorites,
  userfavoritesbooks
} from './routes/api/index';

const app: Application = express();

// Init Middleware
// app.use(express.json({ extended: false }));
// app.get("/", (req: Request, res: Response) => res.send("API Running"));

// Define routes
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(__dirname + "/public"));

app.use("/api/books", books);
app.use("/api/categories", categories);
app.use("/api/authors", authors);
app.use("/api/reviews", reviews);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/favorites", favorites);
app.use("/api/userfavoritesbooks", userfavoritesbooks);

sequelize.authenticate().then(
  () => {
    console.log("Connection to Database has been established successfully.");
  },
  (err) => {
    console.log("Unable to connect to the database:", err);
  }
);

export default app;