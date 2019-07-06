const express = require('express');

module.exports = {
	vklogin: (req, res) => {
		let ans = 'zalupa';

		console.log('controller');

		res.json(ans);
	}
};