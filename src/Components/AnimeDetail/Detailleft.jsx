import React from 'react'

const Detailleft = ({ details }) => {
  console.log(details);
  return (
    <>
      <div className="main-detail-left py-2 px-4 w-full flex flex-col gap-4 border-2 md:w-1/3">
        <div className="anime-image flex justify-center">
          <img src={ details.images.jpg.image_url } alt="anime-image" />
        </div>
        <div className="anime-info flex flex-col gap-6">
          <div className="alternative-details">
            <ul className='capitalize flex flex-col gap-2'>
              <li className='border-b-2 pb-2 text-lg'>
                alternative titles
              </li>
              {
                details.titles.slice(1).map((ele, index) => {
                  return (
                    <>
                      <li key={ index } className='font-semibold text-lg text-blue-400'>{ ele.type }: <span className='text-white'>{ ele.title }</span> </li>
                    </>
                  )
                })
              }
            </ul>
          </div>
          <div className="information-details">
            <ul className='capitalize flex flex-col gap-2'>
              <li className='border-b-2 pb-2 text-lg'>
                information
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                type: <span className='text-blue-700'>{ details.type }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                episodes: <span className='text-white'>{ details.episodes }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                status: <span className='text-white'>{ details.status }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                aired: <span className='text-white'>{ details.aired.string }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                producers:
                {
                  details.producers.map((p, index) => (
                    <span key={index} className='text-blue-700 ml-1'>
                      {p.name}{index < details.producers.length - 1 ? ", " : ""}
                    </span>
                  ))
                }
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                licensors: 
                {
                  details.licensors.map((p, index) => (
                    <span key={index} className='text-blue-700 ml-1'>
                      {p.name}{index < details.licensors.length - 1 ? ", " : ""}
                    </span>
                  ))
                }
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                studios: 
                {
                  details.studios.map((p, index) => (
                    <span key={index} className='text-blue-700 ml-1'>
                      {p.name}{index < details.studios.length - 1 ? ", " : ""}
                    </span>
                  ))
                }
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                source: <span className='text-white'>{ details.source }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                genres: 
                {
                  details.genres.map((p, index) => (
                    <span key={index} className='text-blue-700 ml-1'>
                      {p.name}{index < details.genres.length - 1 ? ", " : ""}
                    </span>
                  ))
                }
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                themes: 
                {
                  details.themes.map((p, index) => (
                    <span key={index} className='text-blue-700 ml-1'>
                      {p.name}{index < details.themes.length - 1 ? ", " : ""}
                    </span>
                  ))
                }
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                duration: <span className='text-white'>{ details.duration }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                rating: <span className='text-white'>{ details.rating }</span>
              </li>
            </ul>
          </div>
          <div className="statistics-details">
            <ul className='capitalize flex flex-col gap-2'>
              <li className='border-b-2 pb-2 text-lg'>
                statistics
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                score: <span className='text-white lowercase'>{details.score} (scored by { details.scored_by } users)</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                ranked: <span className='text-white'>#{ details.rank }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                popularity: <span className='text-white'>#{ details.popularity }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                members: <span className='text-white'>{ (details.members).toLocaleString("en-IN") }</span>
              </li>
              <li className='font-semibold text-lg text-blue-400'>
                favorites: <span className='text-white'>{ (details.favorites).toLocaleString("en-IN") }</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detailleft
