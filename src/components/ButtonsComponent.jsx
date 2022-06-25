import React from 'react'

const ButtonsComponent = () => {
  return (
    <>
      {/* Utility buttons for scheduling, saving or sharing the course */}
      <div className='buttons d-flex mt-4'>
        <div className='schedule-class-wrapper flex-grow-1'>
          <button className='schedule-class-btn px-4 text-white rounded-pill'>
            <span>See Class Schedule</span>
            <i class='bi bi-caret-right ms-2'></i>
          </button>
        </div>

        <div className='flex-grow-1'>
          <div className='save-n-share-class-wrapper'>
            <button className='right-class-btn rounded-pill px-4 me-1'>
              <i class='bi bi-heart pe-2'></i>
              <span>Save</span>
            </button>

            <button className='right-class-btn rounded-pill px-4  ms-1'>
              <i class='bi bi-share pe-2'></i>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonsComponent
