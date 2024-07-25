import { setPostData } from '../actions'

export const savePostAsync = (requestServer, newDataPost) => (dispatch) =>
  requestServer('savePost', newDataPost).then((updatedPost) => {
    dispatch(setPostData(updatedPost.res))
  })
