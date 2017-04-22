const router = require('express').Router();
const path = require('path')
const bcrypt= require('bcrypt-node');
const request = require('request');


router.post('/reverse', (req,res) => {

	let str = req.body.str;
	
	console.log("THE STR: ", str)

	request.post({url: "http://fedora-nyc1.laulabs.net:3000/reverse",str},
		function(error,response,body) {
			console.log("THE BODY IS: ",body);
			if (!error && response.statusCode === 200) {            
        	res.send(body);
      		} else {
        	res.json(error);
    	  	}
	});
});


module.exports = router;