import Navbar from './components/Navbar'
import photo from './assets/Anniversary.png'
import banner from './assets/2ndBanner.svg'
import ReferralBenefits from './components/Refferal'
import FAQ from './components/FAQ'
import GetInTouchBanner from './components/GetInTouchBanner'
import Footer from './components/Footer'
import banner3 from './assets/2ndBannerMobile.svg'
import Referal from './components/ReferralMoodal'
import { Toaster } from 'react-hot-toast';

function App() {

  const scrollToSection = (e:string) => {
    document.getElementById(e).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>

      <div className='h-[100vh] flex flex-col items-center overflow-x-hidden'>
        <Toaster/>
        <div className='font-inter font-medium text-[14.88px] leading-[28px] tracking-[0] bg-blue-100 text-center w-full h-[60px] flex flex-row gap-3 items-center justify-center'>
          <p className=''>Navigate your ideal career path with tailored expert advice</p>
          <a className="text-[15.02px] leading-[28px] text-blue-600 tracking-[0] text-center"
 href="/">Contact Expert</a>  
        </div>

      <div className='md:w-[80vw] flex items-center justify-center flex-col'>
        <Navbar/>
         {/*Desktop Ban*/}
        <div className='bg-blue-200 mt-14 w-auto gap-28 py-4 px-20 rounded-4xl hidden md:flex flex-row text-xl'>
          <span onClick={()=>scrollToSection('refer')} className='transition-colors duration-300 ease-in-out hover:text-blue-900 text-blue-600'>Refer</span>
          <span onClick={()=>scrollToSection('benefits')} className='transition-colors duration-300 ease-in-out hover:text-blue-500' >Benefits</span>
          <span onClick={()=>scrollToSection('faq')} className='transition-colors duration-300 ease-in-out hover:text-blue-500' >FAQs</span>
          <a href='/'  className='transition-colors duration-300 ease-in-out hover:text-blue-500' >Support</a>
        </div>

        {/*Smartphones Ban*/}
        <div className='bg-blue-200 mt-14 justify-between min-w-[350px] p-6 rounded-4xl md:hidden flex flex-row text-xl'>
          <span onClick={()=>scrollToSection('refer')} className='text-blue-700'>Refer</span>
          <span onClick={()=>scrollToSection('benefits')}>Benefits</span>
          <span onClick={()=>scrollToSection('faq')}>FAQs</span>
          <a href='/'>Support</a>
        </div>

        {/*Desktop Ban2*/}
        <div id='refer' className="mt-8 hidden md:flex flex-row justify-between items-center bg-blue-100 rounded-lg w-[90%] min-h-[500px]">
          <div className='ml-16 flex flex-col gap-10'>
          <p className='w-[70%] font-roboto font-semibold text-7xl'>Let’s Learn & Earn</p>
          <p className="inline-flex flex-col w-[65%] font-roboto font-normal text-4xl">
            Get a chance to win up-to 
              <span className="text-blue-700 font-bold"> Rs. 15,000</span>
          </p>

  <div className="w-[150px] h-[30px] p-6 text-lg text-center bg-blue-500 rounded-md text-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
  <Referal/>
  </div>
  </div>
  <div className="">
    <img className="" src={photo} />
  </div>
</div>
{/*Mobile Ban2*/}
<div id='refer' className="mt-8 flex md:hidden flex-row justify-between items-center bg-blue-100 rounded-lg w-[95%] min-h-[400px]">
          <div className='w-full flex flex-col gap-10 items-center justify-center'>
          <p className='font-roboto font-semibold text-5xl '>Let’s Learn & Earn</p>
          <p className="flex flex-col text-xl">
            Get a chance to win <span className='text-center'>up-to</span> 
              <span className="text-blue-700 font-bold text-center text-3xl"> Rs. 15,000</span>
          </p>

  <div className="w-[150px] h-[30px] p-6 text-lg text-center bg-blue-500 rounded-md text-white flex items-center justify-center">
  <Referal/>
  </div>
  </div>
</div>
{/*Desktop*/}
<div className="mt-8 hidden md:flex flex-col justify-center items-center bg-blue-100 rounded-lg w-[90%] min-h-[500px]">
<div className='flex mt-2 flex-row font-semibold font-roboto gap-2 text-xl'>How do I <p className='font-bold text-blue-700'>Refer</p> ?</div>
<img className='mt-7' src={banner}/>
<div className=" w-[150px] mb-2 h-[30px] p-6 text-lg text-center bg-blue-500 rounded-md text-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
  <Referal/>
  </div>
</div> 

<div className="mt-8 md:hidden flex flex-col justify-center items-center bg-blue-100 rounded-lg w-[90%] min-h-[500px]">
<div className='flex mt-2 flex-row font-semibold font-roboto gap-2 text-xl'>How do I <p className='font-bold text-blue-700'>Refer</p> ?</div>
<img className='' src={banner3}/>
<div className=" w-[150px] mb-2 h-[30px] p-6 text-lg text-center bg-blue-500 rounded-md text-white flex items-center justify-center">
  <Referal/>
  </div>
</div>
<div id='benefits'>
  <ReferralBenefits/>
</div>
  <p className='w-full text-end mt-2 mr-8 text-xl text-blue-500 md:hidden '>Show More</p>
  <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-[150px] mt-12 mb-2 h-[30px] p-6 text-lg text-center bg-blue-500 rounded-md text-white flex items-center justify-center">
    <Referal/>
  </div>
<div id='faq'>
<FAQ/>
</div>
<GetInTouchBanner/>
<Footer/>
      </div>
      </div>
    </>
  )
}

export default App
