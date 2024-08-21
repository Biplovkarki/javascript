const books = [
    {
        name :"network programming",
        price: 330
    },
    {
        name :"java kprogramming",
        price: 330
    },
    {
        name :"scripting language",
        price: 330
    },
];
books.forEach((book) =>{
console.log(book.name);
book.name="mahabharat";
});
console.log(books);