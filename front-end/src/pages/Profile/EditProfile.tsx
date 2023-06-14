import { useState, useEffect, useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SelectGroup from './Component/InputGroup/SelectGroup'
import InputGroup from './Component/InputGroup/InputGroup'
import profileApi from 'src/apis/user.api'
import { ROUTES } from 'src/useRouterElement'
import { profileSchema } from 'src/utils/rule'
import { AppContext } from 'src/context/app.context'

function EditProfile() {
  const [previewImg, setPreviewImg] = useState<string>('')
  const [profile_photo, setProfile_photo] = useState<File | null>(null)

  const { profile } = useContext(AppContext)

  useEffect(() => {
    return () => {
      profile_photo && URL.revokeObjectURL(previewImg)
    }
  }, [profile_photo])

  const forms = useForm({ resolver: yupResolver(profileSchema), mode: 'onTouched' })

  const handlePreviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const url = URL.createObjectURL(file)
      setProfile_photo(file)
      setPreviewImg(url)
    }
  }

  const handleUpdateProfile = useMutation({
    mutationFn: (formData: any) => {
      const data = { id: profile?.id as number, data: formData }
      if (profile_photo) {
        data.data.profile_photo = profile_photo
      }
      return profileApi.updateProfile(data)
    },
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  })

  return (
    <div className='h-full bg-[#F5F5F5] px-4 py-5 md:px-6 lg:px-10'>
      <div className='bg-white p-5'>
        <div className='mb-9 flex flex-col justify-start gap-5 border-b border-gray-200 pb-9 md:flex-row md:items-center md:justify-between'>
          <h1 className='text-xl md:text-3xl'>Chỉnh sửa thông tin cá nhân</h1>
          <div>
            <Link
              className='rounded-sm bg-[#1e7115] px-4 py-2 text-sm font-semibold text-white md:px-8 md:py-3 '
              to={ROUTES.profile}
            >
              Xem hồ sơ
            </Link>
          </div>
        </div>

        <h2 className='mb-2 text-xl'>Giới thiệu</h2>
        <p className='mb-4 mt-2 text-xs md:text-base'>
          Hãy để cộng đồng PMCK gồm những người học và người hướng dẫn khác nhận ra bạn.
        </p>
        <FormProvider {...forms}>
          <form encType='multipart/form-data' onSubmit={forms.handleSubmit((data) => handleUpdateProfile.mutate(data))}>
            <InputGroup name='full_name' lable='Full Name' defaultValue={profile?.full_name} />
            <div className='flex flex-col gap-5 md:flex-row'>
              <label htmlFor='profile_photo' className='flex flex-col gap-5 md:flex-row'>
                <div className='w-full font-semibold hover:cursor-pointer md:w-40 md:text-right lg:w-56'>Ảnh hồ sơ</div>
                {!previewImg && (
                  <div className='flex h-32 w-32 bg-[#B0E5FB] hover:cursor-pointer'>
                    <div className='m-auto text-5xl text-white'>
                      <FaUser />
                    </div>
                  </div>
                )}
                {previewImg && <img className='h-32 w-32 object-cover' src={previewImg} alt='img' />}
              </label>
              <input id='profile_photo' type='file' hidden onChange={handlePreviewImg} />
              <div className='flex flex-col gap-3'>
                <div>
                  <button className='rounded-sm bg-[#1e7115] px-4 py-2 text-sm font-medium text-white'>
                    Tải ảnh lên
                  </button>
                </div>
                <span className='text-sm'>Kích thước tối đa 1MB. JPG, GIF, or PNG.</span>
              </div>
            </div>

            <div className='my-9 border-t'></div>
            <h2 className='mb-2 text-xl'>Thông tin người dùng</h2>
            <p className='mb-4 mt-2'>
              Hãy cho chúng tôi biết về kinh nghiệm và trình độ học vấn của bạn để có được trải nghiệm học tập được cá
              nhân hóa với các đề xuất khóa học.
            </p>
            <InputGroup lable='Thông tin cá nhân' name='about_me' defaultValue={profile?.about_me} />
            <InputGroup lable='Địa chỉ' name='location' defaultValue={profile?.location} />
            <SelectGroup name='top_skill' lable='Top skill' defaultValue={profile?.top_skill || 'Choose here'}>
              <option value='ăn hại'>Select your skill</option>
              <option value='buôn thuốc'>Intern / Trainee</option>
              <option value='chơi đồ'>Junior / Entry-level (0-2 years experience)</option>
            </SelectGroup>
            <InputGroup lable='Kết nối' name='connect' defaultValue={profile?.connect} />
            <InputGroup lable='Số điện thoại' name='phone_number' defaultValue={profile?.phone_number} />
            <button
              className='rounded-sm bg-[#1e7115] px-7 py-1 text-sm font-semibold text-white md:px-8 md:py-3 '
              type='submit'
            >
              Lưu
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default EditProfile
