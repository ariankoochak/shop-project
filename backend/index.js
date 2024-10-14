const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = 3000;

const allRoutes = require('./src/modules/routes/routes');

app.use(allRoutes)

app.listen(PORT,()=>{
    console.log(chalk.blue("\nserver started on http://localhost:3000\n"));
})