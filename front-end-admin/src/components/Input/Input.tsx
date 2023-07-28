import { InputHTMLAttributes } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorsMesage?: string
  register?: UseFormRegister<any>
  classNameinput?: string
  classNameError?: string
  rules?: RegisterOptions
}

function Input(props: Props) {
  const {
    errorsMesage,
    className,
    name,
    register,
    rules,
    classNameError = 'text-left text-red-600 min-h-[1.25rem] text-xs',
    classNameinput = 'block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
    ...rest
  } = props

  const registerResult = register && name ? register(name, rules) : {}

  return (
    <>
      <div className={className}>
        <input className={classNameinput} {...registerResult} {...rest} />
        <div className={classNameError}>&nbsp;{errorsMesage}</div>
      </div>
    </>
  )
}

export default Input
