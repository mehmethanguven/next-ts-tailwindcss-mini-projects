import Image from 'next/image'
import React from 'react'
import { IImage } from '@/types/IImage'

const ImageItem = ({ title, imageUrl, info }: IImage) => {
  return (
    <div className="group relative">
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src={imageUrl}
        alt=""
        className="w-96"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
        <div className="flex w-full justify-between">
          <div className="font-normal">
            <p className="text-sm capitalize">{title}</p>
            <p className="text-xs capitalize">{info}</p>
          </div>
          <div className="flex items-center">
            <Image
              width={0}
              height={0}
              sizes="100vh"
              src={imageUrl}
              alt="bookmark"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageItem
