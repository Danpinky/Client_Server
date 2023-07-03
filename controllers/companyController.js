const CompanyORM = require("../models/companyORM");

class CompanyController {

    static async getAllCompanies(req,res){
        const results = await CompanyORM.findAll()

        if(results){

            res.render("",{company:results});
        }
    }

    static async getCompany( req,res ){
        const { id } = req.params

        const result = await CompanyORM.findByPk(id)

        if(result){
            res.render('addcompany',{company:result});
        }
    }


    static async addCompany(req,res){

        const {name,description,category} = req.body

        const result = await CompanyORM.create({
            name,
            description,
            category
        });

        console.log(result)

        if(result){
            return res.render('/company')
        }
        return res.send('Error while creating company')
    }

    static async updateCompany(req,res){
        const {id} = req.params
        const {name,description,category} = req.body
        
        const result = await CompanyORM.update({
            name,category,description
        },

        {
            where:{
                id
            }
        })


        if(result){
            return res.redirect('/company')
        }
        return res.send('Error while updating')
    }


    static async deleteCompany(req,res){
        const { id } = req.params

        await CompanyORM.destroy({
            where:{
                id
            }
        })

        return res.status(200).send("okii")


    }


}

module.exports = {
    CompanyController
}