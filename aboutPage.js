const express=require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is the About Page")
})

module.exports=router