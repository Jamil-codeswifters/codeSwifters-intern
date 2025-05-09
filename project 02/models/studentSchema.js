// import { DataTypes } from "sequelize";
// import { sequelize } from "../config/db.js";
// import Course from "./courseSchema.js";
// import Enrollment from "./enrollmentSchema.js";

// const Student = sequelize.define('student', {
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     timestamps: true
// });

// Student.associate = (db) => {
//     Student.belongsToMany(Course, {
//         through: Enrollment,
//         foreignKey: 'studentId',
//         sourceKey: 'id',
//         // as: 'courses'
//     });
// };


// export default Student



'use strict';

import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Student = sequelize.define('student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

// Associations
Student.associate = ({ Course, Enrollment }) => {
    Student.belongsToMany(Course, {
        through: Enrollment,
        foreignKey: 'studentId',
        sourceKey: 'id',
    });
};

export default Student;
