module.exports = (req,res,next)=>{
res.send({
 "error status": 404,
 "error message": "page not found"
})
}