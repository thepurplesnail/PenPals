// 1] dependencies
const express = require('express');
const app = express();

// 2] main
app.listen(8000, function(){
    console.log("server is running!");
})

// 3] test array
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

// 4] test GET request
app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData // retrevies entire array
    })
})

// 5] test GET id request
app.get('/users/:id',function(req, res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id // retrevies request parameter from URL :id
                            // THIS DOES NOT GET DATA YET
	})
})