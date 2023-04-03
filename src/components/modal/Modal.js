import React, { useEffect } from 'react'
import StyledModal from './Modal.styled'
import { closeModal, prevSlide, nextSlide } from '../../reducers/ModalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LeftIcon, RightIcon } from '../../assets/icons'

const Modal = () => {
  const dispatch = useDispatch();
  const {modalItems, currentIndex } = useSelector((state) => state.modal);


  const handleModalClose = (e) => {
    if (
      e.target.classList.contains("close-modal") ||
      e.target.classList.contains("modal")
    ) {
      dispatch(closeModal());
      document.documentElement.classList.remove('overflow-hidden');
    }
  }

  const handleModalByEscape = (e) => {
    if(e.key === 'Escape') {
      dispatch(closeModal());
      document.documentElement.classList.remove('overflow-hidden');
    }
  }

  useEffect(() => {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('active');
    document.addEventListener('keyup', handleModalByEscape);
    return () => {
      document.removeEventListener('keyup', handleModalByEscape);
      modalContent.classList.remove('active');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledModal onClick={handleModalClose} className='modal'>
      <div className="modal-content">
        <span className='close-modal'>X</span>
        <figure>
          <img src={modalItems[currentIndex].images[0]} alt={modalItems[currentIndex].title} />
          <figcaption>{modalItems[currentIndex].title}</figcaption>
        </figure>
        <div className='modal-slider-control'>
          <span className='prev-control' onClick={() => dispatch(prevSlide())}><LeftIcon /></span>
          <span className='next-control' onClick={() => dispatch(nextSlide())}><RightIcon /></span>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal