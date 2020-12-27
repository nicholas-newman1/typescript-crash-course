class Book {
  /* set property types. Note, can add access modifiers private, public
  (default), or readonly (can be accessed inside and outside the class,
  but cannot have its value changed) */
  private title: string;
  private author: string;
  private pages: number;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  logInfo() {
    console.log(`${this.title} by ${this.author} (${this.pages} pages).`);
  }
}

/* Shorthand. Does the exact same thing as Book class. Note: must use access
modifiers to use the shorthand */
class Book2 {
  constructor(
    private title: string,
    private author: string,
    private pages: number
  ) {}

  logInfo() {
    console.log(`${this.title} by ${this.author} (${this.pages} pages).`);
  }
}

const booksData: {
  title: string;
  author: string;
  pages: number;
}[] = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 232,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    pages: 312,
  },
];

/* Note: classes can be used as types. Inferred type of Book[] */
let books = booksData.map(({ title, author, pages }) => {
  return new Book2(title, author, pages);
});

console.log(books);
