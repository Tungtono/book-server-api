import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

const addNewBook = (req, res) => {
    const newBook = new Book(req.body);
        newBook.save()
        .then ((result) => {res.send(result)})
        .catch ((err) => {
            res.send(err);
        });
};

//get a specific book by the id in params
const getBookById = (req, res) => {
    Book.find({ id: req.params.id })
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err.message)
    })
    // res.send(req.params)
};

// Get all books from the db
const getAllBooks = (req, res) => {
    Book.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
};

//search by title
const getBookByKeyword = (req, res) => {
    Book.find( { title: { "$regex": req.params.key, "$options": "i" }} )
    .then((result) => {
        res.send(result)
        // res.send(req.params)
    })
    .catch((err) => {
        res.send(err)
    })
}

//delete book by id
const deletePostById = (req, res) => {
    Book.deleteOne({ id: req.params.id})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
};

const updateBookById = (req, res) => {
    // const filter = req.params.id;
    // const updatedBook = req.body;
    Book.findOneAndUpdate( { id: req.params.id}, req.body, { new: true} )
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
};

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', addNewBook);

router.delete('/:id', deletePostById)

router.patch('/:id', updateBookById)

router.get('/search/:key', getBookByKeyword)

export default router;


