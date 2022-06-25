import React, { useEffect, useState } from 'react'
import data from '../data/course_data.json'
import ButtonsComponent from './ButtonsComponent'
import HeaderComponent from './HeaderComponent'
import ImagesComponent from './ImagesComponent'
import LeftTextComponent from './LeftTextComponent'
import StarRatingComponent from './StarRatingComponent'
import TeacherAvatar from './TeacherAvatar'

const CoursePage = () => {
  // useState hook to store data from json into state variables
  const [courseData, setCourseData] = useState(null)

  // useEffect hook to get the data asynchronously only when the component renders for the first time
  useEffect(() => {
    async function fetchData () {
      /*
      fetches data in the form of json and puts it in the state variable
      */
      setCourseData(data)
    }
    fetchData()
  }, [])

  return (
    <div className='course-page text-start p-5'>
      {/* Checking if data has been fetched and is not NULL */}
      {courseData && (
        <>
          <HeaderComponent
            course_header={courseData.course_header}
            course_type={courseData.course_type}
          />

          <div className='row'>
            <LeftTextComponent courseData={courseData} />

            <ImagesComponent />
          </div>
        </>
      )}
    </div>
  )
}

export default CoursePage
