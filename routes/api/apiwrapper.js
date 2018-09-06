'use strict';
let initdb = require('./initdb');

let successJson = {
    "result":"success"
};

module.exports = {
    getallwidgets : function(req, res, next){
         let initdata = initdb();
         initdata.init(function() {
                let dbc = initdata.dbcollections().dbcollection;
                console.log('db collection dbc obtained');
                dbc.find({}, {sort: {id: -1}}).toArray(function(err, docs){
                if (err) return next(err)
                res.json(docs)
                })
            }
        )
    },
    addwidget : function(req, res, next){
        let initdata = initdb();
            initdata.init(function() {
               let dbc = initdata.dbcollections().dbcollection;
               console.log('db collection dbc obtained');
               if (!req.body) return res.status(400);
               console.log('request body data:'+req.body);
               dbc.insertOne(req.body, function(err, docs){
                if (err) return next(err)
               res.json(successJson)
               })
           })
    },
    editwidget : function(req, res, next){
        let initdata = initdb();
            initdata.init(function() {
               let dbc = initdata.dbcollections().dbcollection;
               console.log('db collection dbc obtained');
               dbc.save(req.body, function(err, docs){
               if (err) return next(err)
               res.json(successJson)
               })
           })
    }  
}