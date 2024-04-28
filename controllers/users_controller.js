module.exports.profile=function(req,res){
    return res.render('user',{
        title:"userpage",
        user:'thiru'
    })

}
module.exports.profilepoints=function(req,res){
    return res.end("<h1>Total points: 110</h1>")
}