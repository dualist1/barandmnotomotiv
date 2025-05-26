import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Car } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-950 dark:text-white">
                Barandmnotomotiv
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Profesyonel oto tamir ve bakım hizmetleri. 20 yılı aşkın tecrübemizle hizmetinizdeyiz.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/appointment"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Randevu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  to="/social"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Sosyal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">İletişim</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 text-primary-600" />
                <span>+90 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 text-primary-600" />
                <span>info@barandmnotomotiv.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 text-primary-600" />
                <span>Atatürk Cad. No:123, İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Bizi Takip Edin</h4>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-600 dark:hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-600 dark:hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-600 dark:hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-sm font-semibold">Çalışma Saatleri</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pazartesi - Cumartesi: 08:00 - 18:00
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pazar: Kapalı
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Barandmnotomotiv. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;