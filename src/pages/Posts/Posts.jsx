import React from 'react'
import { database } from '../../firebase/firebase'
import { auth } from '../../firebase/firebase'
import PostCard from './postcard/PostCard'

const Posts = () => {
  return (
    <>
      <PostCard></PostCard>
    </>
  )
}

export default Posts