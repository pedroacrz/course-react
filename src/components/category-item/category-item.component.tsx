import { FunctionComponent } from 'react'
import ICategory from '../../types/category.types'
import { CategoryItemContainer, CategoryName } from './category-item.styles'
import './category-item.styles.css'

interface ICategoryItemProps {
  category: ICategory
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
