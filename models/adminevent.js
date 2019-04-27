'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminEvent = sequelize.define('AdminEvent', {
    subType: DataTypes.STRING,
    source: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  AdminEvent.associate = function(models) {
    // associations can be defined here
  };
  return AdminEvent;
};