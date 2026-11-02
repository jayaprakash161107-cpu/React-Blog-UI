import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from '../data/blogsData'
import Headder from './Headder'

export const BlogClick = () => {

  const{id} = useParams()
    

  const blog = blogs.find((blog)=>(blog.id === Number(id)))
  return (
    <>
    <Headder/>
    <div className='blog-container'>
        <h1><strong>{blog.title}</strong></h1>
        
        
          <div className='blog-innercontainer'>
              <img src={blog.img} alt="" />
        
       
         <div className='blog-text'>
           <p><strong>{blog.domain}</strong></p>
        <p>NOV 16,2007</p>
        <p>{blog.content}</p>
        <button className='read-btn' onClick={() => alert("NO More Content.....Thank You")}>Read Me...</button>
         </div>
          </div>
       
    </div>
    
    </>
  )
}
export default BlogClick