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