const express = require('express')
const app=express()

const about = require('./aboutPage.js')
const service = require('./servicesPage.js')
const branch = require('./branchPage.js')
const home = require('./homePage.js')
const contact = require('./contactPage.js')
const post = require('./postPage.js')


app.use(express.urlencoded({extended : true}))

app.get('/',(request,response)=>{
    response.render('index')
})
app.set('view engine', 'ejs')



app.use('/about',about)
app.use('/service',service)
app.use('/branch',branch)
app.use('/home',home)
app.use('/contact',contact)
app.use('/post',post)

app.listen(3600)