import { Op } from "sequelize"
import User from "../models/userSchema.js"
import Post from "../models/postSchema.js"

const createUserController = async (req, res) => {

    try {
        const { fName, lName, age, gender } = req.body
        if (!fName || !lName || !age || !gender) return res.status(402).json({
            message: "all fields is required"
        })

        const createUser = await User.create({ fName, lName, age, gender })
        return res.status(201).json({ message: "user create successfully", createUser })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteUserInfo = async (req, res) => {
    try {
        const { id } = req.body

        const deleteUser = await User.destroy({
            where: { id }
        })

        if (deleteUser === 0) return res.status(404).json({ message: "user is not found" })

        return res.status(200).json({ message: "user is successfully delete" })

    } catch (error) {

        return res.status(500).json({ message: error.message })

    }
}

const updateUserInfo = async (req, res) => {
    try {
        const { id, fName, lname, age, gender } = req.body
        const [updateCount] = await User.update({ ...req.body }, { where: { id } })
        if (updateCount === 0) return res.status(404).json({ message: "user is  not found" })

        return res.status(200).json({ message: "user info update " })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProfile = async (req, res) => {
    try {
        const { id } = req.body
        const user = await User.findByPk(id)
        if (!user) return res.status(404).json({ message: 'user profile is not found' })
        return res.status(200).json({ message: 'user profile ', user })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const testQueries = async (req, res) => {

    // const user= await User.findAll({attributes:{exclude:["fName"]}})
    // const user=await User.findAll({where:{id:3}})]
    // const user = await User.findAll({ where: { age: { [Op.gte]: 10, [Op.lte]:30 } } })
    // const user = await User.findAll({ where: { age: { [Op.between]: [10,30] } } })
    // const user = await User.findAll({
    //     where: {
    //         [Op.or]: {
    //             id: 3,
    //             gender: 'male'
    //         }
    //     }
    // })


    // const user=await User.findAll({where:{
    //     id:sql.attribute('fName')
    // }})


    // res.json({ user })

}

const oneToManyRel = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'fName', 'lName', 'age', 'gender'],
            include: [{
                model: Post,
                as: 'posts',
                attributes: ['id', 'title', 'content']
            }]
        });
        return res.status(200).json({ users })

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }

}

export { createUserController, deleteUserInfo, updateUserInfo, getProfile, oneToManyRel }