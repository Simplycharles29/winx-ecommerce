import React, { useState, useEffect } from 'react'
import Pagination from '../Component/Pagination'
import { Link } from 'react-router-dom'

const Products = ({ products }) => {

    
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)
    const [searchTerm, setSearchTerm] = useState('')
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
       window.addEventListener("resize", handleResizeWindow);
       return () => {
         window.removeEventListener("resize", handleResizeWindow);
       };
     }, [width]);
    if(width > '670' & postsPerPage == 6 || postsPerPage == 4){
      setPostsPerPage(8)
    }
    

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = products.slice(firstPostIndex, lastPostIndex)


  return (
    <section id='products'>
        <div className="nav">
        <div className="product-nav">
            <div className="product-title">
                <h5>Categories:</h5>
                <ul>
                <a href="#">All</a>
                <a href="#">Jeans</a>
                <a href="#">Shirts</a>
                <a href="#">Bags</a>
                <a href="#">Shoes</a>
                <a href="#">Appliances</a>
            </ul>
            </div>
            
            <form action="" className="search">
                <input type="text" onChange={e =>{setSearchTerm(e.target.value)}} placeholder='search...' />
            </form>
        </div>
        </div>
      <div className="products-container">
      <div className="products">
      {currentPosts.filter(val =>{
          if(searchTerm === ''){
            return val
          }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map(list =>{
            return <div className="product-height">
              <Link to={`/product/${list.id}`}>
              <div className='product' key={list.id}>
                <div className="image">
                    <img src={`http://127.0.0.1:8000${list.image}`} alt="" />
                </div>
                <div className="text">
                    <small>{list.category}</small>
                    <h3>{list.name}</h3>
                    <h4>#{list.price}</h4>
                </div>
            </div>
            </Link>
            </div>
        })}
      </div>
      <Pagination totalPosts={products.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
    </section>
  )
}

export default Products

///${list.category}/${list.price}