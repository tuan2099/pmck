import logo from '../../assets/logo.png'
import ButtonCustom from 'src/components/Button/Button'
import { Link } from 'react-router-dom'

function UnderContruction() {
  return (
    <>
      <div className='flex h-screen items-center justify-between bg-[url(http://localhost:1337/uploads/error_bg1_bc6c15a9a1.png)] bg-cover bg-no-repeat'>
        <div className='m-auto max-w-[570px] px-2'>
          <div className='m-auto w-full max-w-[100px]'>
            <img src={logo} alt='404' />
          </div>
          <div>
            <img src='http://localhost:1337/uploads/anh_Viber_2023_09_14_16_13_59_315_2cf85fdbb4.png' alt='' />
          </div>
          <div className='mt-12'>
            <h1 className='text-center text-4xl font-bold uppercase text-mainGreenColor'>Trang này hiện đang trong quá trình phát triển</h1>
            <div className='m-auto text-center'>
              <Link to="/">
                <ButtonCustom
                  className='my-6 inline-block rounded bg-gradient-to-r from-green-600 to-green-700 px-6 py-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#0b1526] outline-none transition duration-150 ease-in-out hover:bg-[#103a0b] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#103a0b] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#217a17] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                >
                  Quay lại trang chủ
                </ButtonCustom>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UnderContruction
