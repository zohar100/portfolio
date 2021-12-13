const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const seeds = require("./seeds");

require("dotenv").config();

//MIDDLEWARES
app.use(cors({ 
  credentials: true,
}));
app.use(express.json());

//DB CONFIGURATION
// const uri = process.env.ATLAS_URI;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/portfilio');
}

seeds();

const projectRoutes = require("./routes/projects");

app.use('/api/projects', projectRoutes);

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong'} = err;
  res.status(status).json({msg: message})
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Connect succesfully on port: " + port);
});