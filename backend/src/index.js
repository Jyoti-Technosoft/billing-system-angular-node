const express = require("express");
const PORT = 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors()); // configure cors
//configure body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan
// define first route
app.get("/", (req, res) => {
    console.log("Hello MEAN Soldier...Ready For Battle??");
});
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

//bring in db config
require("./config/db")(app);
//db config ends here

const userRoutes = require("./account/userRoute"); //bring in our user routes
app.use("/user", userRoutes);
