import React, { useEffect, useState } from 'react'

export const Headder = ({menuopen , setmenuopen}) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, []) 

  return (
    <>
      <div className={`head ${scrolled ? 'scrolled' : ''}`}>



       <div className='logo-area'>
  <i
    className='fa-solid fa-bars menu-icon'
    onClick={() => setmenuopen(!menuopen)}
  ></i>
  <h1>LOGO/BLOG</h1>
</div>



        <div className='inputs'>
          <input type="text" placeholder='What Do You Want To Read?' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <button className='btn'>Sign in</button>
        
      </div>
    </>
  )
}
export default Headder