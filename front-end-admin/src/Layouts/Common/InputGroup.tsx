import { useState, useEffect } from 'react'
import { TextFieldProps } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'
import { CommonInput } from 'src/utils/styleComponents'

interface InputFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string
  label: string
  required?: boolean
  data?: string | number | null
  type?: React.HTMLInputTypeAttribute
}

const InputGroup = ({ name, label, required, data, type }: InputFieldProps) => {
  const [inputValue, setInputValue] = useState<string | number>('')

  const { control, formState, setValue } = useFormContext()

  useEffect(() => {
    if (data) {
      setInputValue(data)
      setValue(name, data)
    }
  }, [data])

  return (
    <div className='flex items-center'>
      <label htmlFor={name} className='font-medium min-w-[150px]'>
        {label} {required && <span className='text-red-600'>*</span>}
      </label>
      <div className='flex w-[55%] flex-col'>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <CommonInput
              name={name}
              id={name}
              value={inputValue}
              onChange={(e) => {
                if (type === 'number') {
                  if (/^\d+$/.test(e.target.value) || e.target.value === '') {
                    setInputValue(e.target.value)
                    return field.onChange(e)
                  }
                } else {
                  setInputValue(e.target.value)
                  return field.onChange(e)
                }
              }}
              onBlur={field.onBlur}
              error={formState.errors.hasOwnProperty(name)}
              helperText={
                <span className='pt-[2px] text-xs text-[#d32f2f]'>{`${
                  formState.errors.hasOwnProperty(name) ? formState.errors[name]?.message : ''
                }`}</span>
              }
            />
          )}
        />
      </div>
    </div>
  )
}

export default InputGroup
