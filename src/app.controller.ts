import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Book } from './book.interface.js';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1. Thêm sách mới: POST /books
  @Post('')
  create(@Body() book: Book): Book {
    return this.appService.createBook(book);
  }

  // 2. Lấy danh sách tất cả các sách: GET /books
  @Get('')
  findAll(): Book[] {
    return this.appService.getListBook();
  }

  // 3. Lấy thông tin chi tiết một cuốn sách theo id: GET /books/:id
  @Get(':id')
  findOne(@Param('id') id: string): Book | string {
    return this.appService.getBookById(Number(id));
  }

  // 4. Cập nhật thông tin sách theo id: PUT /books/:id
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | string {
    return this.appService.updateBook(Number(id), book);
  }

  // 5. Xóa một cuốn sách theo id: DELETE /books/:id
  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.appService.deleteBook(Number(id));
  }
}
