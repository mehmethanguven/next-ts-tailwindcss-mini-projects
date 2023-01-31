import Card from '@/components/Card'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export interface IListItem {
  title: string
  href: string
  className?: string
}
const lists: IListItem[] = [
  {
    title: 'email subscribe',
    href: 'email-subscribe',
  },
  {
    title: 'pricing card',
    href: 'pricing-card',
  },
  {
    title: 'product modal',
    href: 'product-modal',
  },
  {
    title: 'login modal',
    href: 'login-modal',
  },
  {
    title: 'image gallery',
    href: 'image-gallery',
  },
]

const Page = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto h-full p-6 dark:bg-slate-900">
        <Card
          title="Tailwindcss Mini Projects"
          classNameTitle="text-slate-500 text-xl text-center mt-4 dark:text-white dark:bg-slate-900 ml-2"
        >
          <div className="mt-4 grid grid-cols-1 gap-5 dark:bg-slate-900 md:grid-cols-3">
            {(lists || []).map(
              (
                {
                  title,
                  href,
                  className = 'text-slate-700 hover:text-slate-400 dark:text-white',
                },
                id
              ) => (
                <Card key={id} className="dark:bg-slate-900">
                  <Link
                    className={
                      (clsx('text-slate-500 hover:text-slate-300'), className)
                    }
                    href={href}
                  >
                    <h2 className="p-2 font-semibold capitalize dark:hover:text-slate-400">
                      {title}
                    </h2>
                  </Link>
                </Card>
              )
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Page
