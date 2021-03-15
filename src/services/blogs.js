import axios from 'axios'

const baseUrl = 'http://localhost:3001/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateBlog = async (newBlog, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, newBlog)
  return response.data
}

export default { 
  getAll,
  createNew,
  updateBlog
 }
