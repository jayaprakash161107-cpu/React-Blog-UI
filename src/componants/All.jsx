import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './Blogcard'

export const All = () => {

  return (
   <>
   <div className='all-blog'>
    {blogs.map((blog)=>(
    <Blogcard key={blogs.id} blog={blog}/>
   ))}
   </div>
   
   </>
  )
}
export default All