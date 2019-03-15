'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shopping_Item = sequelize.define('Shopping_Item', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Shopping_Item.associate = function(models) {
    // associations can be defined here
  };
  return Shopping_Item;
};