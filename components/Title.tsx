import React from 'react'
import clsx from 'clsx'

type Props = {
  title: string
  className?: string
}

const Title = ({ title, className }: Props) => {
  return (
    <h1
      className={clsx(
        'm-4 rounded-lg bg-white p-4 text-xl font-bold capitalize shadow-lg',
        className
      )}
    >
      {title}
    </h1>
  )
}

export default Title
