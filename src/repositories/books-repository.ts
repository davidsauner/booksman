import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import connection from "../database";

export async function getBooks() {

  return  await connection.books.findMany();

}

export async function getBook(id: number) {

  const result = await connection.books.findFirst({
    where: { id: id },
  })
  return result;
}

export async function createBook(book: CreateBook) {
  const { title, author, publisher, purchaseDate } = book;
;

  const result = await connection.books.create({
    data: { title, author, publisher, purchaseDate}
  })

  return result
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  const result = await connection.books.update({where: {id: bookId},
    data:{grade: grade, review: review}});


  return result;
}