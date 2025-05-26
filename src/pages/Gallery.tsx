import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
  description: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalImage, setModalImage] = useState<GalleryItem | null>(null);
  const [isBeforeImage, setIsBeforeImage] = useState(true);

  const filters = [
    { id: 'all', name: 'Hepsi' },
    { id: 'kaporta', name: 'Kaporta' },
    { id: 'boya', name: 'Boya' },
    { id: 'mekanik', name: 'Mekanik' },
    { id: 'detailing', name: 'Detailing' },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Mercedes Kaporta Onarımı',
      category: 'kaporta',
      before: 'https://images.pexels.com/photos/3807349/pexels-photo-3807349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Çarpışma sonrası hasar gören Mercedes aracın tamiri ve boyası tamamlandı.',
    },
    {
      id: 2,
      title: 'BMW Boya Yenileme',
      category: 'boya',
      before: 'https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Eskiyen ve matlaşan boya, özel uygulamalarla yenilendi.',
    },
    {
      id: 3,
      title: 'Audi Motor Revizyonu',
      category: 'mekanik',
      before: 'https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Performans kaybı yaşayan motor, komple revizyon ile yenilendi.',
    },
    {
      id: 4,
      title: 'Volkswagen Detailing',
      category: 'detailing',
      before: 'https://images.pexels.com/photos/10894403/pexels-photo-10894403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Araç içi ve dışı detaylı temizlik ve koruma uygulaması.',
    },
    {
      id: 5,
      title: 'Ford Kaporta Düzeltme',
      category: 'kaporta',
      before: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Yan taraftan darbe alan aracın kaporta onarımı.',
    },
    {
      id: 6,
      title: 'Toyota Boya Koruma',
      category: 'boya',
      before: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Seramik kaplama ile boya koruma uygulaması.',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (item: GalleryItem) => {
    setModalImage(item);
    setIsBeforeImage(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = '';
  };

  const toggleBeforeAfter = () => {
    setIsBeforeImage(!isBeforeImage);
  };

  return (
    <div className="fade-in pt-16">
      <section className="bg-primary-900 py-16 text-white">
        <div className="container px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Çalışmalarımız</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Öncesi ve sonrası fotoğraflarla tamamladığımız işlerden örnekler.
            Kalitemizi ve farkımızı görün.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.before}
                    alt={`${item.title} before`}
                    className="h-full w-full object-cover transition-opacity group-hover:opacity-0"
                  />
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-medium">Görmek için tıklayın</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-full max-w-4xl overflow-hidden rounded-lg bg-white dark:bg-gray-900">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative aspect-video h-full max-h-[70vh] w-full">
              <img
                src={isBeforeImage ? modalImage.before : modalImage.after}
                alt={`${modalImage.title} ${isBeforeImage ? 'before' : 'after'}`}
                className="h-full w-full object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/70 p-4 text-white">
                <div>
                  <h3 className="text-xl font-bold">{modalImage.title}</h3>
                  <p className="text-sm">{isBeforeImage ? 'Öncesi' : 'Sonrası'}</p>
                </div>
                <button
                  onClick={toggleBeforeAfter}
                  className="flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  {isBeforeImage ? (
                    <>
                      Sonrası <ArrowRight className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <ArrowLeft className="mr-1 h-4 w-4" /> Öncesi
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-gray-700 dark:text-gray-300">{modalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;