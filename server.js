const express = require('express');
const path = require('path');

const app = express();

// Somente arquivos estáticos
app.use(express.static(__dirname + '/dist/TodoApp'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/TodoApp/index.html'));
});

app.listen(process.env.PORT || 3000);