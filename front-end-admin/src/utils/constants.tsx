import { Avatar } from '@mui/material'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

export const courseTableColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 130,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'banner_course',
    headerName: 'Ảnh bìa',
    width: 90,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params: any) => {
      if (params?.row.banner_course.data)
        return <Avatar alt='Avatar' src={`http://localhost:1337${params?.row.banner_course.data[0].attributes.url}`} />
      else return <Avatar alt='Avatar' />
    }
  },
  {
    field: 'course_name',
    headerName: 'Tên khóa học',
    width: 90,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'author',
    headerName: 'Tác giả',
    width: 90,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'chapters',
    headerName: 'Chapters',
    width: 130,
    sortable: false,
    disableColumnMenu: true,

    valueGetter: (params: GridValueGetterParams) => params.row.chapters.data.length
  },
  {
    field: 'course_description',
    headerName: 'Mô tả',
    width: 200,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'language',
    headerName: 'Ngôn ngữ',
    width: 90,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'price',
    headerName: 'Gía',
    width: 90,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'rating',
    headerName: 'Đánh giá',
    width: 90,
    sortable: false,
    disableColumnMenu: true
  }
]

export const ROUTES = {
  course: '/course',
  createCourse: '/course/create-or-update',
  updateCourse: '/course/create-or-update/:id'
}
