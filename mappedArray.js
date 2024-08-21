// const number =[1,2,3,4,5];
// const mapped = number.map((x) =>{
//     return x*x;
// });
// console.log(mapped);

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
    }
];

const booksNames=books.map((book)=> {
return book.name;

});
console.log(booksNames);


//     books.map(function(e){
//         e.pages = 500;
//    });
             
//    console.log(books);

const bookNameWithPages = books.map((book)=>{
    return{
        name: book.name,
        price:book.price,
        pages:Math.floor(Math.random() * 50) + 1
    }
})
console.log(bookNameWithPages);

books.forEach((books)=>{
    books.pages="400";
})
console.log(books);
