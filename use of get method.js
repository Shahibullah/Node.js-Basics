const express = require('express');
const app = express();

// Root route
app.get('/', function (req, res) {
    res.send('Welcome to my hotel... How can I help you? We have a list of menus');
});


app.get('/Chicken', function (req, res) {
    res.send('Sure Sir, I would love to serve Chicken');
});

// Idlis route
app.get('/Idlis', (req, res) => {
    let customized_Idli = {
        name: "rava idli",
        size: "10 cm diameter",
        is_sambar: true,
        is_chutney: false
    };
    res.send(customized_Idli);
});

// Start server
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
