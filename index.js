const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log(`running ${process.env.NODE_ENV} version ${process.env.ver}`)
});