const express = require('express')
const exphbs  = require('express-handlebars');
const sections = require('express-handlebars-sections');
const app = express()

app.use('/assets', express.static(__dirname + '/assets'))

var hbs = exphbs.create({
  helpers: { 
    section: sections() 
  },
  extname: '.hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

require('./routes')(app);

app.listen(3000, () => {
  console.log('Server online')
})