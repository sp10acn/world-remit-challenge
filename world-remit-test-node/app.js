const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios').default;

app.use(express.static(path.join(__dirname, "public")));

const soApiDomain = "http://api.stackexchange.com";
const soRequestPath = "/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow";

app.get("/sousers", (req, res) => {
    axios.get(soApiDomain + soRequestPath).then(response => {
        const data = response.data;
        return res.status(200).send(data);
    }).catch(err => {
        return res.status(500).send({});
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});

module.exports = app;