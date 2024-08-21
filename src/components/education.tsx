import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Formación</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Ciclo Formación Profesional Dual de Desarrollo de Aplicaciones Multiplataforma</h3>
        <p className="text-sm text-gray-600">Afundación, Sep 2018 — Ago 2020</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Ciclo Formacion Profesional de Administración y Finanzas</h3>
        <p className="text-sm text-gray-600">Afundación, Sep 2014 — Sep 2016</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Bachiller</h3>
        <p className="text-sm text-gray-600">Colexio Calasancias, Sep 2010 — Mayo 2012</p>
      </div>
    </section>
  );
}

export default Education;
