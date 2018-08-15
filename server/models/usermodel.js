module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('UserModel', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return UserModel;
};
