const express = require('express');
const app = express();
const port = 5000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const routes = require('./routes/approutes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());  


app.use('/details', routes);
app.use('/manipulate', routes);


module.exports = app;

