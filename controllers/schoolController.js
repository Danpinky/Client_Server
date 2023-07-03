const SchoolORM = require('../models/schoolORM')

class SchoolController {

    static async getSchool(req,res){
        const { id } = req.params

        const result = await SchoolORM.findByPk(id)

        if(result){
            return res.render('addschool',{school:result})
        }
    }

    static async addSchool(req,res){
        const { name, school_level,students_number } = req.body

        const result = await SchoolORM.create({
            name,school_level,students_number
        })

        if(result){
            return res.send('new school created')
        }
        return res.send('Error while adding school')

    }

    static async updateSchool(req,res){
        const {id} = req.params
        const {name,school_level,students_number} = req.body

        const result = await SchoolORM.update({
            name,school_level,students_number,
        },
        {
            where:{
                id
            }
        })

        if(result){
            return res.redirect('/school')
        }
        return res.send('Error while updating school')

    }

    static async deleteSchool(req,res){
        const {id} = req.params

        await SchoolORM.destroy({
            where:{
                id
            }
        })

        res.status(200).send('OKKii')

    }

}


module.exports = {SchoolController}