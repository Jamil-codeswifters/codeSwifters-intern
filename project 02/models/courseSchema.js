'use strict';

import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const Course = sequelize.define('course', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
});

// Associations
Course.associate = ({ Student, Enrollment }) => {
    Course.belongsToMany(Student, {
        through: Enrollment,
        foreignKey: 'courseId',
        sourceKey: 'id',
    });
};

export default Course;