import  Typing from './Typing'
function Hero() {
    const text2 = Typing('Software Engineer')
    const text3 = Typing("Full-Stack PHP and C# Developer")
    return (
     <div className="hero lg:grid grid-cols-2 items-center mt-28 md:mt-10 justify-center w-[100%] h-[100vh] gap-10 text-white px-4 md:px-24 pt-10" id="home">
        <div className="mx-auto text-center md:text-left">
            <p className="md:text-xl">Hi! I’m Obidiran Kehinde Ayodeji</p>
            <h1 className="font-bold text-4xl md:text-7xl mt-5">{text2}</h1>
            <h1 className="font-bold text-sm md:text-xl mb-10 mt-5">{text3}</h1>
              <div className="space-y-1 flex items-center gap-5 justify-center md:justify-start">
               <div className="space-y-1 border-2 border-blue-300 py-2 sm:px-8 px-4 rounded-2xl">
              <a href="whatsapp://send?phone=+2348102326783">Hire Me</a>
            </div>
              
             
            </div>
        </div>
        <div className="my-14 md:py-12 border-8 p-3 border-blue-300">
            <img src="/img\ME.jpeg" alt="me" className="md:w-[500px] h-[500px] w-[100%]  object-cover text-center mx-auto"/>
            
        </div>
     </div>
    );
}

export default Hero;