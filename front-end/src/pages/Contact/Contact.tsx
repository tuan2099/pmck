import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Custombutton from 'src/components/Custombutton';
import SendIcon from '@mui/icons-material/Send';
function Contact() {
  return (
    <>
      <div className="m-auto mb-10 max-w-[1320px] py-9">
        <div className="text-center w-full pt-[70px]">
            <h2
                className="text-[24px] lg:text-[32px] text-color1 font-bold leading-[44px]">
                Chúng tôi mong muốn lắng nghe phản hồi từ bạn!
            </h2>
            <p className="max-md:mx-[0] mt-[15px] text-[14px] text-color1 w-1/2 m-auto">
                Chúng tôi luôn coi trọng và tôn trọng mọi ý kiến đóng góp của khách hàng.  Đội ngũ nhân viên của chúng tôi sẽ lắng nghe tận tình mọi góp ý, phản hồi của quý khách về sản phẩm, dịch vụ
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto pt-[70px]">
            <div className="flex justify-center">
                <PlaceIcon/>
                <div className="pl-[20px]">
                    <h3 className="text-[18px] font-bold text-[#252525] mb-3">Địa chỉ</h3>
                    <p className="text-[14px] text-[#333333]">1800 Abbot Kinney Blvd. Unit
                        <br/>
                        D & E Venice
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <ContactPhoneIcon/>
                <div className="pl-[20px]">
                    <h3 className="text-[18px] font-bold text-[#252525] mb-3">Kết nối</h3>
                    <div>
                        <p className="text-[14px] text-[#333333]">
                            Mobile:
                            <strong className=" text-[14px] font-bold"> (+88) - 1990 - 6886</strong>
                        </p>
                        <p className="text-[14px] text-[#333333]">
                            Hotline:
                            <strong className=" text-[14px] font-bold">1800 - 1102</strong>
                        </p>
                        <p className="text-[14px] text-[#333333]">
                            Mail: contact@edumall.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <QueryBuilderIcon/>
                <div className="pl-[20px]">
                    <h3 className="text-[18px] font-bold text-[#252525] mb-3">Thời gian làm việc</h3>
                    <div>
                        <p className="text-[14px] text-[#333333]">Monday - Friday: 09:00 - 20:00</p>
                        <p className="text-[14px] text-[#333333]">Sunday & Saturday: 10:30 - 22:00</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center pt-[70px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3431462585104!2d105.80657967404555!3d21.01895158811774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab66ef02cb23%3A0x7e791bc1803d8a98!2zNTcgUC4gSHXhu7NuaCBUaMO6YyBLaMOhbmcsIEzDoW5nIEjhuqEsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1697533884819!5m2!1svi!2s"
                width="1320px" height="500"  allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div> 
        <div className='my-4'> 
            <h2 className="max-w-[770px] py-[70px] mx-auto text-[28px] max-md:text-[24px] max-[576px]:text-[22px] font-bold text-center mb-[37px]">
                Cùng chia sẻ để chúng tôi hiểu rõ hơn nhu cầu của bạn
            </h2>
            <div className=" max-w-[800px] mx-auto ">
                <div className="grid grid-cols-2 max-md:grid-cols-1">
                    <div className="px-[15px] ">
                        <input
                            className="rounded-[5px] w-[100%] bg-[#f8f8f8] py-[3px] px-[20px] h-[40px] border-[1px] border-[#f8f8f8] max-md:mt-[20px] max-md:px-[15px]"
                            type="text" placeholder="Your name"/>
                    </div>
                    <div className="px-[15px] ">
                        <input
                            className="rounded-[5px] w-[100%] bg-[#f8f8f8] py-[3px] px-[20px] h-[40px] border-[1px] border-[#f8f8f8] max-md:mt-[20px] max-md:px-[15px]"
                            type="email" placeholder="Email"/>
                    </div>
                </div>
                <div className=" mt-[20px] px-[15px] ">
                    <textarea
                        className="border-[1px] border-[#f8f8f8] rounded-[5px] h-[100%] w-[100%] bg-[#f8f8f8] pt-[19px] pb-[3px] px-[20px]"
                        placeholder="Message" rows={6} cols={100}></textarea>
                </div>
                <div className="px-[15px] mt-[20px] flex justify-center">
                    <Custombutton
                    textColor='#fff'
                    bgcolor='#1E7115'
                    border='none'
                    borderColor='none'
                    hoverBgColor='#335574'
                    endIcon={<SendIcon />}
                    >
                        {' '}
                        Lọc tin tức
                    </Custombutton>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
