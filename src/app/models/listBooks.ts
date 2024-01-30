import { Book, BooksByCategory } from "./models";

export const booksToDisplayList: BooksByCategory[] = [
    {
      bookCategoryId: 1,
      category: 'C',
      subCategory: 'S',
      books: [
        {
          id: 1,
          title: 'T',
          author: 'A',
          price: 100,
          ordered: false,
          bookCategoryId: 1,
          bookCategory: { id: 1, category: '', subCategory: '' },
        },
      ],
    },
  ];

  export const booksList : Book[] = [
    {
      id : 1,
      author : "Thomas Corman",
      bookCategoryId : 1,
      ordered : false,
      price : 100,
      title : "Introduction to Algorithm",
      bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
  },
  {
    id : 2,
    author : "Robert Sedgewick & Kevin Wayne",
    bookCategoryId : 1,
    ordered : false,
    price : 200,
    title : "Algorithms",
    bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
},
{
  id : 3,
  author : "Steve Skiena",
  bookCategoryId : 1,
  ordered : false,
  price : 100,
  title : "The Algorithm Design Manual",
  bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
},







    
  ]
