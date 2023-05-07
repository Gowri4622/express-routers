const express=require('express')
const router = express.Router()


let lisOfService=[
        {
            "id":1,
            "Name":"Web Development"

        },
        {
            "id":2,
            "Name": 'Mobile Development'
        },
        {
            "id":3,
            "Name": 'React'
        },
        {
            "id":4,
            "Name": 'Express'
        },
        
    ]

    router.get('/',(request,response)=>{
        response.json(lisOfService)
    })
    
router.get('/:id',(request,response)=>{
    const serviceId=Number(request.params.id);
    const getService=lisOfService.find((service) => service.id===serviceId)

    if(!getService){
        response.status(500).send("Expected not found")
        console.log(request.params.id)
    }
    else{
        response.json(getService.Name)
    }
})

module.exports=router