import React from 'react'
import { useNavigate } from 'react-router-dom'
import blogs from '../data/blogsData'


export const Blogcard = ({blog}) => {

    const navigate = useNavigate()

  return (
    <div onClick={()=>(navigate(`/blog/${blog.id}`))} className='blogss'>
        <img src={blog.img} alt="" />
        <p>{blog.title}</p>
    </div>
  )
}
export default Blogcard