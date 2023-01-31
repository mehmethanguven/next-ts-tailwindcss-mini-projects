import { LightBulbIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <div className="my-2 flex items-center space-x-1 text-slate-700 dark:text-white">
        <LightBulbIcon className="mr-3 h-8 w-8 flex-shrink-0" />
        <span className="whitespace-nowrap font-sans text-2xl font-bold tracking-tight">
          Next.js Development
        </span>
      </div>
    </Link>
  )
}

export default Logo
