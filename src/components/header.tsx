import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">
          Santiago Seijas Marante
        </h1>
        <nav className="flex space-x-4">
          <Link href="/about" passHref>
            <h1 className="text-white hover:text-gray-400">about</h1>
          </Link>
          <Link href="/education" passHref>
            <h1 className="text-white hover:text-gray-400">Formación</h1>
          </Link>
          <Link href="/contact" passHref>
            <h1 className="text-white hover:text-gray-400">Contacto</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
