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
    }
  }
