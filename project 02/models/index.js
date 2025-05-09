// 'use strict';
// import fs from 'fs';
// import path from 'path';
// import { Sequelize, DataTypes } from 'sequelize';
// import process from 'process';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import configFile from '../config/config.json' assert { type: 'json' };

// import Course from './courseSchema.js';
// import Enrollment from './enrollmentSchema.js';
// import Student from './studentSchema.js';

// const env = process.env.NODE_ENV || 'development';
// const config = configFile[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }


// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// const StudentModel = Student(sequelize, Sequelize.DataTypes);
// const CourseModel = Course(sequelize, Sequelize.DataTypes);
// const EnrollmentModel = Enrollment(sequelize, Sequelize.DataTypes);

// Student.associate()
// Course.associate()

// export default db;


import { Sequelize } from 'sequelize';
import Student from './studentSchema.js';
import { sequelize } from '../config/db.js';
import Course from './courseSchema.js';
import Enrollment from './enrollmentSchema.js';


// Initialize models
const StudentModel = Student;
const CourseModel = Course;
const EnrollmentModel = Enrollment;

// Set up associations
StudentModel.associate({ Course: CourseModel, Enrollment: EnrollmentModel });
CourseModel.associate({ Student: StudentModel, Enrollment: EnrollmentModel });
EnrollmentModel.associate({ Student: StudentModel, Course: CourseModel });


export { StudentModel, CourseModel, EnrollmentModel };