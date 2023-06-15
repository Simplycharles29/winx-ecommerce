import React, { useEffect, useState } from 'react'
import { firstCategory, secondCategory } from '../data/Catergorydata'

const Categories = () => {

  const [category, setCategory] = useState([])
  const [categorySecond, setCategorySecond] = useState([])

  useEffect(() =>{
    getCategory()
  }, [])

  const getCategory = () =>{
    setCategory(firstCategory)
  }

  useEffect(() =>{
    getSecondCategory()
  }, [])

  const getSecondCategory = () =>{
    setCategorySecond(secondCategory)
  }

  return (
    <section id='categories'>
      <div className="categories">
        {category.map(list =>{
          return <div className="category" key={list.id}>
            <div className="image">
              <img src={list.image} alt="" />
            </div>
            <div className="category-text">
              <h2>{list.text}</h2>
              <a href="#" className='category-btn showcase-btn'>Shop Now</a>
            </div>
          </div>
        })}
      </div>
      <div className="second-cat">
      {categorySecond.map(list =>{
          return <div className='second-category' key={list.id}>
            <div className="image">
              <img src={list.image} alt="" />
            </div>
            <div className="category-text">
              <h2>{list.text}</h2>
              <a href="#" className='category-btn showcase-btn'>Shop Now</a>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Categories
