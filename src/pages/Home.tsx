import { ArrowRight, Settings, Wrench, Clock, Shield, ChevronRight, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      id: 1,
      icon: <Settings className="h-10 w-10 text-primary-600" />,
      title: 'Mekanik Tamir',
      description: 'Motor, şanzıman ve diğer mekanik sistemlerin profesyonel tamiri ve bakımı.',
    },
    {
      id: 2,
      icon: <Wrench className="h-10 w-10 text-primary-600" />,
      title: 'Kaporta ve Boya',
      description: 'Hasarlı araçlar için yüksek kaliteli kaporta onarımı ve boya işlemleri.',
    },
    {
      id: 3,
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: 'Periyodik Bakım',
      description: 'Aracınızın ömrünü uzatan düzenli bakım ve kontrol hizmetleri.',
    },
    {
      id: 4,
      icon: <Shield className="h-10 w-10 text-primary-600" />,
      title: 'Ekspertiz',
      description: 'Kapsamlı araç kontrolü ve detaylı teknik inceleme hizmetleri.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      comment: 'Aracımın bakımını her zaman Barandmnotomotiv\'e yaptırıyorum. Profesyonel ekip ve kaliteli hizmet için teşekkürler!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      comment: 'Kaza sonrası aracımın tamirini yaptırdım, sanki hiç kaza yapmamış gibi oldu. Emeğinize sağlık!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      comment: 'Hızlı ve güvenilir hizmet. Başka bir servise gitmeyi düşünmüyorum bile.',
      rating: 4,
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat opacity-30"></div>
        <div className="container relative flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Aracınız İçin Profesyonel <span className="text-accent-400">Bakım ve Onarım</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            20 yılı aşkın tecrübemizle aracınızın bakım ve onarımını en iyi şekilde yapıyoruz.
            Uzman ekibimiz ve modern ekipmanlarımızla hizmetinizdeyiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointment" className="btn btn-accent text-base">
              Hemen Randevu Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/gallery" className="btn btn-outline border-white text-base text-white hover:bg-white/10">
              Çalışmalarımız
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
          <a
            href="#services"
            className="animate-bounce rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Aşağı kaydır"
          >
            <ChevronRight className="h-6 w-6 rotate-90" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Hizmetlerimiz
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Aracınızın tüm ihtiyaçları için profesyonel çözümler sunuyoruz.
              Modern ekipmanlarımız ve uzman kadromuzla yanınızdayız.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="card group cursor-pointer transition-all duration-300 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Detaylı Bilgi
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary-50 py-20 dark:bg-gray-800/50">
        <div className="container px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                20 yılı aşkın tecrübemiz ve müşteri memnuniyeti odaklı yaklaşımımızla
                aracınızın bakım ve onarımını en iyi şekilde yapıyoruz.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2 dark:bg-primary-900/30">
                    <Award className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Uzman Kadro</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deneyimli ve sertifikalı teknisyenlerimizle aracınız emin ellerde.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2 dark:bg-primary-900/30">
                    <Wrench className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Modern Ekipman</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      En son teknoloji cihazlar ve ekipmanlarla hizmet veriyoruz.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2 dark:bg-primary-900/30">
                    <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Hızlı Hizmet</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Zamanınızın değerli olduğunu biliyor ve işlerimizi hızlı tamamlıyoruz.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Link to="/contact" className="btn btn-primary">
                  Bize Ulaşın
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
              <img
                src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Auto repair shop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Müşteri Yorumları
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Müşterilerimizin memnuniyeti bizim için en önemli referanstır.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-400">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/social" className="btn btn-outline">
              Tüm Yorumları Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Aracınız İçin Profesyonel Bakım Zamanı
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-100">
            Randevu alın, aracınızı uzman ellerimize emanet edin.
            Siz de memnun müşterilerimiz arasına katılın.
          </p>
          <Link to="/appointment" className="btn btn-accent text-base">
            Hemen Randevu Al
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;