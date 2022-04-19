const DbPosts = require("../database/models/Post");
const DbUsers = require("../database/models/User");

module.exports = {
  newPost(req, res) {
    DbPosts.create(
      {
        text: req.body.text,
        isDone: false,
        userId: req.user.id,
      },
      {
        include: [
          {
            model: DbUsers,
          },
        ],
      }
    )
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getPosts(req, res) {
    DbUsers.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: DbPosts,
        },
      ],
    })
      .then((user) => {
        res.json(user.posts);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
