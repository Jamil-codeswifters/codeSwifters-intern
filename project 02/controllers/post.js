import Post from "../models/postSchema.js"

const createPost = async (req, res) => {
    try {
        const post = await Post.create({ ...req.body })
        return res.status(201).json({ message: "create post succcessfully", post })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export default createPost