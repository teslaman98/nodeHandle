const express = require('express');
const app = express();
const path = require('path');
const handle = require('express-handlebars');
const PORT = process.env.PORT || 5000;

app.engine('handlebars', handle());
app.set('view engine', 'handlebars');

//Routing

app.get('/', (req,res) => {
    res.render('index');
});




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));