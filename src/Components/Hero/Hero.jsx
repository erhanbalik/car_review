
const Hero = () => {

  return (
    <div className="flex items-center justify-around h-[45vh] bg-gradient-to-t from-slate-400 to-slate-800">
        <div className='absolute'>
            <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png' className="lg:h-[45vh] h-full"/>
        </div>
      <div className=" text-center relative">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-violet-600 md:text-6xl sm:text-4xl text-3xl uppercase font-bold w-full">Sana gore en dogru arac hangisi ogren</h1>
      </div>
    </div>
  )
}

export default Hero