import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../reducers/FilterProductSlice';
import Button from '../button/Button';
import { useSearchParams } from 'react-router-dom';

const ClearFilter = ({maxPrice}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(clearFilter({min: 0, max: maxPrice}))
    setSearchParams({})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClearFilter = () => {
    dispatch(clearFilter({min: 0, max: maxPrice}))
    setSearchParams({})
  }

  return (
    <div className='clear-filter'>
      <Button className='clear-filter-btn' onclick={handleClearFilter}>clear filter</Button>
    </div>
  )
}

export default ClearFilter