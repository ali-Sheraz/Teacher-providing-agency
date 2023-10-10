const Products=require('../models/Products')
module.exports={
    AllProducts:async (req,res)=>{
        const products=await Products.find()
        if(products){
            res.send(products).status(200)
        }
        else{
            res.send({}).status(400)
        }
    },
    postProducts:async (req,res)=>{
        console.log(req.body)
        const products=new Products(req.body)
        try{
        await products.save()
        res.send("ok").status(200)
        }catch{
            res.send().status(400)
        }
    }
}