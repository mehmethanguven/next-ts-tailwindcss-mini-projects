import Card from '@/components/Card'
import Image from 'next/image'

const EmailSubscribe = () => {
  return (
    <div>
      <Card
        title="email subscribe"
        isBack={true}
        classNameTitle="text-xl text-slate-700 dark:text-white"
      ></Card>

      <Card className="my-24 mt-2 flex items-center justify-center bg-white">
        <div className="mx-6 rounded-2xl bg-zinc-50 p-2 shadow-lg dark:bg-zinc-800 md:my-20">
          <div className="flex flex-col rounded-l-xl md:flex-row">
            <Image
              width={0}
              height={0}
              alt=""
              src="/images/email-subscribe.jpg"
              sizes="100vh"
              className="object-fit h-80 w-auto transform rounded-xl duration-200 hover:scale-105 hover:rounded-xl hover:rounded-b-none md:h-64 md:rounded-l-xl md:rounded-r-none md:hover:rounded-b-xl "
            />
            <div className="p-6 md:p-12">
              <h2 className="text-center font-serif text-xl font-medium dark:text-white md:text-left">
                Get diet and fitness tips in your inbox
              </h2>
              <p className="my-4 max-w-xs text-center text-xs leading-5 tracking-wide dark:text-white md:text-left">
                Eat better and exercise better. Sign up for the Diet&Fitness
                newsletter.
              </p>
              <div className="mt-5 flex flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="rounded-lg border border-slate-200 p-2 px-4 text-center placeholder:text-center placeholder:text-sm placeholder:text-zinc-800 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder:text-white placeholder:md:text-left "
                />
                <button className="rounded-md bg-lime-500 px-5 py-3 text-sm text-zinc-800 duration-500 hover:bg-lime-700 hover:font-bold hover:text-white dark:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EmailSubscribe
