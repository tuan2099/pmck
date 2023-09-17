import { Component, ErrorInfo, ReactNode } from 'react'
import logo from '../../assets/logo.png'
import Custombutton from '../Custombutton'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error: ', error, errorInfo)
  }
  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='flex h-screen items-center justify-between bg-[url(http://localhost:1337/uploads/error_bg1_bc6c15a9a1.png)] bg-cover bg-no-repeat'>
          <div className='m-auto max-w-[570px] px-2'>
            <div className='m-auto my-2 w-full max-w-[100px]'>
              <img src={logo} alt='404 error' />
            </div>
            <div>
              <img
                src='http://localhost:1337/uploads/anh_Viber_2023_09_14_16_15_35_545_6f195de44e.png'
                alt='error:500'
              />
            </div>
            <div className='mt-12'>
              <h1 className='text-center text-4xl font-bold text-mainGreenColor'>Oops! 500 Internal Server Error</h1>
              <p className='my-4 text-center font-semibold text-color1'>
                Chúng tôi đang nỗ lực khắc phục sự cố. Chúng tôi sẽ quay lại sớm
              </p>
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

    return this.props.children
  }
}
