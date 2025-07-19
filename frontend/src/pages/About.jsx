import React from 'react'
import {assets} from "../assets/assets"

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Sobre <span className='text-gray-700 font-medium'>Nosotros</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Bienvenido a MediPlus, su socio de confianza para gestionar sus necesidades de atención médica de forma cómoda y eficiente. En MediPlus, comprendemos los desafíos que enfrentan las personas al programar citas médicas y administrar sus historiales médicos.</p>
          <p>MediPlus se compromete con la excelencia en tecnología sanitaria. Nos esforzamos continuamente por mejorar nuestra plataforma, integrando los últimos avances para optimizar la experiencia del usuario y brindar un servicio superior. Ya sea que esté reservando su primera cita o gestionando su atención continua, MediPlus está aquí para apoyarle en cada paso del proceso.</p>
          <b className='text-gray-800'>Nuesta Visión</b>
          <p>Nuestra visión en MediPlus es crear una experiencia de atención médica integral para cada usuario. Nuestro objetivo es conectar a los pacientes con los profesionales de la salud, facilitándole el acceso a la atención que necesita, cuando la necesita.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Porque <span className='text-gray-700 font-semibold'>Elegirnos</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:pd-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-teal-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Eficiencia:</b>
          <p>Programación de citas optimizada que se adapta a su ajetreado estilo de vida.</p>
        </div>
        <div className='border px-10 md:pd-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-teal-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Conveniencia:</b>
          <p>Acceso a una red de profesionales de la salud de confianza en su área.</p>
        </div>
        <div className='border px-10 md:pd-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-teal-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalización:</b>
          <p>Recomendaciones y recordatorios personalizados para ayudarle a mantenerse al tanto de su salud.</p>
        </div>
      </div>

    </div>
  )
}

export default About
