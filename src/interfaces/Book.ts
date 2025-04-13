export interface Book {
  id: number
  title: string
  path?: string
  category_id: number
  author: string
  description: string
  isbn: string
  publisher: string
  published_date: Date
  status: number
}
