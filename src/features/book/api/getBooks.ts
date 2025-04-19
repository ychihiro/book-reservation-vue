import axios from '@/plugins/axios'
import type { Book } from '../types/Book'

export async function getBooks() {
  return await axios.get<{ data: Book[] }>('/api/books')
}
