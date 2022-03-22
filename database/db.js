const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(console.log("connected"));


module.exports = mongoose;