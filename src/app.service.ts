import { Injectable } from '@nestjs/common';
import type { Book } from './book.interface.js';

const bookList: Book[] = [
  {
    id: 1,
    title: 'Lập trình NestJS cơ bản',
    author: 'Nguyễn Văn A',
    description: 'Hướng dẫn NestJS cho người mới bắt đầu',
  },
];

@Injectable()
export class AppService {
  // 1. Thêm sách mới
  createBook(book: Book): Book {
    if (!book.id) {
      book.id = bookList.length > 0 ? Math.max(...bookList.map((b) => b.id)) + 1 : 1;
    }
    bookList.push(book);
    return book;
  }

  // 2. Lấy danh sách tất cả các sách
  getListBook(): Book[] {
    return bookList;
  }

  // 3. Lấy thông tin chi tiết một cuốn sách theo id
  getBookById(id: number): Book | string {
    const book = bookList.find((item) => item.id === id);
    if (!book) {
      return `Không tìm thấy sách có id = ${id}`;
    }
    return book;
  }

  // 4. Cập nhật thông tin sách theo id
  updateBook(id: number, updatedBook: Partial<Book>): Book | string {
    const index = bookList.findIndex((item) => item.id === id);
    if (index === -1) {
      return `Không tìm thấy sách có id = ${id}`;
    }
    bookList[index] = { ...bookList[index], ...updatedBook };
    return bookList[index];
  }

  // 5. Xóa một cuốn sách theo id
  deleteBook(id: number): string {
    const index = bookList.findIndex((item) => item.id === id);
    if (index === -1) {
      return `Không tìm thấy sách có id = ${id}`;
    }
    bookList.splice(index, 1);
    return `Đã xóa cuốn sách có id = ${id} thành công`;
  }
}
