import React from 'react'

const TeacherAvatar = ({ course_teacher }) => {
  return (
    <>
      {/* Course teacher's image and profile link */}
      <div className='course-teacher-wrapper mb-2'>
        <img
          height='30px'
          className='rounded-circle'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuYYrPFVx3bmiOS_d8QtcdpwTZTgRHicxWw&usqp=CAU'
          alt='course teacher'
        />

        <a
          className='course-teacher ms-2 fw-bold text-decoration-none'
          href='#'
        >
          {course_teacher}
        </a>
      </div>
    </>
  )
}

export default TeacherAvatar
