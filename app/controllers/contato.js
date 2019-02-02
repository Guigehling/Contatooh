module.exports = function (app) {

    const Contato = app.models.contato;

    var controller = {};

    controller.listaContatos = function (req, res) {
        Contato.find().populate('emergencia').exec()
            .then(
                function (contatos) {
                    res.json(contatos);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };

    controller.obtemContato = function (req, res) {
        let _id = req.params.id;
        Contato.findById(_id).exec()
            .then(
                function (contato) {
                    if (!contato) throw new Error("Contato não encontrado");
                    res.json(contato);
                },
                function (erro) {
                    console.error(erro);
                    res.status(404).json(erro);
                }
            );
    };

    controller.removeContato = function (req, res) {
        let _id = req.params.id;
        Contato.remove({ "_id": _id }).exec()
            .then(
                function () {
                    res.status(200).end();
                },
                function (erro) {
                    return console.error(erro);
                }
            );
    };

    controller.salvaContato = function (req, res) {
        let _id = req.body._id;

        req.body.emergencia = req.body.emergencia || null;

        if (_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    function (contato) {
                        res.json(contato);
                    },
                    function (erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                );
        } else {
            Contato.create(req.body)
                .then(
                    function (contato) {
                        res.json(contato);
                    },
                    function (erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                );
        }
    };

    return controller;

};