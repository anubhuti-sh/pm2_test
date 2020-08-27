const express = require('express');

const app = express();

let port = NODE_ENV=="stage" ? 4001 : 4000;

app.listen(port, () => {
    console.log(`running ${process.env.NODE_ENV} version ${Math.random()}`);
});