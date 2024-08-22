import React from 'react'

const Experience: React.FC = () => {
  return (
    <section className='my-8 p-6 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>Experiencia</h2>
      <div className='mb-6'>
        <h3 className='text-xl font-bold'>React Native Developer, Vass</h3>
        <p className='text-sm text-gray-600'>Mar 2024</p>
        <ul className='list-disc list-inside'>
          <li>Participación en el desarrollo y mantenimiento de la aplicación móvil de SABA.</li>
          <li>Desarrollo de nuevas funcionalidades utilizando React Native y TypeScript.</li>
          <li>Gestión del ciclo completo de vida de la aplicación.</li>
          <li>Implementación de pruebas unitarias y automáticas.</li>
          <li>Refactorización de código existente.</li>
        </ul>
      </div>
      <div className='mb-6'>
        <h3 className='text-xl font-bold'>React Native Developer, eccocar</h3>
        <p className='text-sm text-gray-600'>Sep 2020 — Mar 2024</p>
        <ul className='list-disc list-inside'>
          <li>Desarrollo de aplicaciones móviles y web para soluciones de movilidad.</li>
          <li>Creación de una plataforma web utilizando Angular.</li>
          <li>Colaboración en un entorno ágil.</li>
        </ul>
      </div>
      <div className='mb-6'>
        <h3 className='text-xl font-bold'>Prácticas Java Developer, Indra</h3>
        <p className='text-sm text-gray-600'>Mar 2019 — Ago 2020</p>
      </div>
      <div className='mb-6'>
        <h3 className='text-xl font-bold'>Gestor Comercial, Abanca</h3>
        <p className='text-sm text-gray-600'>Jun 2016 — Feb 2018</p>
      </div>
      <div>
        <h3 className='text-xl font-bold'>Camarero, Pizzerias Cambalache</h3>
        <p className='text-sm text-gray-600'>Ago 2014 — Jun 2020</p>
      </div>
    </section>
  )
}

export default Experience
