import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="mb-2"><strong>Teléfono:</strong> 657804576</p>
      <p className="mb-2"><strong>Email:</strong> <a href="mailto:seijas.santi@gmail.com" className="text-blue-500">seijas.santi@gmail.com</a></p>
      <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/santiseijas" className="text-blue-500">www.linkedin.com/in/santiseijas</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/santiseijas" className="text-blue-500">github.com/santiseijas</a></p>
    </section>
  );
}

export default Contact;
