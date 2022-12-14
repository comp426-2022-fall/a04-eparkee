#!usr/bin/env node
//This is the start of my server file
//
//importing in APIs
import roll from "./lib/roll.js"
import minimist from "minimist"
import express from 'express'
//setting up args
const args = minimist(process.argv.slice(2));

//setting up the port
const port = args.port || 5000
// setting up express
const app = express()

//running the express
app.use(express.urlencoded({extended: true}));

//returns 200 OK Status
app.get('/app', (req,res)=> {res.status(200).send('200 OK'); });

//setting up a default endpoint
app.get('/app/roll/', (req,res) => {res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(6,2,1)); });

//enable the post
app.post('/app/roll/', (req,res) =>{
	//defining the dice
	const sides = parseInt(req.body.sides);
	const dice = parseInt(req.body.dice);
	const rolls = parseInt(req.body.rolls);
	//send the response
	res.send(roll(sides, dice, rolls)); });

// parsing the sides endpoints
app.get('/app/roll/:sides/', (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(parseInt(req.params.sides), 2, 1)); });

//getting all that have now been specified
//
app.get('/app/roll/:sides/:dice/', (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1)); });

app.get('/app/roll/:sides/:dice/:rolls/', (req,res,next) => {
	//Last one let's go
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls))); });

// adding in a status code for if nothing can be found
app.get('*', (req,res)=> {res.send("404 NOT FOUND")});

//setting it up to take input from the user
app.listen(port, () => {
	//sending in the console log
	console.log("Server listening on port " + port)
});
