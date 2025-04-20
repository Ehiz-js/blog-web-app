//IMPORT MODULES
import express from "express";
import bodyParser from "body-parser";

//VARIABLE DECLARATIONS
const app = express();
const port = 3000;

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//ROUTES
//root get route
app.get("/", (req, res) => {
	res.render("body.ejs");
});

//SERVER INITIALIZE
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
