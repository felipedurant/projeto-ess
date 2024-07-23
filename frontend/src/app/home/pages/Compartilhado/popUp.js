// pop up (modal) genérico

import React, { useState } from 'react'
import Modal from 'react-modal'
import './style.css'
import '../payment/visualize/style.css'

Modal.setAppElement('#root')

const PopUp = ({ children, title , className}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button className='select-button' onClick={openModal}>{title}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
        data-testid="modal"
      >
        {children}
      </Modal>
    </div>
  )
}

export default PopUp
