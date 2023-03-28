const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./route/admin.js');
const shopRoutes=require('./route/shop.js');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Page not found!</h1>')
})

app.listen(3000,()=>{
    console.log('server started at port 3000');
})