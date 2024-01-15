import express from "express";

const app = express();
const port = 3000;

let isWeekday = false
let isWeekend = false

const validateDate = (req, res, next) => {
    const date = new Date()
    let today = date.getDay()

    today === 0 || today === 6 ? isWeekend = true : isWeekday = true
    next()
}

app.use(validateDate)

app.get("/", (req, res) => {
    isWeekend ? res.render("index.ejs", 
    { day: "the weekend, it's time to have fun!" })
    : res.render("index.ejs", 
    { day: "a weekday, it's time to work hard!"})
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});