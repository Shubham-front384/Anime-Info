import React from 'react'

const Detailright = ({ details }) => {
  return (
    <>
      <div className="main-detail-right w-full py-2 px-4 text-lg border-2 md:w-3/5">
        <h5 className='capitalize pb-2 border-b-2'>
          synopsis
        </h5>
        <p className="anime-synopsis pt-2 text-base">
          { details.synopsis }
        </p>
      </div>
    </>
  )
}

export default Detailright
