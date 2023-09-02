import { useContext, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import mau from '../../../assets/images/mau.png'
import { AppContext } from 'src/context/app.context'

const Certificate = () => {
  const certificateRef = useRef<any>(null)
  const { profile } = useContext(AppContext)

  const exportToPDF = () => {
    const certificateContent = certificateRef.current
    if (!certificateContent) return

    const pdf = new jsPDF('p', 'mm', 'a4')

    html2canvas(certificateContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const imgWidth = pdf.internal.pageSize.getWidth()
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save(`${profile?.full_name || 'export'}-pdf.pdf`)
    })
  }

  useEffect(() => {
    if (certificateRef.current) {
      exportToPDF()
    }
  }, [])

  return (
    <div className='relative mx-20' ref={certificateRef}>
      <p className='absolute right-1/2 top-[48%] translate-x-1/2 text-4xl font-bold'>{profile?.full_name}</p>

      <p className='absolute bottom-1/4 left-[20%] -translate-x-[20%] text-2xl font-bold'>
        {new Date().toJSON().slice(0, 10).split('-').reverse().join('/')}
      </p>
      <img className='w-full' src={mau} alt='' />
    </div>
  )
}

export default Certificate
