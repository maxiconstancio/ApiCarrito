
const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "db.env" });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;



//Routes
app.use(require('./routes/products'));
app.use(require('./routes/cart'));


app.listen(port, () => {
  console.log(`corriento en el puerto: ${port}`)
  // Conectarse
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
        console.log("conecto correctamente");
    }).catch(error => {
        console.log("se ha proudcito un error", error);
    })
})