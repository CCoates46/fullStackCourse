import express from 'express'

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Hi, My name is Clare Coates</h1>')
})

app.get('/contact', (req,res) => {
    res.send('<h2>You can contact me on LinkedIn</h2>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1> <p>My name is Clare! </br> I am studying a full stack course to further my career as a Software Engineer. </p>')
    
})