import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

type Props = {
  className?: string
  classNameSubtitle?: string
  classNameTitle?: string
  isBack?: boolean
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

const Card = ({
  className,
  classNameSubtitle,
  classNameTitle = 'text-slate-500 dark:text-white',
  children,
  title,
  subtitle,
  isBack,
}: Props) => {
  return (
    <div
      className={clsx(
        'container flex flex-col rounded-lg bg-white p-4 shadow-lg dark:bg-slate-900 dark:shadow-gray-200 md:mx-auto md:my-4',
        className
      )}
    >
      {title && (
        <div className="mb-4 flex items-center justify-between gap-2 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-2">
            {isBack && (
              <Link href="/">
                <ArrowLeftIcon
                  className="h-6 w-6 text-slate-500 dark:text-white"
                  aria-hidden="true"
                />
              </Link>
            )}

            <h1
              className={clsx('text-xl font-bold capitalize', classNameTitle)}
            >
              {title}
            </h1>
          </div>
        </div>
      )}
      {subtitle && <h1 className={clsx(classNameSubtitle)}>{subtitle}</h1>}
      <div className={clsx('bg-white dark:bg-slate-900', className)}>
        {children}
      </div>
    </div>
  )
}

export default Card
