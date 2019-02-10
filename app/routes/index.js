module.exports = function (app) {

    app.get('/', function (req, res) {
        let login = '';
        if (req.user) login = req.user.login;
        res.render('index', { "usuarioLogado": login });
    });

};