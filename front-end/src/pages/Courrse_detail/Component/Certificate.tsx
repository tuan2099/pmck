import { useContext, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'

const Certificate = () => {
  const certificateRef = useRef<any>(null)
  const { profile } = useContext(AppContext)
  const [searchParams, _] = useSearchParams()
  const certificateId = searchParams.get('certificate')

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

  const { data, isLoading } = useQuery({
    queryKey: ['certificate', certificateId],
    queryFn: () => courseApi.getCertificate(certificateId),
    enabled: Boolean(certificateId)
  })

  useEffect(() => {
    if (certificateRef.current && data?.data?.data?.attributes?.pdf_file.data[0].attributes.url) {
      exportToPDF()
    }
  }, [])
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className='relative mx-20' ref={certificateRef}>
          <p className='absolute right-1/2 top-[48%] translate-x-1/2 text-4xl font-bold'>{profile?.full_name}</p>

          <p className='absolute bottom-1/4 left-[20%] -translate-x-[20%] text-2xl font-bold'>
            {new Date().toJSON().slice(0, 10).split('-').reverse().join('/')}
          </p>
          <img
            className='w-full'
            src={`http://localhost:1337${data?.data.data.attributes.pdf_file.data[0].attributes.url}`}
            alt=''
          />
        </div>
      )}
    </>
  )
}

export default Certificate
