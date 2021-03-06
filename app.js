const express = require("express");
const PORT = 1987;
const app = express();
const path = require("path");
const mysql = require("mysql");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const util = require("util");
const session = require("express-session");
const fileupload = require("express-fileupload");
const robots = require("express-robots-txt");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// --------Swagger--------

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "API Portfolio",
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.js'],
  };

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --------Robot.txt--------
app.use(robots({ UserAgent: '*', Disallow: '/admin' }));

// --------Body Parser--------

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger("dev"));
app.use(cookieParser());

// --------Express Session--------

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        name: "cookie",
        rolling: true,
        cookie: {maxAge: 1*60*60*1000},
    })
)

// --------Dotenv--------

require("dotenv").config();

// --------MethodOverride--------

app.use(methodOverride("_method"));

// --------EJS--------

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --------Setup Public Folder--------

app.use(express.static(path.join(__dirname, 'public')));

// --------MySQL--------

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    multipleStatements: true,
})

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("Connecté à MySQL");
})

const query = util.promisify(db.query).bind(db);
global.db = db;
global.query = query;

// --------FileUpload--------

app.use(fileupload());

// --------Users Routes--------

const usersRoutes = require("./routes/usersRoutes");
usersRoutes(app);

// --------Admin Routes--------

const adminRoutes = require("./routes/adminRoutes");
adminRoutes(app);

app.listen(PORT, function(){
    console.log("Ecoute le port : ", PORT);
})