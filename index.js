const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT} env ${process.env.currentEnv} version ${Math.random()}`);
});