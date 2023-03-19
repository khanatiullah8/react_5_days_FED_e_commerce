import React from 'react'
import StyledFilterSidebar from './FilterSidebar.styled'
import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import SearchFilter from './SearchFilter';
import ClearFilter from './ClearFilter';

const FilterSidebar = ({filteredProducts}) => {

  const ourProducts = useSelector((state) => state.products.product);

  const categoriesAll = filteredProducts().map(item => item.category);
  let categoriesObj = {};

  categoriesAll.forEach((category) => {
    categoriesObj[category] = (categoriesObj[category] || 0) + 1;
  });
  
  const categoriesCount = Object.entries(categoriesObj);
  const productPrices = ourProducts.map(item => item.price);
  const maxPrice = Math.ceil(Math.max(...productPrices));

  return (
    <StyledFilterSidebar>
      {ourProducts && ourProducts.length > 0 && (
        <>
          <ClearFilter maxPrice={maxPrice} />
          <SearchFilter />
          <PriceFilter maxPrice={maxPrice} />
          <CategoryFilter categoriesCount={categoriesCount} />
        </>
      )}
    </StyledFilterSidebar>
  );
}

export default FilterSidebar