// dependencies
let express = require("express");

// access port and confugure express
let PORT = process.env.PORT || 3020;
let app = express();

// allows access to req.body -- gives response, JSON like response
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add app routes
require("./app/routing/api_routes")(app);
require("./app/routing/html_routes")(app);

// listen
app.listen(PORT, function() {
  console.log("APP is listening on PORT: " + PORT);
});
