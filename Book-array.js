let book = [{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    page: 281,
},{
    title: "1984 the courage",
    author: "George Orwell",
    year: 1949,
    page: 328,
},{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    page: 180,
}
];
console.log(book[1].title); 
console.log(`The Author of this book is ${book[2].author}`);
console.log(`The book "${book[0].title}" was published in ${book[0].year} and has ${book[0].page} pages.`);