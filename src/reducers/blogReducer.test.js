import blogReducer from './blogReducer'
import deepFreeze from 'deep-freeze'

describe('blogReducer', () => {
  test('returns new state with action NEW_BLOG', () => {
    const state = []
    const action = {
      type: 'NEW_BLOG',
      data: {
        title: 'the app state is in redux store',
        author: 'RQ',
        content: 'another one',
        id: 1
      }
    }
  
    deepFreeze(state)
    const newState = blogReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test('returns new state with action LIKE', () => {
    const state = [
      {
        title: 'first things first',
        author: 'RQ',
        content: 'somestuff',
        id: 1,
        likes: 0
      },
      {
        title: 'second thing second',
        author: 'RQ',
        content: 'otherstuff',
        id: 2,
        likes: 0
      }
    ]

    const action = {
      type: 'LIKE',
      data: {
        like: 1,
        id: 2
      }
    }

    deepFreeze(state)
    const newState = blogReducer(state, action)
    
    expect(newState).toHaveLength(2)

    expect(newState).toContainEqual(state[0])

    expect(newState).toContainEqual({
      title: 'second thing second',
        author: 'RQ',
        content: 'otherstuff',
        id: 2,
        likes: 1
    })
  })
})

