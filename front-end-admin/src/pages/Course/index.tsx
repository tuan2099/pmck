import { Box, ButtonBase, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { FaGlasses, FaPlus, FaTrash } from 'react-icons/fa'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import SearchInput from './Components/SearchInput'
import { GridRowSelectionModel } from '@mui/x-data-grid'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import DataTable from 'src/components/DataTable'
import DeleteDialog from './Components/DeleteDialog'
import courseApi from 'src/apis/course.api'
import { ROUTES, courseTableColumns } from 'src/utils/constants'

const DeleteButton = styled(ButtonBase)({
  fontSize: '14px',
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  borderRadius: '6px',
  backgroundColor: 'rgb(255, 239, 239)',
  color: 'rgb(229, 72, 77)'
})

const CourseDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page')
  const search = searchParams.get('search')
  const navigate = useNavigate()

  const [listRecord, setListRecord] = useState<GridRowSelectionModel>([])
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)

  const handleDelete = useMutation({
    mutationFn: (record_ids: GridRowSelectionModel) => courseApi.deleteCourse(record_ids as number[]),
    onSuccess: () => {
      toast.success('Success')
      setIsOpenDeleteDialog(false)
      setListRecord([])
      refetch()
    },
    onError: (error: AxiosError) => {
      if (error.response && error.response.data) {
        const responseData = error.response.data as MyApiResponse
        toast.error(responseData.message)
      }
    }
  })

  const {
    data: courseData,
    isLoading,
    refetch,
    isPreviousData
  } = useQuery({
    queryKey: ['employee', page, search],
    queryFn: () => courseApi.getListcourse({ page, courseName: search }),
    onSuccess: (data) => {
      if (page && +page > data.data.meta.pagination.total) {
        setSearchParams({ ...Object.fromEntries([...searchParams]), page: data.data.meta.pagination.total.toString() })
      }
    },
    keepPreviousData: true,
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message)
    }
  })

  return (
    <Box>
      <div className='w-full overflow-hidden'>
        <div className='max-w-[200px] rounded-lg border border-gray-200 bg-white'>
          <div className='flex items-center gap-3 pl-3'>
            <FaGlasses />
            <SearchInput />
          </div>
        </div>
        <div>
          <div className='flex flex-col overflow-x-auto bg-secondBgColor p-[10px]'>
            <div className='mb-3 flex items-center justify-end gap-1 border-b border-inputColor py-3'>
              <ButtonBase>
                <Link
                  className='text-[rgb(0, 145, 255)] flex items-center gap-5 rounded-md bg-[#E7F3FD] px-3 py-2 text-sm text-blueColor'
                  to={ROUTES.createCourse}
                >
                  <FaPlus />
                  Add
                </Link>
              </ButtonBase>
              <DeleteButton
                onClick={() => setIsOpenDeleteDialog(true)}
                disabled={!Boolean(listRecord.length) || handleDelete.isLoading}
                sx={{
                  backgroundColor: !Boolean(listRecord.length) ? '#C1C8CD' : 'rgb(255, 239, 239)',
                  color: !Boolean(listRecord.length) ? '#F1F3F5' : 'rgb(229, 72, 77)'
                }}
              >
                <FaTrash />
                Delete
              </DeleteButton>
              <DeleteDialog
                data={listRecord}
                onDelete={handleDelete.mutate}
                isOpen={isOpenDeleteDialog}
                setIsOpen={setIsOpenDeleteDialog}
                isLoading={handleDelete.isLoading}
              />
            </div>

            <DataTable
              columns={courseTableColumns}
              rows={
                courseData
                  ? courseData?.data.data.map((item: any) => {
                      return { id: item.id, ...item.attributes }
                    })
                  : []
              }
              pageSize={courseData?.data.data.last_page}
              from={courseData?.data.data.from}
              to={courseData?.data.data.to}
              total={courseData?.data.data.total}
              loading={isPreviousData || isLoading}
              onRowSelectionModelChange={(selectionModel: GridRowSelectionModel) => {
                setListRecord(selectionModel)
              }}
              rowSelectionModel={listRecord}
              onCellDoubleClick={(e) => navigate(`${ROUTES.createCourse}/${e.id}`)}
            />
          </div>
        </div>
      </div>
    </Box>
  )
}

export default CourseDashboard
