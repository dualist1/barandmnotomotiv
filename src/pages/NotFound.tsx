import { Link } from 'react-router-dom';
import { ArrowLeft, Tool } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="fade-in flex min-h-screen items-center justify-center px-4 py-24">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-primary-100 p-6 dark:bg-primary-900/30">
            <Tool className="h-16 w-16 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
        <h1 className="mb-4 text-6xl font-bold text-primary-600 dark:text-primary-400">404</h1>
        <h2 className="mb-4 text-3xl font-bold">Sayfa Bulunamadı</h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <Link
          to="/"
          className="btn btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;