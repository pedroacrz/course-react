import { FunctionComponent } from 'react'
import ICategory from '../../types/category.types'
import './category-item.styles.css'

interface ICategoryItemProps {
    category: ICategory
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ category }) => {
    return (
        <div className="category-item-container" style={{ backgroundImage: `url(${category.imageUrl})` }}>
            <div className="category-name">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
    )
}

export default CategoryItem
