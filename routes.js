module.exports = function(app) {
    
    app.get('/', (req, res) => {
        res.render('index');
    })

    app.get('/direto', (req, res) => {
        res.render('pages/direto', {layout: 'page.hbs'});
    })

    app.get('/indireto', (req, res) => {
        res.render('pages/indireto', {layout: 'page.hbs'});
    })

    app.get('/imediato', (req, res) => {
        res.render('pages/imediato', {layout: 'page.hbs'});
    })

    app.get('/registrador', (req, res) => {
        res.render('pages/registrador', {layout: 'page.hbs'});
    })

    app.get('/pilha', (req, res) => {
        res.render('pages/pilha', {layout: 'page.hbs'});
    })

    app.get('/indireto-registrador', (req, res) => {
        res.render('pages/indireto-registrador', {layout: 'page.hbs'});
    })

    app.get('/deslocamento', (req, res) => {
        res.render('pages/deslocamento', {layout: 'page.hbs'});
    })
    
}