'use strict';
module.exports = (sequelize, DataTypes) => {
  const SecurityEvent = sequelize.define('SecurityEvent', {
    pattern: DataTypes.STRING,
    tunnelName: DataTypes.STRING,
    tunnelID : DataTypes.STRING,
    URI: DataTypes.STRING,
    srcIP: DataTypes.STRING,
    srcPort: DataTypes.STRING,
    source: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  SecurityEvent.associate = function(models) {
    // associations can be defined here
  };
  return SecurityEvent;
};