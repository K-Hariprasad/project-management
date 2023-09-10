const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "developement",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
