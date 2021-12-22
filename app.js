const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');


app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {

    res.send('index.html');
});
app.post('/challenge', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const flag = "csi-ctf{eXploIted_wEb}"


    if (username === "John" && password === "adminz") {
        res.render("flag", { x: "Congrats, you have found the flag : ", y: flag });
    } else {
        res.send("your username and password is incorrect");
    }
})
app.get('/challenge', async(req, res) => {
    res.render("challenge");
})
app.listen(3000, (req, res) => {
    console.log('listening on port 3000');
});