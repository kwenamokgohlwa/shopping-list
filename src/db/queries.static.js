const Items = require("./models").Shopping_Item;

module.exports = {
  getAllItems(callback){
    return Items.all({
        order: [
        ['name', 'ASC'],
    ]
    })
    .then((items) => {
      callback(null, items);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addItem(newItem, callback){
    return Items.create({
      name: newItem.name,
      quantity: newItem.quantity
    })
    .then((item) => {
      callback(null, item);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deleteItem(id, callback){
    return Items.destroy({
      where: {id}
    })
    .then((item) => {
      callback(null, item);
    })
    .catch((err) => {
      callback(err);
    })
  },

  updateTopic(id, updatedItem, callback){
    return Items.findById(id)
    .then((item) => {
      if(!item){
        return callback("Item not found");
      }

      item.update(updatedItem, {
        fields: Object.keys(updatedItem)
      })
      .then(() => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      });
    });
  }

}