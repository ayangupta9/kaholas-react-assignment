import React from 'react'
import ButtonsComponent from './ButtonsComponent'
import StarRatingComponent from './StarRatingComponent'
import TeacherAvatar from './TeacherAvatar'

const LeftTextComponent = ({ courseData }) => {
  return (
    <>
      <div className='col-md-6 pe-md-3'>
        {/* Course description*/}
        <p className='p-1 lh-2'>{courseData.course_description}</p>

        <TeacherAvatar course_teacher={courseData.course_teacher} />

        {/* Reviews fetched from data on the teacher and the course */}
        <div className='review-wrapper mb-4'>
          <div className='d-flex align-items-end'>
            {/* Custom component for showing dynamic number of review stars */}

            {/* Teacher review */}
            <StarRatingComponent reviewCount={courseData.teacher_reviews} />
            <p className='m-0 ps-3'>
              {courseData.teacher_reviews_count} reviews for this teacher
            </p>
          </div>

          {/* Class review */}
          <div className='d-flex align-items-end'>
            <StarRatingComponent reviewCount={courseData.class_reviews} />
            <p className='m-0 ps-3'>
              {courseData.class_reviews_count} reviews for this class
            </p>
          </div>
        </div>

        {/* Number of students that have learned through this course */}
        <h6 className='learners-count-wrapper fw-bold mb-2'>
          Completed by {courseData.course_learners_count} learners
        </h6>

        <ButtonsComponent />
      </div>
    </>
  )
}

export default LeftTextComponent
