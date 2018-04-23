var express = require('express');
var User = require("../public/javascripts/user_model.js");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    getUserList(req, res).then(function(data) {
        res.render('users', {userList: data}) ;
    })

});

var getUserList = function (req, res) {
    return new Promise(function (resolve, reject) {
        User.find({}, function (err, result) {
            if (err) {
                console.log("Error:" + err);
            } else {
                var dataList =[];

                var data = result.map(function(user) {
                    dataList.push(user);
                })
                resolve(dataList);
            }
        })
    })

}

router.post('/add', function(req, res, next) {
    var user = new User({
        username: req.body.name,
        userpwd: req.body.password,
        logindate: new Date(),
        addresses : [
            { street: '123 Sesame St', city: 'Anytown', cc: 'USA' },
            { street: '123 Avenue Q', city: 'New York', cc: 'USA' }
        ]
    })

    user.save(function(err, result) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + result);


            res.redirect('/users');
        }
    })

});

router.post('/delete', function(req, res, next) {
    User.remove({_id: req.body.userId}, function(err, result) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + result);


            res.redirect('/users');
            // getUserList(req, res).then(function(data) {
            //     res.render('users', {info: 'Delete successfully!', userList: data});
            // })
        }
    })

});

module.exports = router;
