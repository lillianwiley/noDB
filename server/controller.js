let books = [];

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books);
    },
    addBook: (req, res) => {
        const {titleweb, authorweb} = req.body;
        let newBook = { 
            titleweb: titleweb, authorweb: authorweb
         }
        books.push(newBook)
        res.status(200).send(books)
    }
}