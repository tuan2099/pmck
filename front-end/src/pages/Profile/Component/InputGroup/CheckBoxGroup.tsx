import { useFormContext } from 'react-hook-form'

interface Iprops {
  name: string
  lable: string
}

const CheckBoxGroup = (props: Iprops) => {
  const { name, lable } = props

  //   const { register, formState } = useFormContext()

  return (
    <div className='mb-7 flex items-center gap-5'>
      <label htmlFor={name} className='w-56 text-right font-semibold'>
        {lable}
      </label>
      <input type='checkbox' id={name} className='scale-150' />
      {/* {formState.errors[name] && <p>{formState.errors[name]?.message as string}</p>} */}
    </div>
  )
}

export default CheckBoxGroup
