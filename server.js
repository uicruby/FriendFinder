const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
var $ = require("jquery");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(port, () => console.log(`Listening on port ${port}`));

