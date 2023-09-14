import Custombutton from 'src/components/Custombutton'
import logo from '../../assets/logo.png'
function Notfound() {
  return (
    <div className='flex h-screen items-center justify-between bg-[url(http://localhost:1337/uploads/error_bg1_bc6c15a9a1.png)] bg-cover bg-no-repeat'>
      <div className='m-auto max-w-[570px] px-2'>
        <div className='m-auto w-full max-w-[100px]'>
          <img src={logo} alt='404' />
        </div>
        <div>
          <img src='http://localhost:1337/uploads/anh_Viber_2023_09_14_16_13_59_315_2cf85fdbb4.png' alt='' />
        </div>
        <div className='mt-12'>
          <h1 className='text-center text-4xl font-bold text-mainGreenColor'>Oh No! Error 404</h1>
          <p className='my-4 text-center font-semibold text-color1'>Trang bạn yêu cầu không thể tìm thấy</p>
          <div className='m-auto text-center'>
            <Custombutton
              urlButtonLink='/'
              urlButton
              bgcolor='#1e7115'
              textColor='#fff'
              borderColor='#1e7115'
              hoverBgColor='#11400b'
              hoverBorderColor='#11400b'
            >
              Quay lại trang chủ
            </Custombutton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notfound
