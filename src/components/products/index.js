import React, { useEffect } from 'react'
import StyledOurProducts from './OurProducts.styled'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import SectionTitle from '../section-title/SectionTitle';
import { BasketIcon } from '../../assets/icons'
import FilterSidebar from '../sidebar-filter/index'
import { fetchProducts } from '../../reducers/OurProductSlice'
import { useDispatch } from 'react-redux'
import Modal from '../modal/Modal';
import Loader from '../loader/Loader';

const OurProducts = () => {
  const dispatch = useDispatch();

  const modalItems = useSelector((state) => state.modal);
  const ourProducts = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.loading);
  const fetchError = useSelector((state) => state.products.error);
  const searchFilter = useSelector((state) => state.filterProduct.search);
  const categoryFilter = useSelector((state) => state.filterProduct.category);
  const priceFilter = useSelector((state) => state.filterProduct.price);

  useEffect(() => {
    dispatch(fetchProducts())
    if(!document.documentElement.classList.contains('overflow-hidden')) {
      window.scrollTo(0, 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredProducts = () => {
    let products = ourProducts;

    if(searchFilter.length > 0) {
      products = products.filter(item => item?.title.toLowerCase().includes(searchFilter) || item?.brand.toLowerCase().includes(searchFilter))
    }
    if(categoryFilter) {
      products = products.filter(item => item?.category === categoryFilter)
    }
    if(priceFilter !== {}) {
      products = products.filter(item => item?.price >= priceFilter.min && item?.price <= priceFilter.max)
    }

    return products;
  }

  return (
    <StyledOurProducts>
      <SectionTitle
        Icon={BasketIcon}
        heading={`explore all products`}
        subtitle="our products"
      />
      {loading && <Loader>loading...</Loader>}
      <div className="products-filter-container">
        <FilterSidebar filteredProducts={filteredProducts} />
        <ul className="product-items-all">
          {ourProducts &&
            ourProducts.length > 0 &&
            filteredProducts().map((item, i) => (
              <ProductCard
                filteredProducts={filteredProducts}
                i={i}
                key={item.id}
                item={item}
              />
            ))}

          {filteredProducts() &&
            filteredProducts().length < 1 &&
            fetchError === "" &&
            !loading && <Loader>no match found</Loader>}
        </ul>
      </div>
      {fetchError !== "" && (
        <Loader>{fetchError}</Loader>
      )}
      {modalItems.isVisible && <Modal />}
    </StyledOurProducts>
  );
}

export default OurProducts