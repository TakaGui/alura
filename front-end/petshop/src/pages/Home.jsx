import React from 'react'

import { PostList } from '../components/PostList';

export const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet notícias</h2>
      </div>

      <PostList url={ '/posts' }/>

    </main>
  )
}
