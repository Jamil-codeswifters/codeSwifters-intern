// 'use strict';

// import { DataTypes } from "sequelize";
// import { sequelize } from "../config/db.js";
// import Student from "./studentSchema.js";
// import Course from "./courseSchema.js";

// const Enrollment = sequelize.define('Enrollment', {
//     studentId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Student,
//             key: 'id'
//         }
//     },
//     courseId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Course,
//             key: 'id'
//         }
//     },
// }, {
//     timestamps: true
// });
// export default Enrollment


'use strict';

import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Student from "./studentSchema.js";
import Course from "./courseSchema.js";

const Enrollment = sequelize.define('enrollment', {
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: 'id'
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    },
}, {
    timestamps: true
});

// Associations
Enrollment.associate = ({ Student, Course }) => {
    Enrollment.belongsTo(Student, { foreignKey: 'studentId' });
    Enrollment.belongsTo(Course, { foreignKey: 'courseId' });
};

export default Enrollment;