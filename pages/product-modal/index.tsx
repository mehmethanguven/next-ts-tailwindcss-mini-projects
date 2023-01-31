import Card from '@/components/Card'
import Image from 'next/image'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

const ProductModal = () => {
  return (
    <>
      <Card
        title="product modal"
        isBack={true}
        classNameTitle="text-2xl dark:text-white"
      ></Card>
      <Card className="flex items-center justify-center bg-slate-100 dark:bg-slate-900">
        <div className="m-3 flex flex-col space-y-10 rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800 md:m-0 md:flex-row md:space-y-0 md:space-x-10 md:p-8 ">
          <div>
            <Image
              alt=""
              height={0}
              width={0}
              sizes="100vh"
              src="/images/headphone.png"
              className="mx-auto w-60 rounded-lg duration-200 hover:scale-105"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col space-y-6">
            {/* Label & Title Container */}
            <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
              <div>
                <div className="inline-block rounded-full bg-black px-3 py-1 text-sm text-white">
                  free shipping
                </div>
              </div>
              {/* Title */}
              <div className="max-w-sm text-2xl font-medium capitalize">
                razer kraken kitty edt gaming headset quartz
              </div>
              {/* Price Container */}
              <div className="mb-4 flex flex-col space-y-3 text-center dark:text-white md:text-left">
                <p className="line-through ">$799</p>
                <p className="text-5xl font-bold">$599</p>
                <p className="text-sm font-light text-gray-400 dark:text-white">
                  This offer is valid unitl April 3rd or ads long as stock
                  lasts!
                </p>
              </div>
              {/* Button Group */}
              <div className="group">
                <button className="w-full rounded-lg border-b-8 border-b-blue-700 bg-blue-700 text-white transition-all duration-150 group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:bg-blue-700 group-hover:shadow-lg ">
                  <div className="rounded-lg bg-blue-500 px-8 py-4 duration-150 group-hover:bg-blue-700">
                    Add to cart
                  </div>
                </button>
              </div>
              {/* Stock */}

              <div className="group flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
                <div className="text-sm">50+ psc. in stock</div>
              </div>
              {/* Bottom Buttons Container */}
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 py-3 px-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
                  <ShoppingCartIcon className="w-8" />
                  <span>Add to cart</span>
                </button>

                <button
                  className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg
                "
                >
                  <HeartIcon className="w-8"></HeartIcon>

                  <span>Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default ProductModal
