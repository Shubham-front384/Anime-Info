import React from 'react'

const Detailright = ({ details }) => {
  console.log(details);
  return (
    <>
      <div className="main-detail-right w-full py-2 px-4 text-lg border-2 flex flex-col gap-4 md:w-3/5">
        <div className="synopsis-info bg-gray-300 p-4 grid grid-cols-2 grid-rows-2 justify-items-center items-center gap-4 border-2 md:grid-cols-4 md:grid-rows-1 md:items-start">
          <div className="synopsis-score">
            <h5 className="score-heading flex flex-col text-center border-r-2 px-6 md:px-4">
              <span className='bg-blue-600 uppercase rounded'>score</span>
              <span className='text-4xl font-bold pt-4'>{ details.score }</span>
              <span className=''>{ details.scored_by } users</span>
            </h5>
          </div>
          <div className="synopsis-ranked flex flex-col gap-8 py-4">
            <h5 className="ranked-heading capitalize text-xl">
              ranked <span className='font-bold'>#{ details.rank }</span>
            </h5>
            <h6 className='flex'>
              <span className='pr-3 border-r-2'>{ details.type }</span>
              <span className='pl-3'>
                {
                  details.studios.map((ele, index) => {
                    return (
                      <span key={ index }>
                        { ele.name }
                      </span>
                    )
                  })
                }
              </span>
            </h6>
          </div>
          <div className="synopsis-popularity py-4">
            <h5 className="ranked-heading capitalize">
              popularity <span className='font-bold'>#{ details.popularity }</span>
            </h5>
          </div>
          <div className="synopsis-members py-4">
            <h5 className="ranked-heading capitalize">
              members <span className='font-bold'>#{ details.members }</span>
            </h5>
          </div>
        </div>
        <div className="synopsis-info py-4">
          <h5 className='capitalize pb-2 border-b-2'>
            synopsis
          </h5>
          <p className="anime-synopsis pt-2 text-base">
            { details.synopsis }
          </p>
        </div>
      </div>
    </>
  )
}

export default Detailright
