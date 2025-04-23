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
	res.render("body.ejs", { post: "" });
});

//take posts from form
app.post("/submit", (req, res) => {
	const userPost = req.body.postInput;
	console.log(userPost);
	let data = { post: userPost };

	res.render("body.ejs", data);
});

//SERVER INITIALIZE
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
