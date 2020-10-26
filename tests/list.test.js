const listHelper = require('../utils/list_helper')

const list = [
  {
    _id: "5a422a851b54a676234d17f7", 
    title: "React patterns", 
    author: "Michael Chan", 
    url: "https://reactpatterns.com/", 
    likes: 7, 
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8", 
    title: "Go To Statement Considered Harmful", 
    author: "Edsger W. Dijkstra", 
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", 
    likes: 5, 
    __v: 0
  },
  { 
    _id: "5a422b3a1b54a676234d17f9", 
    title: "Canonical string reduction", 
    author: "Edsger W. Dijkstra", 
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", 
    likes: 12, 
    __v: 0 
  }, 
  { 
    _id: "5a422b891b54a676234d17fa", 
    title: "First class tests", 
    author: "Robert C. Martin", 
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", 
    likes: 10, 
    __v: 0 
  }
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(list)
    expect(result).toBe(34)
  })
})

const toEquall = {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    likes: 12
  }

describe('Favorite Blog', () => {
  test('The blog with most likes', () => {
    const result = listHelper.favoriteBlog(list)
    expect(result).toEqual(toEquall)
  })
})

const author_with_mostBlogs = {
  author: 'Edsger W. Dijkstra',
  blogs: 2
}

describe('Most blogs', () => {
  test('The author with most blogs', () => {
    const result = listHelper.mostBlogs(list)
    expect(result).toStrictEqual(author_with_mostBlogs)
  })
})