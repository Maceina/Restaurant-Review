require("dotenv").config();
const express = require('express');

const app = express();

// data123

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})