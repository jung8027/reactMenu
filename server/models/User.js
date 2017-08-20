"use strict";

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		UserName: {
			type: DataTypes.STRING,
			validate: {notEmpty: true}
		},
		Email: {
			type: DataTypes.STRING,
			validate: {notEmpty: true, isEmail: true}
		},
		Password: {
			type: DataTypes.STRING,
			validate: {notEmpty: true, len: [8,25]}
		}
	});
	return User;
};
