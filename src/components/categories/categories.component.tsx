import { useEffect, useState } from 'react'
import axios from 'axios'
import ICategory from '../../types/category.types'
import './categories.styles.css'
import env from '../../config/env.config'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log({ categories })

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
