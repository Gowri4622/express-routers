const express=require('express')
const userRouter = express.Router()


const lisOfService=[
    {
        
        "name":'Web Development',
        "cost":'10000',
        "duration":'2 weeks'
    },
    {
        
        "name":'Mobile Development',
        "cost":'20000',
        "duration":'3 weeks'
    },
    {
        
        
            "name":'React',
            "cost":'30000',
            "duration":'4 weeks'
        
    },
    {
        
        "name":'Express',
        "cost":'40000',
        "duration":'5 weeks'
    }
        
    ]

   
    
    userRouter.use(express.static('public'))

    userRouter.get('/:id([0-9]{1})',(request,response)=>{
        response.send(`${request.user.name} with id ${request.params.id}`)
        
    })
    userRouter.get('/new',(request,response)=>{
        response.render('service/new')
    })
    userRouter.post('/',(request,response)=>{
        lisOfService.push({name:request.body.name,cost:request.body.cost,duration:request.body.duration})
        response.redirect(`/service/${lisOfService.length}`)
        console.log(lisOfService)
    })
    
    userRouter.param('id',(request,response,next,id)=>{
        request.user=lisOfService[id-1]
        next()
    })
    
    
    
    module.exports = userRouter

