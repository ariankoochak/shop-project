const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = 3000;

require('./src/config/mongoose/mongoose.config')

const allRoutes = require('./src/modules/routes/routes');

app.use(allRoutes);
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        error: {
            message: err.message || "internal server error",
        },
    });
});

app.listen(PORT,()=>{
    console.log(chalk.blue("\nserver started on http://localhost:3000\n"));
})