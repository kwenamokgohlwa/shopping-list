const staticQueries = require("../db/queries.static.js");

module.exports = {
    index(req, res, next){

        staticQueries.getAllItems((err, items) => {
  
            if(err){
              res.redirect(500, "static/index");
            } else {
              res.render("static/index", {items});
            }
          })
    },

    create(req, res, next){
        let newItem = {
          name: req.body.name,
          quantity: 1
        };
        staticQueries.addItem(newItem, (err, item) => {
          if(err){
            res.redirect(500, "static/index");
          } else {
            staticQueries.getAllItems((err, items) => {
  
                if(err){
                  res.redirect(500, "static/index");
                } else {
                  res.render("static/index", {items});
                }
              })
          }
        });
      },

      destroy(req, res, next){
        staticQueries.deleteItem(req.params.id, (err, item) => {
          if(err){
            res.redirect(500, "static/index")
          } else {
            res.redirect(303, "/")
          }
        });
      },


  }
