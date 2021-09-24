require("./db/mongoose")
const express = require('express')
const hbs = require('hbs');
const path = require('path');
const app = express()
const bodyParser = require('body-parser')

const routes = require('./routes');

// Define Path for express config
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath)

app.use(bodyParser.urlencoded({ extended: false }))
// parse application json
app.use(bodyParser.json())



app.get('/', function (req, res) {
    res.render("login")
})

routes.apiRoutes(app);

app.listen(8000, function () {
    console.log("the server run in the port : 8000");
})