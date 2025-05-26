import { useState } from 'react';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  carModel: string;
  carYear: string;
  serviceType: string;
  message: string;
};

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const serviceTypes = [
    'Periyodik Bakım',
    'Mekanik Tamir',
    'Kaporta & Boya',
    'Detailing',
    'Ekspertiz',
    'Diğer',
  ];

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // In a real app, here you would send the data to your backend
    console.log({
      ...data,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
    });
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setSelectedDate(null);
      setSelectedTime('');
    }, 3000);
  };

  // Filter out weekends and past dates
  const filterDate = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day !== 0 && date >= today; // 0 is Sunday
  };

  return (
    <div className="fade-in pt-16">
      <section className="bg-primary-900 py-16 text-white">
        <div className="container px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Randevu Al</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Aracınız için hızlı ve kolay randevu alın. Sizin için en uygun zamanı seçin.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-lg bg-white shadow-lg dark:bg-gray-800">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-6 rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Randevunuz Alındı!</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Randevu detaylarınız e-posta adresinize gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  Yeni Randevu
                </button>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold">Randevu Bilgileri</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lütfen aşağıdaki formu doldurarak randevu talebinde bulunun.
                  </p>
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
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Telefon Numaranız *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`input w-full ${errors.phone ? 'border-red-500' : ''}`}
                        {...register('phone', { required: 'Telefon gerekli' })}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        E-posta Adresiniz
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input w-full"
                        {...register('email')}
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="mb-2 block text-sm font-medium">
                        Hizmet Türü *
                      </label>
                      <select
                        id="serviceType"
                        className={`input w-full ${errors.serviceType ? 'border-red-500' : ''}`}
                        {...register('serviceType', { required: 'Hizmet türü seçiniz' })}
                      >
                        <option value="">Seçiniz</option>
                        {serviceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="mt-1 text-xs text-red-500">{errors.serviceType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="carModel" className="mb-2 block text-sm font-medium">
                        Araç Markası/Modeli *
                      </label>
                      <input
                        id="carModel"
                        type="text"
                        className={`input w-full ${errors.carModel ? 'border-red-500' : ''}`}
                        placeholder="Örn: Toyota Corolla"
                        {...register('carModel', { required: 'Araç modeli gerekli' })}
                      />
                      {errors.carModel && (
                        <p className="mt-1 text-xs text-red-500">{errors.carModel.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="carYear" className="mb-2 block text-sm font-medium">
                        Araç Yılı
                      </label>
                      <input
                        id="carYear"
                        type="text"
                        className="input w-full"
                        placeholder="Örn: 2020"
                        {...register('carYear')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Açıklama
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="input w-full"
                      placeholder="Aracınızla ilgili detayları belirtebilirsiniz."
                      {...register('message')}
                    ></textarea>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <h3 className="mb-4 flex items-center text-lg font-semibold">
                      <Calendar className="mr-2 h-5 w-5 text-primary-600" />
                      Randevu Tarihi ve Saati Seçin
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Tarih *</label>
                        <div className="relative">
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            filterDate={filterDate}
                            minDate={new Date()}
                            placeholderText="Tarih seçin"
                            className="input w-full"
                            dateFormat="dd/MM/yyyy"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Saat *</label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              className={`flex items-center justify-center rounded-md border p-2 text-sm transition-colors ${
                                selectedTime === time
                                  ? 'border-primary-600 bg-primary-50 text-primary-600 dark:border-primary-400 dark:bg-primary-900/20 dark:text-primary-400'
                                  : 'border-gray-300 hover:border-primary-600 hover:bg-primary-50 dark:border-gray-700 dark:hover:border-primary-400 dark:hover:bg-primary-900/20'
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              <Clock className="mr-1 h-3 w-3" />
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!selectedDate || !selectedTime}
                    >
                      Randevu Oluştur
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold">Sık Sorulan Sorular</h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Randevumu nasıl iptal edebilirim?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Randevunuzu iptal etmek için bize telefon numaramızdan ulaşabilir veya e-posta gönderebilirsiniz.
                Randevu saatinden en az 24 saat önce bilgilendirme yapmanızı rica ederiz.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Randevu saatimde gecikme yaşarsam ne olur?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gecikeceğinizi düşünüyorsanız, lütfen bizi önceden bilgilendirin.
                15 dakikaya kadar gecikmeler kabul edilebilir, ancak daha uzun gecikmeler randevunuzun
                yeniden programlanmasını gerektirebilir.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Randevu için ödeme yapmam gerekiyor mu?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Randevu oluşturmak için herhangi bir ön ödeme gerekmiyor.
                Sadece verilen hizmetler için ödeme yapacaksınız.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;