import React from 'react'
import { useDispatch } from 'react-redux';
import { categoryFilter } from '../../reducers/FilterProductSlice';
import { useSearchParams } from 'react-router-dom';

const CategoryFilter = ({categoriesCount}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryFilter = (category) => {
    dispatch(categoryFilter(category))
    window.scrollTo(0, 0);
    setSearchParams({category: category})
  }

  return (
    <div className='filter-by-categories'>
      <h3 className="filter-title">fitler by categories</h3>
      <ul className="product-category-lists">
        {categoriesCount.map(([category, count], i) => {
          return (
            <li key={i} onClick={() => handleCategoryFilter(category)}>
              <span className='category-name'>{category}</span>
              <span className='category-count'>({count})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryFilter