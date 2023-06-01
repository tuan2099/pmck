import { useFormContext } from 'react-hook-form'

interface Iprops {
  name: string
  lable: string
}

const YesNoGroup = (props: Iprops) => {
  const { name, lable } = props

  //   const { register, formState } = useFormContext()

  return (
    <div className='mb-7 flex items-center gap-5'>
      <div className='min-w-56 text-right font-semibold'>{lable}</div>
      <div className='flex gap-5'>
        <div className='flex items-center gap-3'>
          <input type='radio' id={`${name} yes`} name={name} value='1' />
          <label htmlFor={`${name} yes`}>Yes</label>
        </div>
        <div className='flex items-center gap-3'>
          <input type='radio' id={`${name} no`} name={name} value='0' />
          <label htmlFor={`${name} no`}>No</label>
        </div>
      </div>
      {/* {formState.errors[name] && <p>{formState.errors[name]?.message as string}</p>} */}
    </div>
  )
}

export default YesNoGroup
