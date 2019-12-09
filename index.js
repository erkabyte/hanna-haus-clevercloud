

const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req,res) => 
{
		res.send("hello");
});

app.get("/pubsub", (req,res) => 
	{
		
	});

app.post("/", (req,res) =>
{
   ///console.log("")
   res.send("post requested");
})


app.listen(port, () => `app is listening on ${port}`);