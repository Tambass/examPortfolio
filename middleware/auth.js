// module.exports = {
//     ensureAuthenticated: (req, res, next) => {
//             if(!req.session.adminId){
//                 res.redirect("/login");                
//             }
//             next();
//     }
// }

module.exports = (req, res, next) => {
    try {
        if(req.session.adminId){
        next();
        }
        res.redirect("/login");                
    } catch (err) {
        res.send(err);
    }
}