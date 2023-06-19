module.exports = (error,req,res,next)=>{
    res.status(500).send({
        "error status":500,
        "error massege":error.body || error,
    })
}