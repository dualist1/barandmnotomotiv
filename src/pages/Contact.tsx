import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // In a real app, send the form data to your backend/API
    console.log(data);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="fade-in pt-16">
      <section className="bg-primary-900 py-16 text-white">
        <div className="container px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">İletişim</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Sorularınız veya randevu talepleriniz için bizimle iletişime geçin.
            Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8 md:col-span-1">
              <div>
                <h2 className="mb-6 text-2xl font-bold">İletişim Bilgileri</h2>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Adres</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Atatürk Cad. No:123<br />
                        Kartal, İstanbul<br />
                        Türkiye
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Telefon</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +90 (555) 123-4567
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        +90 (212) 987-6543
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">E-posta</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        info@barandmnotomotiv.com
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        destek@barandmnotomotiv.com
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Çalışma Saatleri</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Pazartesi - Cumartesi: 08:00 - 18:00
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Pazar: Kapalı
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold">Sosyal Medya</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-full bg-gray-200 p-3 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-full bg-gray-200 p-3 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="rounded-full bg-gray-200 p-3 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/905551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="rounded-full bg-gray-200 p-3 text-gray-700 transition-colors hover:bg-green-500 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-green-500 dark:hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-6 rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                      <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold">Mesajınız Gönderildi!</h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                      En kısa sürede size geri dönüş yapacağız.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Yeni Mesaj
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 flex items-center">
                      <MessageSquare className="mr-3 h-6 w-6 text-primary-600" />
                      <h2 className="text-2xl font-bold">Bize Yazın</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Adınız Soyadınız *
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={`input w-full ${errors.name ? 'border-red-500' : ''}`}
                            {...register('name', { required: 'İsim gerekli' })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            E-posta Adresiniz *
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
                            {...register('email', {
                              required: 'E-posta gerekli',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Geçersiz e-posta adresi',
                              },
                            })}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                          Konu *
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className={`input w-full ${errors.subject ? 'border-red-500' : ''}`}
                          {...register('subject', { required: 'Konu gerekli' })}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium">
                          Mesajınız *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className={`input w-full ${errors.message ? 'border-red-500' : ''}`}
                          {...register('message', { required: 'Mesaj gerekli' })}
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">
                          Gönder
                          <Send className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container px-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96339.5348222671!2d29.13138211572948!3d40.90389979633293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac719d718f7a5%3A0xfb46dc5e1237e002!2sKartal%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1680019234989!5m2!1str!2str" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barandmnotomotiv location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;