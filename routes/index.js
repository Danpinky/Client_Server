var express = require('express');
var router = express.Router();

//const usersController = require('../controllers/UsersController');
const {validationRules, UsersController} = require("../controllers/UsersController");
const { ProductController } = require('../controllers/ProductController');
const { CompanyController } = require('../controllers/companyController');
const { SchoolController } = require('../controllers/schoolController');
const ProductORM = require('../models/productORM');
const CompanyORM = require('../models/companyORM');
const SchoolORM = require('../models/schoolORM');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'layout2' });
});

router.get('/allusers', UsersController.getAllUsers);

router.get('/adduser', (req, res)=>{
  res.render("adduser");
});

// User
router.get('/adduser/:id', UsersController.getUser);

router.post('/adduser', validationRules, UsersController.addUser);

router.post('/adduser/:id', validationRules, UsersController.updateUser);

router.delete('/deleteuser/:id', validationRules, UsersController.deleteUser);

// Product

router.get('/addproduct', (req, res)=>{
  res.render("addproduct");
});

router.get('/updateproduct/:id', async(req,res) => {
  const getProduct = await ProductORM.findByPk(req.params.id)

  res.render('updateproduct', {product:getProduct})
}) /*Este de atras mio es el endpoint que se utiliza para actualizar productos
    Se le envian los datos de la peticion en la url y se busca en la base de datos el usuario que tenga estos datos
    dentro del HBS se reciben y se rellenan los campos para que cuando se renvien son los mismos datos mas modificaciones que haya.
*/

router.post('/addproduct/:id', ProductController.getProduct) //Esto es el llamado de productos en individual, se busca el id  y en el HBS se rellena con esa info

router.post('/addproduct', ProductController.insertProduct) //Este endpoint es el de crear usuarios mandas datos a este endpoint y se crean en la base

router.post('/updateproduct/:id', ProductController.updateProduct) // Aqui se conecta el id del usuario con los cambios que se hacen en el forms y se actualiza la tabla


router.delete('/deleteproduct/:id', ProductController.deleteProduct) //Aqui se le da un id de usuario y se borra el que coincida


// Company

router.get('/addcompany',(req,res)=>{
  res.render('addcompany');
}) //Se renderiza la pagina de HBS addcompany para añadir compañia, esta la tienes que hacer tu!

router.get('/updatecompany/:id',async(req,res) => {
  const getCompany = await CompanyORM.findByPk(req.params.id)

  res.render('updatecompany',{company:getCompany})
}) // Esto hace lo mismo que el de product, se le envia la id y se rellena, para actualizar, ten bien en cuenta el nombre del archivo
//Se tiene que llamar updatecompany de ahuevo , si viene un "res.render('NOMBRE DEL ARCHIVO jeje' <== Asi es como le pones de nombre al archivo )"


router.post('/addcompany',CompanyController.addCompany) //Aca se añade una compañia a la base de datos

router.post('/addcompany/:id',CompanyController.getCompany) //Igual aca es donde se va a rellenar el id de la compañia

router.post('/updatecompany/:id',CompanyController.updateCompany) // aca se acutalizara la informacion de la compañia

router.delete('/deletecompany/:id',CompanyController.deleteCompany) // Aca con el id que se da, se borra la compañia

// School

router.get('/addschool',(req,res) => {
  res.render('addschool')
}) //Igual, renderiza la vista del addschool

router.get('/updateschool/:id', async(req,res) => {
  const getSchool = await SchoolORM.findByPk(req.params.id)


  res.render('updateschool',{school:getSchool})
}) //Renderiza la vista del updateschool y jala datos para rellenar

router.post('/addschool/:id',SchoolController.getSchool) // Jala datos para buscar escuela en particular

router.post('/addschool',SchoolController.addSchool) // Inserta una escuela en la base de datos

router.post('/updateschool/:id',SchoolController.updateSchool) // Actualiza los datos de la escuela con el id y los datos que los manda el HBS

router.delete('deleteschool/:id',SchoolController.deleteSchool) // Borra la escuela con el id del params.



module.exports = router;
