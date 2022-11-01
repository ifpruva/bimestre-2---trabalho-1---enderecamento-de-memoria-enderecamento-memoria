module.exports = function(app) {
    
    app.get('/', (req, res) => {
        res.render('index');
    })

    app.get('/direto', (req, res) => {
        res.render('pages/direto');
    })

    app.get('/indireto', (req, res) => {
        res.render('pages/indireto');
    })
    app.get('/imediato', (req, res) => {
        res.render('pages/imediato');
    })
    app.get('/registrador', (req, res) => {
        res.render('pages/registrador');
    })
    app.get('/pilha', (req, res) => {
        res.render('pages/pilha');
    })
    app.get('/indireto-registrador', (req, res) => {
        res.render('pages/indireto-registrador');
    })
}