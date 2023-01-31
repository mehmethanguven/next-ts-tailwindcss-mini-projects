import Card from '@/components/Card'
import { IImage } from '@/types/IImage'
import React from 'react'
import ImageItem from './ImageItem'

const images: IImage[] = [
  {
    imageUrl: '/images/img-gal1.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal2.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal3.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal4.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal5.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal6.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal1.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
  {
    imageUrl: '/images/img-gal2.jpg',
    title: 'abstract painting',
    info: '245 likes - 35 shares',
  },
]

const ImageGallery = () => {
  return (
    //  <!-- Global Container -->
    <>
      <Card title="image gallery" isBack={true}></Card>
      <div className="container mx-auto flex items-center justify-center">
        {/* <!-- Card Container --> */}
        <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:shadow-white md:px-4 md:pt-10">
          {/* <!-- Search Container --> */}
          <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            {/* <!-- Input and SVG Container --> */}
            <div className="flex justify-between border-b">
              <input
                type="text"
                className="ml-6 mr-2 rounded-lg border-none text-center placeholder:p-2 placeholder:text-center placeholder:font-thin focus:outline-none dark:bg-slate-800 md:w-80 "
                placeholder="Search"
              />
              <button>
                <svg
                  className="w-8 text-gray-300 duration-200 hover:scale-110"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>

            {/* <!-- Upload Button --> */}
            <button className="rounded-md border border-black bg-white py-3 px-14 text-lg font-normal text-slate-900 shadow-2xl duration-200 hover:bg-slate-400 hover:text-white dark:border-slate-600 dark:bg-black dark:text-white dark:hover:bg-slate-400 dark:hover:text-slate-900">
              Upload
            </button>
          </div>

          {/* <!-- Gallery Container --> */}
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {(images || []).map((item, id) => (
              <ImageItem key={id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGallery
