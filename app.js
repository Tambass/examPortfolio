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


app.listen(PORT, function(){
    console.log("Ecoute le port : ", PORT);
})