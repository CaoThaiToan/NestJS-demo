import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('nên được khởi tạo thành công', () => {
    expect(appController).toBeDefined();
  });

  it('findAll nên trả về danh sách sách', () => {
    const books = appController.findAll();
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBeGreaterThan(0);
  });

  it('create nên thêm sách mới', () => {
    const newBook = appController.create({
      id: 99,
      title: 'Sách mẫu',
      author: 'Tác giả mẫu',
      description: 'Mô tả mẫu',
    });
    expect(newBook.id).toBe(99);
  });
});
