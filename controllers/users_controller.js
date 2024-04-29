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
    return res.render('user_sign_up',{
        title:"codial | signup"
    })
}
module.exports.signUp=function(req,res){
    return res.render('sign_up',{
        title:"codial | sign Up"
    })
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codial | sign In"
    })
}

module.exports.create=function(req,res){
    // todo later
}

module.exports.createSession=function(req,res){
    //later
}