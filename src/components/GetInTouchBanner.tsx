import circle from '../assets/circle.png'

const GetInTouchBanner = () => {
  return (
    <div className='bg-blue-500 md:max-w-[75%] min-w-[95%] md:min-w-[70%] md:h-[150px] h-[190px] m-6 rounded-2xl items-center justify-between flex'>
        <div className='md:w-[80%] min-w-[60%] md:ml-6 flex flex-row'>
            <div className='flex flex-col'>
                <p className='ml-6 text-white font-semibold text-md font-sans'>Want to delve deeper into the program?</p>
                <p className='ml-6 text-white text-sm font-sans'>Share your details to receive expert insights from our program team!</p>
            </div>
        </div>
        <div>
            <img src={circle}/>
        </div>
    </div>
  )
}

export default GetInTouchBanner