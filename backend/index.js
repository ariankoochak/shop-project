const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = 3000;


app.get('/',(req,res,next)=>{
    res.send('this is for test')
});

app.listen(PORT,()=>{
    console.log(chalk.blue("\nserver started on http://localhost:3000\n"));
})