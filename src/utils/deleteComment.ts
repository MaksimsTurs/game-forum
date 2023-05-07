//Services imports
import Comment from '@/services/comment/comment.services'

const deleteComment = async (id: string, role: unknown, token: unknown) => {
  let error: string = ''
  
  const requestBody = {
    role,
    token,
    id
  }

  const data = await Comment.deleteComment(requestBody)

  error = data

  return { error }
}

export default deleteComment