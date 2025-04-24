//IMPORT MODULES
import express from "express";
import bodyParser from "body-parser";

//VARIABLE DECLARATIONS
const app = express();
const port = 3000;

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let data = [];
let count = 0;

//ROUTES
//root get route
app.get("/", (req, res) => {
	res.render("body.ejs", { data: data });
});

//take posts from form
app.post("/submit", (req, res) => {
	count++;
	const userPost = { post: req.body.postInput, count: count };
	data.unshift(userPost);

	res.redirect("/");
});

app.post("/delete", (req, res) => {
	const postId = parseInt(req.body.id);
	const userIndex = data.findIndex((user) => user.count === postId);
	data.splice(userIndex, 1);
	res.redirect("/");
	count--;
});

app.post("/edit", (req, res) => {
	const postText = req.body.post;
	console.log(postText);
});

//SERVER INITIALIZE
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
