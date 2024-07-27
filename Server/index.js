const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3001;



app.use(bodyParser.json()); // for JSON data
app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded data
app.use(cors());


app.post('/api/client/', (req, res) => {
    const clientInfo = req.body;
    const clientID = 1;
    const clientData = {
        clientInfo : clientInfo,
        clientId : clientID
    }
    res.send("Data parsed successfully!");
    fs.writeFile('data.json', JSON.stringify(clientData), function(err) {
        if (err) {
            console.log(err);
        }
    });
})
app.post('/api/appointment/', (req, res) => {
    console.log(req.body);
    res.send("Data parsed successfully!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
