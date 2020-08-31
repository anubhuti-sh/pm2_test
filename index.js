const express = require('express');
require('dotenv').config({path: `/home/anu/Projects/monkeyLabs/pm2_test/env_${process.env.NODE_ENV}`});

const app = express();

app.listen(port, () => {
    console.log(`running ${process.env.NODE_ENV} version ${Math.random()}`);
});