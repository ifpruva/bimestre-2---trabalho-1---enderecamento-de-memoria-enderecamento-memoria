const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()

app.use('/assets', express.static(__dirname + '/assets'))
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

require('./routes')(app);

app.listen(3000, () => {
  console.log('Server online')
})