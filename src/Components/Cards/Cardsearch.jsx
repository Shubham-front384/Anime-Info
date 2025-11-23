import 'remixicon/fonts/remixicon.css'
import { useRef } from 'react'

import logo from "/anime.png"

const Cardsearch = ({ setTextValue }) => {

  const text = useRef();

  const handleText = () => {
    setTextValue(text.current.value);
  }

  return (
    <>
      <div className="main-cardSearch py-8 px-7 flex justify-between items-center">
        <div className="logo flex items-center gap-2">
          <img src={logo} alt="logo-img" />
          <h4 className="capitalize text-2xl text-blue-500 hidden md:block">anime studio</h4>
        </div>
        <div className="search relative">
          <input ref={ text } onChange={ handleText } type="text" name="searchAnime" className="text-white border-2 border-white rounded outline-blue-500 pl-2 pr-8 py-2" />
          <i className="ri-search-ai-line absolute right-4 top-2"></i>
        </div>
      </div>
    </>
  )
}

export default Cardsearch
