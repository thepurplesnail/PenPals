// THIS IS ALL JUST A TEST [A refresher]
// 1] dependencies
const express = require('express')
const app = express()

// 6] addittional dependencies for reading JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 2] main
app.listen(8000, function(){
    console.log("server is running!")
})

// 3] test array
const mockUserData=[
    {name:'mark', age:18},
    {name:'jill', age: 20}
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
	let findName = req.params.id
    console.log(findName)
	res.json({
		success: true,
		message: 'got one user',
		user: mockUserData.find( ({ name }) => name === findName )
	})
})

// 7] test POST request
app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like bcrypt before sending to database
	const username=req.body.username;
	const password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})