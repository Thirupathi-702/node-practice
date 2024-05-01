const User=require('../models/user')
module.exports.profile=function(req,res){
    return res.render('user',{
        title:"userpage",
        user:'thiru'
    })

}
module.exports.profilepoints=function(req,res){
    return res.end("<h1>Total points: 110</h1>")
}

module.exports.signUp=function(req,res){
    return res.render('sign_up',{
        title:"codial | signup"
    })
}


module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codial | sign In"
    })
}


module.exports.create = function(req, res) {
    console.log(req.body);
    if (req.body.password !== req.body.confirm_password) {
        return res.redirect('back');
    }

    // Using findOne() to check if the user already exists
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // User already exists
                return res.redirect('back');
            } else {
                // User doesn't exist, create a new one
                User.create(req.body)
                    .then(newUser => {
                        return res.redirect('/users/sign-in');
                    })
                    .catch(err => {
                        console.log("Error in creating user while signing up:", err);
                        return res.redirect('back');
                    });
            }
        })
        .catch(err => {
            console.log("Error in finding user in signing up:", err);
            return res.redirect('back');
        });
}


module.exports.createSession=function(req,res){
    //later
}