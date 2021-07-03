const numbersToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

const combinationOfTwoNumbersHandler = (num1, num2) =>
    [].concat(...num1.map((letter1) => num2.map((letter2) => letter1 + letter2)));
const combinationsHandler = (a, b, ...c) =>
    b ? combinationsHandler(combinationOfTwoNumbersHandler(a, b), ...c) : a;

//////////////////////////////////////
//Server

const express = require('express')
const fs = require('fs')
const path = require('path');
const app = express()
const port = process.env.PORT || 4000
app.use(express.json())
const mostUsedEnglishWords = fs.readFileSync('./1-1000.txt', 'utf-8').split('\n');

/////HEROKU SETUP///////////////
////MIDDLEWARE
const whitelist = ['http://localhost:3000', 'http://localhost:4000']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))
////////////////////////////////

app.post('/convert', (req, res) => {
    const inputValue = req.body.value
    const numbers = inputValue.split('')
    const stringsArray = []
    numbers.forEach(num => stringsArray.push(numbersToLetters[num]))
    const combinations = combinationsHandler(...stringsArray)
    const words = combinations.map(comb => mostUsedEnglishWords.filter(word => word.includes(comb))).filter(el => el.length > 0)

    const data = {
        combinations,
        words
    }
    res.status(200).send(data)
})
/////HEROKU SETUP///////////////
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
////////////////////////////////

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})

