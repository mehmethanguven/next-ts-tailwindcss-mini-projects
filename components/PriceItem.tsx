import { IPrice } from '@/types/IPrice'
import clsx from 'clsx'
import React from 'react'

export const PriceItem = ({
  isDefault,
  title,
  monthlyPrice,
  quota,
  buttonTitle,
  options,
}: IPrice) => {
  return (
    <div
      className={clsx(
        'rounded-xl bg-slate-700 dark:text-white',
        isDefault ? 'bg-violet-600' : 'bg-slate-700'
      )}
    >
      {/* Upper container */}
      <div className="p-8 mx-3 mt-3 bg-white rounded-t-xl dark:bg-slate-800">
        <div className="text-center uppercase">{title}</div>
        <h2 className="mt-10 font-serif text-5xl text-center">{quota}</h2>
        <h3 className="mt-2 text-center">${monthlyPrice}/Month</h3>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block px-10 py-3 my-6 text-center capitalize duration-200 border rounded-lg border-violet-600 hover:border-violet-800 hover:bg-violet-800 "
          >
            {buttonTitle}
          </a>
        </div>
      </div>
      {/* border */}
      <div className="border-t border-slate-700"></div>
      {/* lower container */}
      <div className="p-8 mx-3 mb-3 bg-white rounded-b-xl dark:bg-slate-800">
        <div className="flex flex-col space-y-2 ">
          {(options || []).map((option, id) => (
            <div key={id} className="flex justify-center">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span className="ml-1 text-sm first-letter:uppercase">
                {option}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
