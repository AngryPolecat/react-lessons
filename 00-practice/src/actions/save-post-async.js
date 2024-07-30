import { setPostData } from '../actions'

export const savePostAsync = (requestServer, newDataPost) => (dispatch) => {
  return requestServer('savePost', newDataPost).then((updatedPost) => {
    console.log('action: ', updatedPost)
    dispatch(setPostData(updatedPost.res))

    return updatedPost.res
  })
}
