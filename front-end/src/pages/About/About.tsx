import PlaceIcon from '@mui/icons-material/Place'

function About() {
  return (
    <>
        <section>
          <div className="bg-[url(https://htmldemo.net/edumall/edumall/assets/images/about-us-hero-bg.jpg)] bg-no-repeat bg-cover bg-center relative h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center"><h1 className="font-bold text-white text-[50px]">Improving Lives</h1>
            <h4 className="text-[35px] font-semibold text-white">Through Learning</h4></div>
          </div>
        </section>
        <section className="m-auto mb-10 max-w-[1320px] py-9">
          <div className="text-center">
            <h4 className="text-mainGreenColor">START TO SUCCESS</h4>
            <h3 className="text-[20px] font-bold lg:text-[32px]">The Leading Global Marketplace for Learning and Instruction</h3>
            <p className="lg:w-1/2 w-full px-2 m-auto">Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-5 mt-[50px]">
            <div className="w-full text-center">
              <div className='mb-7'><PlaceIcon fontSize="large"/></div>
              <h3 className="text-4xl font-bold text-[#1E7115] mb-5">15</h3>
              <p className="w-2/3 m-auto">Năm kinh nghiệm trong lĩnh vực giáo dục</p>
            </div>
            <div className="w-full text-center">
              <div className='mb-7'><PlaceIcon fontSize="large"/></div>
              <h3 className="text-4xl font-bold text-[#1E7115] mb-5">15</h3>
              <p className="w-2/3 m-auto">Học viên đã đăng kí</p>
            </div>
            <div className="w-full text-center">
              <div className='mb-7'><PlaceIcon fontSize="large"/></div>
              <h3 className="text-4xl font-bold text-[#1E7115] mb-5">15</h3>
              <p className="w-2/3 m-auto">Giảng viên có trình độ</p>
            </div>
            <div className="w-full text-center">
              <div className='mb-7'><PlaceIcon fontSize="large"/></div>
              <h3 className="text-4xl font-bold text-[#1E7115] mb-5">15</h3>
              <p className="w-2/3 m-auto">Luôn cập nhật những khóa học mới</p>
            </div>
          </div>
        </section>
        <section className="bg-[#F8F8F8] py-4">
          <div className="m-auto mb-10 max-w-[1320px]">
            <div className="text-center">
              <h3 className="text-[20px] font-bold lg:text-[32px]">What Make Us Spcecial?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <div className='px-2 lg:px-0'>
                <div className="bg-[url(https://htmldemo.net/edumall/edumall/assets/images/academics/event-thumbnail-01.jpg)] bg-cover bg-center bg-no-repeat pt-[56.25%] rounded-lg">
                </div>
                <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet,</p>
              </div>
              <div className='px-2 lg:px-0'>
                <div className="bg-[url(https://htmldemo.net/edumall/edumall/assets/images/academics/event-thumbnail-01.jpg)] bg-cover bg-center bg-no-repeat pt-[56.25%] rounded-lg">
                </div>
                <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet,</p>
              </div>
              <div className='px-2 lg:px-0'>
                <div className="bg-[url(https://htmldemo.net/edumall/edumall/assets/images/academics/event-thumbnail-01.jpg)] bg-cover bg-center bg-no-repeat pt-[56.25%] rounded-lg">
                </div>
                <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet,</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="m-auto mb-10 max-w-[1320px] py-9">
            <div className="text-center">
                <h3 className="text-[20px] font-bold lg:text-[32px]">A Great Place to Grow</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit.</p>
              </div>
              <div>
                <div className="grid lg:grid-cols-3 gap-5">
                  <div></div>
                </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default About
