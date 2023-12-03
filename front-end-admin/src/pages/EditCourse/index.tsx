import { Avatar, Box, Button, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { useMatch, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import InputGroup from 'src/Layouts/Common/InputGroup'
import courseApi from 'src/apis/course.api'
import { ROUTES } from 'src/utils/constants'

const EditCourse = () => {
  const { id } = useParams()
  const isCreateMode = Boolean(useMatch(ROUTES.createCourse))

  const { data: courseData } = useQuery({
    queryKey: ['course', id],
    queryFn: () => courseApi.getDetailCourse(id as string),
    enabled: Boolean(id)
  })

  const methods = useForm({
    mode: 'onTouched'
  })
  const handleCreateOrUpdateCourse = (data: any) => {
    if (id && !isCreateMode) {
      handleUpdateCourse.mutate(data)
    } else {
      handleCreateCourse.mutate(data)
    }
  }

  const handleCreateCourse = useMutation({
    mutationFn: (data) => courseApi.createCourse(data),
    onSuccess: () => {
      toast.success('Tạo khóa học thành công.')
      methods.reset()
    },
    onError: () => toast.error('Đã có lỗi xảy ra.')
  })

  const handleUpdateCourse = useMutation({
    mutationFn: (data) => courseApi.updateCourse(id, data),
    onSuccess: () => {
      toast.success('Cập nhập thành công.')
    },
    onError: () => toast.error('Đã có lỗi xảy ra.')
  })

  console.log(courseData?.data.data)
  return (
    <>
      {!isCreateMode && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', marginTop: '50px' }}>
          <Avatar
            alt=''
            src={`http://localhost:1337${courseData?.data.data.attributes.banner_course.data[0].attributes.url}`}
            sx={{ width: '120px', height: '120px' }}
          />
          <Typography fontSize={24} fontWeight={600}>
            {courseData?.data.data.attributes.course_name}
          </Typography>
        </Box>
      )}

      {isCreateMode && (
        <Typography fontSize={24} fontWeight={600}>
          Thêm khóa học mới
        </Typography>
      )}

      <Box>
        <FormProvider {...methods}>
          <form
            encType='multipart/form-data'
            id='courseForm'
            onSubmit={methods.handleSubmit((data) => handleCreateOrUpdateCourse(data))}
          >
            <InputGroup label='Tên khóa học' name='course_name' data={courseData?.data.data.attributes.course_name} />
            <InputGroup
              label='Mô tả khóa học'
              name='course_description'
              data={courseData?.data.data.attributes.course_description}
            />
            <InputGroup label='Ngôn ngữ' name='language' data={courseData?.data.data.attributes.language} />
            <InputGroup label='Giá' name='price' data={courseData?.data.data.attributes.price} type='number' />

            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </form>
        </FormProvider>
      </Box>
    </>
  )
}

export default EditCourse
