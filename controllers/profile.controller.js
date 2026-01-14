function getUSerProfile(req,res){
    return res.render("profile",{
        name : req.user
    })
}
module.exports = getUSerProfile