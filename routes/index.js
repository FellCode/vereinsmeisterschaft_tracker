var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user');

//ROOT
router.get('/',function(req,res){
	res.render('login');
});


//AUTH
router.get("/register", function(req, res) {
    res.render("register");
});
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser,req.body.password, function(err,user){
        if(err){
            return res.render("register");
        } else{
            passport.authenticate("local")(req,res, function(){
                res.redirect("/meisterschaft");
            });
        }
    });
});
router.get("/login", function(req, res) {
    res.render("login");
});
router.post("/login",passport.authenticate("local",
    {
        successRedirect: "/meisterschaft",
        failureRedirect: "/login"
    }), function(req, res) {
        
});
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
});




module.exports = router;