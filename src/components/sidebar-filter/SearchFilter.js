import React from 'react'
import { SearchIcon } from '../../assets/icons';
import { searchFilter } from '../../reducers/FilterProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.filterProduct.search);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputSearch = (e) => {
    dispatch(searchFilter(e.target.value.trim().toLowerCase()))
    setSearchParams({q: e.target.value.trim().toLowerCase()})
  }

  return (
    <div>
      <h3 className="filter-title">search</h3>
      <form className="header-form">
        <div className="input-group">
          <input
            type="text"
            className="input-search"
            placeholder="search products..."
            autoComplete='off'
            value={searchText}
            onChange={handleInputSearch}
          />
        </div>
        <div className="input-search-icon">
          <span className="search-icon">
            <SearchIcon />
          </span>
        </div>
    </form>
  </div>
  )
}

export default SearchFilter