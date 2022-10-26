const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());


//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r))); // ** importing all routes from routes folder


//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully..."))
  .catch((err) => console.log("error connecting to mongodb", err));



let port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`the port is running at port ${port}....`);
});

// let allowed = ["http://localhost:3000", "....", "......"]
// const options = (req, res) => {
//     let temp;
//     let origin = req.header("Origin")
//     if (allowed.indexOf(origin) > -1) {
//         temp = {
//             origin: true,
//             optionSuccessStatus: 200,
//         }
//     }
//     else {
//         temp = {
//             origin: "stupid",
//         }
//     }
//     res(null, temp);
// }

// app.use(cors(options))
