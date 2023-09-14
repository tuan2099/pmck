import Custombutton from 'src/components/Custombutton'
import logo from '../../assets/logo.png'
function Notfound() {
  return (
      <div className='flex items-center justify-between h-screen bg-[url(http://localhost:1337/uploads/error_bg1_bc6c15a9a1.png)] bg-cover bg-no-repeat'>
        <div className='max-w-[570px] m-auto px-2'>
          <div className='max-w-[100px] w-full m-auto'><img src={logo} alt='404'/></div>
          <div><img src='http://localhost:1337/uploads/error_404_8418e2c87f.png' alt=''/></div>
          <div className='mt-12'>
            <h1 className='text-mainGreenColor text-4xl font-bold text-center'>Oh No! Error 404</h1>
            <p className='font-semibold text-color1 text-center my-4'>Trang bạn yêu cầu không thể tìm thấy</p>
            <div className='m-auto text-center'><Custombutton urlButtonLink="/" urlButton bgcolor='#1e7115' textColor="#fff" borderColor='#1e7115' hoverBgColor='#11400b' hoverBorderColor='#11400b'>Quay lại trang chủ</Custombutton></div>
          </div>
        </div>
      </div>
  )
}

export default Notfound
