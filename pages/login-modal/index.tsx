import Card from '@/components/Card'
import Image from 'next/image'

const LoginModal = () => {
  return (
    <div>
      <Card title="login modal" isBack={true} />
      <div className="flex items-center justify-center">
        <div className="relative m-6 flex flex-col space-y-10 rounded-2xl bg-white shadow-2xl dark:bg-slate-900 dark:shadow-white md:m-0 md:flex-row md:space-y-0">
          {/* <!-- Left Side --> */}
          <div className="p-6 md:p-20">
            {/* <!-- Top Content --> */}
            <h2 className="mb-5 font-mono text-4xl font-bold">Log In</h2>
            <p className="mb-12 max-w-sm font-sans font-light text-gray-600">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-6 placeholder:font-sans placeholder:font-light dark:border-slate-700 dark:bg-slate-800"
              placeholder="Enter your email address"
            />

            {/* <!-- Middle Content --> */}
            <div className="mt-6 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
              <div className="font-thin text-cyan-700">Forgot password</div>

              <button className="flex w-full items-center justify-center space-x-4 rounded-md border bg-cyan-700 p-6 px-9 font-sans font-bold text-white shadow-lg shadow-cyan-100 transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg dark:border-slate-700 md:w-auto">
                <span>Next</span>
                <svg
                  className="w-7"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>

            {/* <!-- Border --> */}
            <div className="mt-12 border-b border-b-gray-300 dark:border-slate-700"></div>

            {/* <!-- Bottom Content --> */}
            <p className="py-6 text-center text-sm font-thin text-gray-400">
              or log in with
            </p>

            {/* <!-- Bottom Buttons Container --> */}
            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center space-x-3 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg dark:border-slate-700 md:w-1/2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vh"
                  src="/images/facebook.png"
                  alt=""
                  className="w-9"
                />
                <span className="font-thin">Facebook</span>
              </button>
              <button className="flex items-center justify-center space-x-3 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg dark:border-slate-700 md:w-1/2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vh"
                  src="/images/google.png"
                  alt=""
                  className="w-9"
                />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>

          {/* <!-- Right Side --> */}
          <Image
            width={0}
            height={0}
            sizes="100vh"
            src="/images/login-image.jpg"
            alt=""
            className="hidden w-108 md:block"
          />

          {/* <!-- Close Button --> */}
          <div className="group absolute -top-5 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition duration-150 hover:-translate-y-0.5 hover:cursor-pointer md:top-4 md:bg-white ">
            <svg
              className="h-6 w-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
