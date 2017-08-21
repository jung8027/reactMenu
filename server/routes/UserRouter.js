const router = require('express').Router();
const models = require('../models');

//FUNCTIONS//
const getAllUsers = (req, res) => {
	models.User.findAll({})
		.then((users) => {
			res.send(users);
		})
}

const createUser = (req, res) => {
	models.User.create({
		UserName: req.body.username,
		Email: req.body.email,
		Password: req.body.password
	})
		.then((UserInfo) => {
			UserInfo.dataValues.message = 'User successfully added!';
			res.send(MentorInfo);
		})
}

//ROUTES//

router.route('/')
	.get(getAllUsers)
	.post(createUser)

module.exports = router;