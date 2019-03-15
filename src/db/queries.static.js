const Items = require("./models").Shopping_Item;

module.exports = {
  getAllItems(callback){
    return Items.all()
    .then((items) => {
      callback(null, items);
    })
    .catch((err) => {
      callback(err);
    })
  }
}