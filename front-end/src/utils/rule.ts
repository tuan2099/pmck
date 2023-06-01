// quản lý form
import { type } from 'os'
// import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'identifier' | 'email' | 'password' | 'confirm_password' | 'username']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  identifier: {
    required: {
      value: true,
      message: 'Vui lòng nhập Email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email khoong hợp lệ'
    },
    maxLength: {
      value: 150,
      message: 'Tối đã 150 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Tối thiểu 5 kí tự'
    }
  },
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập Email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email khoong hợp lệ'
    },
    maxLength: {
      value: 150,
      message: 'Tối đã 150 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Tối thiểu 5 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập Password'
    },
    maxLength: {
      value: 150,
      message: 'Tối đã 150 kí tự'
    },
    minLength: {
      value: 5,
      message: 'tối thiểu 5 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Vui lòng nhập lại password'
    },
    maxLength: {
      value: 150,
      message: 'Tối đa 150 kí tự'
    },
    minLength: {
      value: 5,
      message: 'tối thiểu 5 kí tự'
    },
    //
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password lại không khớp'
        : undefined
  },
  username: {
    required: {
      value: true,
      message: 'Vui lòng nhập tên hoặc email 1'
    },
    maxLength: {
      value: 150,
      message: 'Tối đã 150 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Tối thiểu 5 kí tự'
    }
  }
})

// confim_pass_yup_setting
const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Nhập lại password không chính xác ')
    .min(6, 'Độ dài từ 6- 160 kí tự')
    .max(160, 'Độ dài từ 6 - 160 kí tự')
    .oneOf([yup.ref(refString)], 'Nhập lại password không khớp')
}

// Yup setting
export const schema = yup.object({
  identifier: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không hợp lệ')
    .min(5, 'Tối thiểu 5 kí tự')
    .max(160, 'Tối đa 160 kí tự'),
  password: yup.string().required('Password là bắt buộc').min(5, 'Tối thiểu 5 kí tự').max(160, 'Tối đa 160 kí tự'),
  confirm_password: handleConfirmPasswordYup('password'),
  username: yup
    .string()
    .required('Vui lòng nhập tên hoặc Email')
    .min(5, 'Tối thiểu 5 kí tự')
    .max(160, 'Tối đa 160 kí tự'),
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không hợp lệ')
    .min(5, 'Tối thiểu 5 kí tự')
    .max(160, 'Tối đa 160 kí tự')
})

export const profileSchema = yup.object({
  username: yup.string().required('Vui lòng điền thông tin'),
  employment_status: yup.string(),
  industry: yup.string(),
  employer: yup.string(),
  occupation: yup.string(),
  experience_level: yup.string(),
  is_current_employer: yup.boolean(),
  highest_degree: yup.string(),
  university: yup.string(),
  field_or_major: yup.string(),
  is_student: yup.boolean(),
  open_new_job: yup.boolean(),
  location: yup.string(),
  skills_wanted: yup.string(),
  interested_in_getting: yup.string(),
  learning_goal: yup.string(),
  preferred_occupation: yup.string(),
  career_industry: yup.string(),
  preferred_level: yup.string()
})

export type Schema = yup.InferType<typeof schema>
