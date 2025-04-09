import axios from 'axios'

const getBooks = () => {
  // async () => {
  const test = axios.get('http://localhost/api/books')
  return test.data
  // }
}

// const getBooks = () => {
//   const books = ref([])

//   const load = async () => {
//     try {
//       const data = await axios.get('http://localhost/api/books')
//       console.log(data)
//       books.value = await data
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   load()

//   return { posts }
// }

export default getBooks
