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
        users: mockUserData
    })
})