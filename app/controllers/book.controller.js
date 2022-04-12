const db = require("../models");
const Sequelize = require('sequelize');

const Book = db.books;
const Op = Sequelize.Op;

exports.createBook = async (req, res) => {
    const { title, description } = req.body
    try{
        const book = await Book.create({title, description})
        res.json(book)
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
  
};

exports.readBook = async (req, res) => {
    try{
        const books = await Book.findAll()
        res.json(books)
    } catch(err){
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    }
};

exports.findBook = async (req, res) => {
    const query = req.params.uuid
    try{
        const book = await Book.findAll({ 
            where: {
                [Op.or]: [
                 {title: { [Op.like]: '%' + query + '%' }},
                 {description: { [Op.like]: '%' + query + '%' }}
                ]
              }
         })
        res.json(book)
    } catch(err){
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    }
};

exports.deleteBook = async (req, res) => {
    const uuid = req.params.uuid
    try{
        const book = await Book.destroy({ where: {uuid}})
        res.json({message: 'Book Deleted'})
    } catch(err){
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    }
};

exports.updateBook = async (req, res) => {
    const uuid = req.params.uuid
    const { title, description } = req.body
    try{
        const book = await Book.update({ title, description },
             { where: {uuid}})
        res.json(book)
    } catch(err){
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    }
};
  
  