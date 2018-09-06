'use strict';

let mongodb = require('mongodb');
var dburl = 'mongodb://localhost:27017';
var dbname = 'dynwidgets';

let initDbCollection = function(){
    let dbc;
    return {
        init: function(callback){
            //Connect to db and make db object ready with collections
            mongodb.MongoClient.connect(dburl, function(err, client) {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            const db = client.db(dbname);
            dbc = db.collection('widgets');
            console.log('db connection success:dbc created');
            callback();
            })
        },
       dbcollections: function(){
         return {
             dbcollection:dbc
            }
       }
    }
}

module.exports = initDbCollection;