const express = require("express");
const PORT = 1987;
const app = express();



app.listen(PORT, function(){
    console.log("Ecoute le port : ", PORT);
})