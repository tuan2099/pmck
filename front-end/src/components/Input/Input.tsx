import { Input } from "@material-tailwind/react";



function InputCustom(props) {
  const {
    errorsMesage,
    className,
    name,
    register,
    rules,
    label,
    classNameError = 'text-left text-red-600 min-h-[1.25rem] text-xs',
    classNameinput = 'bg-black',
    ...rest
  } = props

  const registerResult = register && name ? register(name, rules) : {}

  return (
    <>
      <div className={className}>
        <Input className='' {...registerResult} {...rest} />
        <div className={classNameError}>&nbsp;{errorsMesage}</div>
      </div>
    </>
  )
}

export default InputCustom
