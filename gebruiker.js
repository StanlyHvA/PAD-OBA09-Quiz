var sql = require('mysql');
var exp = require('express');

var router = exp();

var connection = sql.createConnection
({

    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'my_test_database'

});

connection.connect(function(err)
{
    if (err) throw err;
    console.log('connected');

    router.get('/', function(req, res)
    {
        var id = req.query.id;
        
        if(!id) res.status(400).send('id not set');

        else

        connection.query('SELECT * FROM users WHERE id = ?', [id], function(err, result){
            
            res.send(result);

        });
        //res.send('Hello World!');

    });

        router.listen(3000);
        console.log('I am listening');

});