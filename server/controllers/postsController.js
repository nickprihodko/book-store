const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  try {
    const queryParams = {
      where: { bookId: req.params.id },
      attributes: ["id", "text", "createdAt"],
    };

    const post = await Post.findAll(queryParams);
    res.json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.addPost = async (req, res) => {
  try {
    const { post, bookid } = req.body;
    const userId = req.user.id;

    const newPost = new Post({
      text: post,
      userId: userId,
      bookId: bookid,
    });

    await newPost.save();

    res.json(newPost);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.deletePost = async (req, res) => {
  try {
    const queryParams = {
      where: { id: +req.params.id },
    };
    const post = await Post.destroy(queryParams);
    res.json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
