import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.set( "views", path.join(__dirname, "views" ) );
app.set( "view engine", "ejs" );

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`)
});

app.get("/", (request, response) => {
  // render index template
  response.render("index");
});
