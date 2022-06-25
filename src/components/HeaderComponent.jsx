import React from 'react'

const HeaderComponent = ({ course_header, course_type }) => {
  return (
    <>
      <h2 className='fw-bold '>{course_header}</h2>
      <p className='text-secondary fw-normal'>
        {course_type}
        <i role='button' class='bi bi-question-circle pointer ps-1'></i>
      </p>
    </>
  )
}

export default HeaderComponent
