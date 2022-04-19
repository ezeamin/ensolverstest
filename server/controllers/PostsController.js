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

  getPost(req, res) {
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
        const post = user.posts.filter((post) => {
          console.log(post);
          if (post.id === +req.params.id) {
            return post;
          }
        })[0];
        res.json(post);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  putPost(req, res) {
    DbPosts.update(
      {
        text: req.body.text,
        isDone: req.body.isDone,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  deletePost(req, res) {
    DbPosts.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
