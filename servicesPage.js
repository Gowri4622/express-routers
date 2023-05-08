const express=require('express')
const router = express.Router()


const lisOfService=[
        {
            
            "Name":"Web Development"

        },
        {
            
            "Name": 'Mobile Development'
        },
        {
            
            "Name": 'React'
        },
        {
            
            "Name": 'Express'
        },
        {
            
            "Name": 'Mango db'
        },
        
    ]

   
    
router.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user.Name)
})
router.param('id',(request,response,next,id)=>{
    request.user=lisOfService[id-1]
    next()
})

module.exports=router

