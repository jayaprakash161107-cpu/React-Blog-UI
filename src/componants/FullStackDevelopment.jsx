import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './Blogcard'

export const FullStackDevelopment = () => {
  const filterdarray = blogs.filter((blog)=>(blog.domain === "Full Stack Development"))
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
export default FullStackDevelopment