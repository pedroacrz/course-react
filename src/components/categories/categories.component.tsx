import { useEffect, useState } from 'react'
import axios from 'axios'
import ICategory from '../../types/category.types'
import './categories.styles.css'
import env from '../../config/env.config'

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
        <div className="categories-container">
            <div className="categories-content">
                {/* {categories.map(category => <CategoryItem category={category} />)} */}
            </div>
        </div>
    )
}

export default Categories
