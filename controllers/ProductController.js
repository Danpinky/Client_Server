const ProductORM = require("../models/productORM");

class ProductController {

    static async getProductById(req, res){

        const { id } = req.params

        const getProduct =await ProductORM.findOne({
            where:{
                id
            }
        })
        res.render('product',{product:getProduct});
    }


    static async getProduct(req,res){

        const { id } = req.params

        const result = await ProductORM.findByPk(id)

        if(result){

            return res.render("addproduct", {product:result})
        }
        return res.redirect('addproduct')
    }


    

    static async insertProduct(req,res){

        const {name,price,rating, description, image} = req.body

        const createProduct = await ProductORM.create({name,price,rating,description,image})

        if(createProduct){
            const productFind = await ProductORM.findOne({where:{
                name,
                price
            }})
            
            
            return res.render('product',{product:productFind})
        }
        return res.send('error while creating')
    }


    static async updateProduct(req,res){

        const { id } = req.params

        const {name,description,rating,price,image} = req.body

        await ProductORM.update({
            name,description,rating,price,image
        },
            {
            where:{
                id
            }
        })


        return res.redirect(`/product/${id}}`)



    }

    static async deleteProduct(req,res){

        const { id } = req.params

        await ProductORM.destroy({
            where:{
                id
            }
        })


        res.status(200).send("ok");

    }
}

module.exports = {ProductController}