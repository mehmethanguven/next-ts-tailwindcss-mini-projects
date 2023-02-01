import React from 'react'

const ImageMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 rounded-lg p-2 px-4 shadow-lg dark:shadow-white md:mb-24 md:flex-row md:justify-end md:space-y-0 md:space-x-8">
      {/* <!-- Menu Items --> */}
      <div className="group">
        <a href="#">Vector</a>
        <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100 dark:border-white"></div>
      </div>
      <div className="group">
        <a href="#">Illustrations</a>
        <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100 dark:border-white"></div>
      </div>
      <div className="group">
        <a href="#">Images</a>
        <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100 dark:border-white"></div>
      </div>
      <div className="group">
        <a href="#">Icons</a>
        <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100 dark:border-white"></div>
      </div>
    </div>
  )
}

export default ImageMenu
