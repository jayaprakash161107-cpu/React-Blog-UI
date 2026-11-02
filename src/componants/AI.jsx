import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './Blogcard'

export const AI = () => {
 const filterdarray= blogs.filter((blog)=>(blog.domain === "AI"))
  return (
    <>
    <div className='all-blog'>
          {
      filterdarray.map((blog)=>(
     <Blogcard key={blogs.id} blog={blog}/>
    ))
    }
    </div>
    </>
  )
}
export default AI