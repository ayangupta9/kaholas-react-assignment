import React from 'react'

const ImagesComponent = () => {
  return (
    <>
      {/* Display images shown in grid mode using flex display */}
      <div className='course-images-wrapper d-flex gap-2 col-md-6 ps-md-3 px-0 mt-4 mt-md-0'>
        <div className='image-wrapper w-50 d-flex justify-content-center align-items-center overflow-hidden'>
          <img
            style={{
              minHeight: '100%'
            }}
            src='https://qph.cf2.quoracdn.net/main-qimg-58c7ce0d1fcfbdfeddbad014613b08f6-lq'
            alt='vah gogh starry night'
          />
        </div>

        <div className='w-50 d-flex flex-column gap-2'>
          <div className='img-wrapper overflow-hidden d-flex'>
            <img
              className='flex-fill fit-image'
              src='https://imgc.allpostersimages.com/img/posters/yellow-red-blue-1925_u-L-F8ZZZM0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=ffffff'
              alt=''
            />
          </div>
          <div className='img-wrapper overflow-hidden d-flex'>
            <img
              className='flex-fill fit-image'
              src='https://upload.wikimedia.org/wikipedia/commons/9/99/Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg'
              alt="Monet\'s Water Lilies and Japanese Bridge"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagesComponent
