import { ACTION_TYPE } from '../actions'

const initialPostState = {
  id: null,
  title: null,
  imageUrl: null,
  content: null,
  publishedAt: null,
  comments: [
    {
      id: 1,
      author: 'Youhu',
      publishedAt: '2050-01-01',
      content: 'Хорошая статья',
    },
  ],
}

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
