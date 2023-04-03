import React, { useEffect, useState } from 'react'
import Button from '../button/Button';
import { filterPriceSet, priceFilter } from '../../reducers/FilterProductSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const PriceFilter = ({maxPrice}) => {
  const dispatch = useDispatch();
  const [rangeValueMin, setRangeValueMin] = useState(0);
  const [rangeValueMax, setRangeValueMax] = useState(maxPrice);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(filterPriceSet({min: 0, max: maxPrice}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormFilter = (e) => {
    e.preventDefault();
  }

  const handleRangeTrackBg = (rangeOne, rangeTwo) => {
    const rangeTrack = document.querySelector('.range-track');
    const percentOne = (+rangeOne.value / +maxPrice) * 100;
    const percentTwo = (+rangeTwo.value / +maxPrice) * 100;

    rangeTrack.style.background = `linear-gradient(to right, #878787 ${percentOne}%, #3577F1 ${percentOne}%, #3577F1 ${percentTwo}%, #878787 ${percentTwo}%)`
  }

  const rangeGap = 10;

  const handleMinRangeInput = (e) => {
    const filterForm = document.querySelector('.range-filter-form');
    const inputMax = filterForm.inputMax;
    
    if(+inputMax.value - +e.target.value <= rangeGap) {
      e.target.value = +inputMax.value - rangeGap;
    }

    setRangeValueMin(+e.target.value)
    handleRangeTrackBg(e.target, inputMax);
  }

  const handleMaxRangeInput = (e) => {
    const filterForm = document.querySelector('.range-filter-form');
    const inputMin = filterForm.inputMin;
    
    if(+e.target.value - +inputMin.value <= rangeGap) {
      e.target.value = +inputMin.value + rangeGap;
    }

    setRangeValueMax(+e.target.value)
    handleRangeTrackBg(inputMin, e.target);
  }

  const handlePriceFilter = () => {
    dispatch(priceFilter({min: rangeValueMin, max: rangeValueMax}))
    setSearchParams({min: rangeValueMin, max: rangeValueMax})
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <h3 className="filter-title">fitler by price</h3>
      <form className='range-filter-form' onSubmit={handleFormFilter}>
        <div className='range-value'>
          <span>{rangeValueMin}</span>-
          <span>{rangeValueMax}</span>
        </div>
        <div className="input-group">
          <span className='range-track'>range track</span>
          <input name='inputMin' type="range" min={0} max={maxPrice} defaultValue={0} onChange={handleMinRangeInput} />
          <input name='inputMax' type="range" min={0} max={maxPrice} defaultValue={maxPrice} onChange={handleMaxRangeInput} />
        </div>
        <div className="input-control">
          <Button className="price-filter-btn" onclick={handlePriceFilter}>apply</Button>
        </div>
      </form>
    </div>
  )
}

export default PriceFilter