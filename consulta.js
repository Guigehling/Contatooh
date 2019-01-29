var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const assert = require('assert');

var _idProcurado = new ObjectID('5c4ccae4c32e7b03f3b8d991');

var client = MongoClient('mongodb://127.0.0.1:27017');

client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db('contatooh');

    db.collection('contatos').find({'_id': _idProcurado}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
    });

    client.close();
});



//Não funciona na versão atual

// MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
//     function (erro, db) {
//         if (erro) console.log('01 - ' + erro);
//         db.collection('contatos').findOne({ _id: _idProcurado },
//             function (erro, contato) {
//                 if (erro) console.log('02' + erro);
//                 console.log(contato);
//             }
//         );
//     }
// );