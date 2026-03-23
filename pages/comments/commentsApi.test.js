import { jest, test, expect, beforeEach } from '@jest/globals';

// ✅ ES Module 환경에서는 unstable_mockModule 사용
jest.unstable_mockModule('./apiHandler.js', () => ({
  request: jest.fn(),
}));

// ✅ mock 설정 후 동적 import
const { request } = await import('./apiHandler.js');
const { createComments, searchComments, updateComments, deleteComments } = await import('./commentsApi.js');

const BASE_URL = 'https://api.fullstackfamily.com/api/edu/pride-d1c90b';

beforeEach(() => {
  request.mockClear();
});

test('createComments - POST 요청을 올바르게 보내는지', () => {
  createComments('123', '댓글 내용');
  expect(request).toHaveBeenCalledWith(`${BASE_URL}/posts/123/comments`, { method: 'POST', body: JSON.stringify({ content: '댓글 내용' }) });
});

test('searchComments - GET 요청을 올바르게 보내는지', () => {
  searchComments('123');
  expect(request).toHaveBeenCalledWith(`${BASE_URL}/posts/123/comments`, { method: 'GET' });
});

test('updateComments - PUT 요청을 올바르게 보내는지', () => {
  updateComments('456', '수정된 내용');
  expect(request).toHaveBeenCalledWith(`${BASE_URL}/comments/456`, { method: 'PUT', body: JSON.stringify({ content: '수정된 내용' }) });
});

test('deleteComments - DELETE 요청을 올바르게 보내는지', () => {
  deleteComments('456');
  expect(request).toHaveBeenCalledWith(`${BASE_URL}/comments/456`, { method: 'DELETE' });
});
