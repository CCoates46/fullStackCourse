//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const correctPassword = 'ILoveProgramming'

const logger = (req, res, next) => {
    console.log(req.method , req.url)
    next()
  }

app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) => {
    if(req.body['password'] === correctPassword) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.send('<h2>Sorry the password was incorrect. Please try again</h2>')
    }
})

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });