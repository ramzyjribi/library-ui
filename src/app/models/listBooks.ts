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
          price: 2,
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
      price : 4,
      title : "Introduction to Algorithm",
      bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
  },
  {
    id : 2,
    author : "Robert Sedgewick & Kevin Wayne",
    bookCategoryId : 1,
    ordered : false,
    price : 5,
    title : "Algorithms",
    bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
},
{
  id : 3,
  author : "Steve Skiena",
  bookCategoryId : 1,
  ordered : false,
  price : 9,
  title : "The Algorithm Design Manual",
  bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
},
{
  id : 4,
  author : "Adnan Aziz",
  bookCategoryId : 1,
  ordered : false,
  price : 4,
  title : "Algorithms For Interviews",
  bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
},
{
  id : 5,
  author : "George Heineman",
  bookCategoryId : 1,
  ordered : false,
  price : 4,
  title : "Algorithm in Nutshell",
  bookCategory : { id : 1,category :"computer" ,subCategory:"algorithm"}
},
{
  id : 6,
  author : "Eric Matthes",
  bookCategoryId : 2,
  ordered : false,
  price : 4,
  title : "Python Crash Course",
  bookCategory : { id : 2,category :"computer" ,subCategory:"programming languages"}
},
{
  id : 7,
  author : "Eric Matthes",
  bookCategoryId : 2,
  ordered : false,
  price : 4,
  title : "Python Crash Course",
  bookCategory : { id : 2,category :"computer" ,subCategory:"programming languages"}
},
{
  id : 8,
  author : "Eric Matthes",
  bookCategoryId : 2,
  ordered : false,
  price : 4,
  title : "Python Crash Course",
  bookCategory : { id : 2,category :"computer" ,subCategory:"programming languages"}
},
{
  id : 9,
  author : "Paul Barry",
  bookCategoryId : 2,
  ordered : false,
  price : 4,
  title : "Head First Python",
  bookCategory : { id : 2,category :"computer" ,subCategory:"programming languages"}
},
{
  id : 10,
  author : "Paul Barry",
  bookCategoryId : 2,
  ordered : false,
  price : 4,
  title : "Head First Python",
  bookCategory : { id : 2,category :"computer" ,subCategory:"programming languages"}
},
{
  id : 11,
  author : "Paul Barry",
  bookCategoryId : 2,
  ordered : false,
  price : 4,
  title : "Head First Python",
  bookCategory : { id : 2,category :"computer" ,subCategory:"programming languages"}
},
{
  id : 12,
  author : "James F Kurose",
  bookCategoryId : 3,
  ordered : false,
  price : 2,
  title : "Computer Networking",
  bookCategory : { id : 2,category :"computer" ,subCategory:"networking"}
},
{
  id : 13,
  author : "Rich Seifert",
  bookCategoryId : 3,
  ordered : false,
  price : 2,
  title : "The All-New Switch Book ",
  bookCategory : { id : 2,category :"computer" ,subCategory:"networking"}
},
{
  id : 13,
  author : "Rich Seifert",
  bookCategoryId : 3,
  ordered : false,
  price : 2,
  title : "The All-New Switch Book ",
  bookCategory : { id : 2,category :"computer" ,subCategory:"networking"}
},
{
  id : 13,
  author : "Rich Seifert",
  bookCategoryId : 3,
  ordered : false,
  price : 2,
  title : "The All-New Switch Book ",
  bookCategory : { id : 2,category :"computer" ,subCategory:"networking"}
},


    
  ]
