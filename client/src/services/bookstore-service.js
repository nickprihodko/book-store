export default class BookstoreService {
  data = [
    { id: 1, title: "Book-1", author: "Author-1", price: 50, coverImage: "" },
    {
      id: 2,
      title: "Book-2",
      author: "Author-2",
      price: 100,
      coverImage: "",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}
