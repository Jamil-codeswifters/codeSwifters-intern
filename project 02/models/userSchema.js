
import { DataTypes } from "sequelize";
import { sequelize }   from "../config/db.js";
import Post from "./postSchema.js";
  const User = sequelize.define('users', {
    fName:  DataTypes.STRING,
    lName:  DataTypes.STRING,
    age:    DataTypes.INTEGER,
    gender: DataTypes.ENUM('male','female','other')
  }, {timestamps:true});

  User.associate  = (db) => {
    // A User has many Posts
    User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
  };
  User.associate()
  export default User




