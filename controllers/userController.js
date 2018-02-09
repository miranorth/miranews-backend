const User = require('../models/userModel');

class UserController {
  static getAllUser (req, res) {
    User.find().then((results) => {
      res.status(200).json({
        msg: 'Data User Retrieved',
        data: results
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot Get Data User'
      })
    })
  }

  static getSingleUser (req, res) {
    User.findOne({
      _id: req.params.id
    }).then((result) => {
      res.status(200).json({
        msg  : 'Data Single User Retrieved',
        data : result
      })
    }).catch((err) => {
      res.status(500).json({
        msg : 'Cannot Get Data Single User'
      })
    })
  }

  static signUp (req, res) {
    let objUser = new User ({
      name       : req.body.name,
      phone      : req.body.phone,
      country    : req.body.country,
      facebookId : req.body.facebookId
    })

    objUser.save().then((result) => {
      res.status(200).json({
        msg  : 'Sign Up Success !',
        data : result
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot Sign Up !'
      })
    })
  }

  static editUser (req, res) {
    User.findById(req.params.id).then((dataUser) => {
      dataUser.name    = req.body.name    || dataUser.name,
      dataUser.phone   = req.body.phone   || dataUser.phone,
      dataUser.country = req.body.country || dataUser.country,

      dataUser.save().then((result) => {
        res.status(200).json({
          msg  : 'Edit User Success !',
          data : result
        })
      }).catch((err) => {
        res.status(500).json({
          msg: 'Cannot Edit User !'
        })
      })
    })
  }

  static deleteUser (req, res) {
    User.deleteOne({
      _id: req.params.id
    }).then(() => {
      res.status(200).json({
        msg  : 'Delete User Success !'
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot Delete User !'
      })
    })
  }
}


module.exports = UserController;
