module.exports = function(app) {
    
    app.get('/', (req, res) => {
        res.render('index');
    })

    app.get('/direto', (req, res) => {
        res.render('pages/direto');
    })
    
}