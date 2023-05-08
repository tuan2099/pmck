import React, { ButtonHTMLAttributes } from 'react'

interface buttonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

function Button(props: buttonType) {
  const { isLoading, disabled, children, className, ...rest } = props

  const newClassname = className

  return (
    <>
      <button className={newClassname} {...rest}>
        {children}
      </button>
    </>
  )
}

export default Button
