import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import profileApi from 'src/apis/user.api'
import { ROUTES } from 'src/useRouterElement'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputGroup from './Component/InputGroup/InputGroup'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import SelectGroup from './Component/InputGroup/SelectGroup'
import CheckBoxGroup from './Component/InputGroup/CheckBoxGroup'
import YesNoGroup from './Component/InputGroup/YesNoGroup'

function EditProfile() {
  const [previewImg, setPreviewImg] = useState(null)
  const [profile_photo, setProfile_photo] = useState(null)

  useEffect(() => {
    return () => {
      profile_photo && URL.revokeObjectURL(profile_photo)
    }
  }, [profile_photo])

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileApi.getProfile()
  })

  const handlePreviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <div className='h-full bg-[#F5F5F5] px-10 py-5'>
      <div className='bg-white p-5'>
        <div className='mb-9 flex items-center justify-between border-b border-gray-200 pb-9'>
          <h1 className='text-3xl'>Edit my profile</h1>
          <Link className='rounded-sm bg-[#0156b8] px-8 py-3 text-lg font-semibold text-white' to={ROUTES.profile}>
            View Profile
          </Link>
        </div>

        <h2 className='mb-2 text-xl'>Introduction</h2>
        <p className='mb-4 mt-2'>Let the Coursera community of other learners and instructors recognize you.</p>
        <form encType='multipart/form-data'>
          <InputGroup name='username' lable='Full Name' />
          <div className='flex gap-5'>
            <label htmlFor='profile_photo' className='flex gap-5'>
              <div className='w-56 text-right font-semibold hover:cursor-pointer'>Profile Photo</div>
              <div className='flex h-32 w-32 bg-[#B0E5FB] hover:cursor-pointer'>
                <div className='m-auto text-5xl text-white'>
                  <FaUser />
                </div>
              </div>
            </label>
            <input id='profile_photo' type='file' hidden onChange={handlePreviewImg} />
            <div className='flex flex-col gap-3'>
              <div>
                <button className='rounded-sm bg-blueColor px-4 py-2 text-xs font-medium text-white'>
                  Upload photo
                </button>
              </div>
              <span className='text-sm'>Maximum size of 1MB. JPG, GIF, or PNG.</span>
            </div>
          </div>

          <div className='my-9 border-t'></div>
          <h2 className='mb-2 text-xl'>Work Experience and Education</h2>
          <p className='mb-4 mt-2'>
            Tell us about your experience and education to get a personalized learning experience with course
            recommendations.
          </p>

          <SelectGroup name='employment_status' lable='Employment Status' defaultValue='-1'>
            <option value='-1'>Select your current status</option>
            <option value='1'>Employed full time (35 or more hours per week)</option>
            <option value='2'>Employed part time (less than 35 hours per week)</option>
          </SelectGroup>
          <InputGroup lable='Industry' name='industry' />
          <InputGroup lable='Employer' name='employer' />
          <InputGroup lable='Occupation' name='occupation' />
          <SelectGroup name='experience_level' lable='Experience Level' defaultValue='-1'>
            <option value='-1'>Select your relevant experience level</option>
            <option value='1'>Intern / Trainee</option>
            <option value='2'>Junior / Entry-level (0-2 years experience)</option>
          </SelectGroup>
          <CheckBoxGroup lable='Is it your current employer?' name='is_current_employer' />
          <div className='mb-16'></div>
          <SelectGroup name='highest_degree' lable='Highest Degree' defaultValue='-1'>
            <option value='-1'>Select your highest level of education</option>
            <option value='1'>Less than high school diploma (or equivalent)</option>
            <option value='2'>High school diploma (or equivalent)</option>
          </SelectGroup>
          <InputGroup lable='University' name='university' />
          <SelectGroup lable='Field or Major' name='field_or_major' defaultValue='-1'>
            <option value='-1'>Ex: Business</option>
            <option value='1'>Business</option>
            <option value='2'>Computer Science</option>
          </SelectGroup>
          <CheckBoxGroup lable='Is it your current employer?' name='is_student' />
          <div className='my-16 border-t'></div>
          <h2 className='mb-2 text-xl'>Career Goals</h2>
          <p className='mb-4 mt-2'>Tell us what you're looking for next in your career to find new opportunities</p>
          <YesNoGroup lable='Open to new job opportunities?' name='Open to new job opportunities' />
          <SelectGroup lable='Learning Goal' name='Learning Goal' defaultValue='-1'>
            <option value='-1'>Select your learning goal</option>
            <option value='1'>Land my first job</option>
            <option value='2'>Switch to a different role</option>
          </SelectGroup>
          <InputGroup lable='Preferred Occupation' name='Preferred Occupation' />
          <InputGroup lable='Industry' name='Industry' />
          <SelectGroup lable='Preferred Level' name='Preferred Level' defaultValue='-1'>
            <option value='-1'>Select experience level</option>
            <option value='1'>Intern / Trainee</option>
            <option value='2'>Junior / Entry-level (0-2 years experience)</option>
          </SelectGroup>
          <div className='my-16 border-t'></div>
          <h2 className='mb-2 text-xl'>Details About You</h2>
          <p className='mb-4 mt-2'>
            Introduce yourself to the Coursera community. Connect with learners like you to grow your network.
          </p>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
