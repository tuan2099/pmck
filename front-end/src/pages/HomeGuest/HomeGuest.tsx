import { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { AppContext } from 'src/context/app.context'
import { ROUTES } from 'src/useRouterElement'
import FeaturedCourse from './components/FeaturedCourse'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import { FaChalkboardTeacher, FaHandsHelping, FaSchool, FaUserGraduate } from 'react-icons/fa'
// import Button from 'src/components/Button'
import logo from 'src/assets/logo.png'
import { Menu, Button, MenuProps } from '@mui/material'
const COUNT_UP_LIST = [
  {
    icon: <FaHandsHelping />,
    max: 10000,
    value: 'Chứng chỉ'
  },
  {
    icon: <FaSchool />,
    max: 1000,
    value: 'Lớp học'
  },
  {
    icon: <FaUserGraduate />,
    max: 5000,
    value: 'Học viên'
  },
  {
    icon: <FaChalkboardTeacher />,
    max: 200,
    value: 'Giảng viên'
  }
]

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 1000,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow: 'none',
    '& .MuiMenu-list': {
      padding: '5px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}))

function HomeGuest() {
  const { isAuthenticated } = useContext(AppContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/user')
  }, [isAuthenticated])

  const { data: featuredCourse } = useQuery({
    queryKey: ['FeaturedCourse'],
    queryFn: () => courseApi.getCourse()
  })

  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  let timeoutId: NodeJS.Timeout | null = null

  const handleClose = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      setAnchorEl(null)
    }, 0)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleMenuEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }

  return (
    <div>
      <div className='m-auto flex w-full max-w-[1296px] items-center justify-between px-[12px]'>
        <div className='w-[100px]'>
          <img src={logo} alt='logo web' />
        </div>
        <div className='w-[40%]'>
          <ul className='flex  items-center justify-between'>
            <li className='font-semibold'>Về chúng tôi</li>
            <li>
              <Button
                className='p-[6px] font-semibold'
                sx={{ zIndex: (theme: { zIndex: { modal: number } }) => theme.zIndex.modal + 1 }}
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
              >
                <Link to='/'>Học tập</Link>
              </Button>
              <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  onMouseLeave: handleMenuClose,
                  onMouseEnter: handleMenuEnter
                }}
              >
                <div className='items-ccenter flex justify-between border p-7'>
                  <ul>
                    <li>
                      <h4 className='font-bold'>Danh mục</h4>
                    </li>
                    <li>
                      <Link to='/' className='my-4 flex items-center rounded-[10px] p-3 transition hover:bg-[#f4fcf3]'>
                        <div>
                          <img src='' alt='icon' />
                        </div>
                        <div className='ml-3'>
                          <h5 className='font-semibold'>Đây là tiêu đề</h5>
                          <p className='text-sm'>Form là một phần khá là quan trọng </p>
                        </div>
                      </Link>
                      <Link to='/' className='my-4 flex items-center rounded-[10px] p-3 transition hover:bg-[#f4fcf3]'>
                        <div>
                          <img src='' alt='icon' />
                        </div>
                        <div className='ml-3'>
                          <h5 className='font-semibold'>Đây là tiêu đề</h5>
                          <p className='text-sm'>Form là một phần khá là quan trọng </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h4 className='font-bold'>Tính năng</h4>
                    </li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                  </ul>
                  <ul>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                  </ul>
                </div>
              </StyledMenu>
            </li>
            <li className='font-semibold'>Cộng đồng</li>
            <li className='font-semibold'>Tin tức</li>
          </ul>
        </div>
        <div className=''>
          <Button className='mr-[20px] rounded-[5px] bg-[#392C7D] px-[45px] py-[10px] text-white transition hover:bg-[#2a205c]'>
            <Link to='/login'>Đăng nhập</Link>
          </Button>
          <Button className='rounded-[5px] bg-[#1e7115] px-[45px] py-[10px] text-white transition hover:bg-[#173d13] '>
            <Link to='/register'>Đăng kí</Link>
          </Button>
        </div>
      </div>
      {/* <div
        className='h-[400px] bg-cover bg-no-repeat md:h-[550px] lg:h-[650px]'
        style={{ backgroundImage: `url(${homeGuestBanner})` }}
      >
        <div className='flex h-full bg-modalColor'>
          <div className='m-auto flex flex-col items-center'>
            <h2 className='text-5xl font-semibold uppercase text-yellowColor'>Take the first step</h2>
            <h1 className='text-[65px] font-bold uppercase text-white'>To knowledge with us</h1>
            <Link
              to={ROUTES.home}
              className='block rounded-full border border-white px-5 py-3 text-xl font-semibold text-white'
            >
              Ready to get Started
            </Link>
          </div>
        </div>
      </div>
      <FeaturedCourse data={featuredCourse?.data.data} />
      <CountUpContainer data={COUNT_UP_LIST} />
      <TypicalTeacher data={featuredCourse?.data.data} /> */}
    </div>
  )
}

export default HomeGuest
