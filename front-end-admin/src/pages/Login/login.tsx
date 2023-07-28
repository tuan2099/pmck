import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rule'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { AppContext } from 'src/context/app.context'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { toast } from 'react-toastify'

type FormData = Pick<Schema, 'identifier' | 'password'>
const loginSchema = schema.pick(['identifier', 'password'])

function LoginAdmin() {
  // state from context
  const { setIsAuthenticate, setProfile } = useContext(AppContext)

  // navigate
  const navigate = useNavigate()

  // react hook form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  // call api
  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  // form submit
  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        if (data.data.user.admin_page) {
          setIsAuthenticate(true)
          setProfile(data.data.user)
          navigate('/admin')
        } else {
          toast('Bạn không có quyền đăng nhập.')
        }
      },
      onError: (error: any) => {
        if (error.response.status > 200) {
          const formErrorMessage = error.response?.data.error.message
          setError('identifier', {
            message: formErrorMessage,
            type: 'Server'
          })
        }
      }
    })
  })

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='relative w-full py-3 sm:mx-auto sm:w-full sm:max-w-[34rem] '>
          <div className='absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-green-500 to-green-800 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl'></div>
          <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl lg:p-[2rem] '>
            <div className='mx-auto max-w-md'>
              <div className='mx-auto w-[250px]'>
                <img src={logo} alt='logo' className='mx-auto w-full' />
              </div>
              <div>
                <h1 className='text-center text-2xl font-semibold'>Đăng nhập vào PMCK</h1>
              </div>
              <form onSubmit={onSubmit} noValidate>
                <div>
                  <label
                    htmlFor='first_name'
                    className='my-6 mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Nhập email
                  </label>
                  <Input
                    type='text'
                    placeholder='Nhập Email'
                    name='identifier'
                    register={register}
                    errorsMesage={errors.identifier?.message}
                  />
                </div>
                <div>
                  <label
                    htmlFor='first_name'
                    className='my-2 mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Nhập mật khẩu
                  </label>
                  <Input
                    type='password'
                    placeholder='Password'
                    name='password'
                    register={register}
                    errorsMesage={errors.password?.message}
                  />
                </div>
                <Button
                  isLoading={loginAccountMutation.isLoading}
                  disabled={loginAccountMutation.isLoading}
                  className='my-6 inline-block w-full rounded bg-gradient-to-r from-green-600 to-green-700 px-6 py-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#0b1526] outline-none transition duration-150 ease-in-out hover:bg-[#103a0b] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#103a0b] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#217a17] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                >
                  Đăng nhập
                </Button>

                <div className='mx-auto mt-7 flex w-3/12 justify-between  text-slate-300'>
                  <Link to='/'>
                    <FaFacebook />
                  </Link>
                  <Link to='/'>
                    <FaYoutube />{' '}
                  </Link>
                  <Link to='/'>
                    <FaInstagram />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginAdmin
