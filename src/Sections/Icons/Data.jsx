import React from 'react'

const Data = ({ color = '#000000', size = 24, className = '' }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="144 144 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="m578.14 593.2v-76.207h-104.21v76.207h-25.137v-152.41h-104.21v152.41h-23.387v-246.34h-104.21v246.34h-24.715v-393.34h-13.84v407.18h436.2v-13.84zm-347.31 0v-232.49h76.527v232.5zm127.6 0v-138.57h76.527v138.57zm129.34 0v-62.367h76.527v62.367zm-189.54-260.97-7.9531-55.684 55.684-7.9531 1.9609 13.684-31.289 4.4531 250.63 172.67-7.8477 11.402-252.22-173.73 4.7734 33.199z"></path>
    </svg>
  )
}

export default Data