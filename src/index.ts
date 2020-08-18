import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as sessionAuth from "./middleware/sessionAuth";
import * as routes from "./routes"


dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

// configure express to parse incoming JSON data
app.use(express.json());

// configure express to use EJS
app.set( "views", path.join(__dirname, "views" ) );
app.set( "view engine", "ejs" );

// configure session auth
sessionAuth.register(app);

// confugure routes
routes.register(app);

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`)
});
