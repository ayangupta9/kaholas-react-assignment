import React from 'react'

const StarRatingComponent = ({ reviewCount }) => {
  // Custom component for showing dynamic number of review stars
  // Takes number of stars as input and creates icon for the same
  return (
    <div
      style={{
        width: '100px'
      }}
    >
      {[...Array(reviewCount)].map((e, i) => (
        <span key={i}>
          <i class='bi bi-star-fill text-warning fs-5'></i>
        </span>
      ))}
    </div>
  )
}

export default StarRatingComponent
