const express = require('express');

const app = express();

app.listen(4001, () => {
    console.log(`running ${process.env.NODE_ENV} version ${Math.random()}`);
});