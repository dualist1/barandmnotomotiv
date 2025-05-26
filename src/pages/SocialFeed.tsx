import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Clock, ThumbsUp, Camera, PlusCircle } from 'lucide-react';

interface Post {
  id: number;
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  isLiked: boolean;
  isFeatured?: boolean;
  tags?: string[];
}

interface Comment {
  id: number;
  postId: number;
  username: string;
  userAvatar: string;
  text: string;
  date: string;
}

const SocialFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [viewingComments, setViewingComments] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');

  const filters = [
    { id: 'all', name: 'Hepsi' },
    { id: 'featured', name: 'Öne Çıkanlar' },
    { id: 'kaporta', name: 'Kaporta' },
    { id: 'boya', name: 'Boya' },
    { id: 'mekanik', name: 'Mekanik' },
  ];

  // Simulate loading posts from an API
  useEffect(() => {
    const fetchPosts = async () => {
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sample post data
      const samplePosts: Post[] = [
        {
          id: 1,
          username: 'barandmnotomotiv',
          userAvatar: 'https://images.pexels.com/photos/3807349/pexels-photo-3807349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          image: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Mercedes C-Class aracımızın kaporta ve boya işlemleri tamamlandı. Müşterimize hayırlı olsun! #kaporta #boya #mercedes',
          likes: 42,
          comments: 5,
          date: '2 saat önce',
          isLiked: false,
          isFeatured: true,
          tags: ['kaporta', 'boya']
        },
        {
          id: 2,
          username: 'barandmnotomotiv',
          userAvatar: 'https://images.pexels.com/photos/3807349/pexels-photo-3807349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          image: 'https://images.pexels.com/photos/3807334/pexels-photo-3807334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'BMW 3 Serisi aracımızın mekanik bakımı tamamlandı. Motor performansı artık çok daha iyi! #bmw #mekanik #bakım',
          likes: 38,
          comments: 3,
          date: '1 gün önce',
          isLiked: true,
          tags: ['mekanik']
        },
        {
          id: 3,
          username: 'barandmnotomotiv',
          userAvatar: 'https://images.pexels.com/photos/3807349/pexels-photo-3807349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Audi A4 aracımızın boya koruma işlemi tamamlandı. Seramik kaplama ile araç artık çok daha parlak ve dayanıklı! #audi #boya #seramikkaplama',
          likes: 56,
          comments: 7,
          date: '3 gün önce',
          isLiked: false,
          isFeatured: true,
          tags: ['boya']
        },
        {
          id: 4,
          username: 'barandmnotomotiv',
          userAvatar: 'https://images.pexels.com/photos/3807349/pexels-photo-3807349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          image: 'https://images.pexels.com/photos/3807495/pexels-photo-3807495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Volkswagen Golf aracımızın çizik giderme ve polisaj işlemleri tamamlandı. Araç ilk günkü gibi pırıl pırıl! #volkswagen #polisaj #detailing',
          likes: 29,
          comments: 2,
          date: '5 gün önce',
          isLiked: false,
          tags: ['boya']
        },
        {
          id: 5,
          username: 'barandmnotomotiv',
          userAvatar: 'https://images.pexels.com/photos/3807349/pexels-photo-3807349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          image: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Toyota Corolla aracımızın kaza sonrası ağır hasarlı tamiri tamamlandı. Sanki hiç kaza yapmamış gibi! #toyota #kaporta #ağırhasar',
          likes: 64,
          comments: 9,
          date: '1 hafta önce',
          isLiked: true,
          isFeatured: true,
          tags: ['kaporta']
        },
      ];

      // Sample comments
      const sampleComments: Comment[] = [
        {
          id: 1,
          postId: 1,
          username: 'ahmet_yilmaz',
          userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Harika olmuş, emeğinize sağlık!',
          date: '2 saat önce'
        },
        {
          id: 2,
          postId: 1,
          username: 'mehmet_demir',
          userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Fiyat bilgisi alabilir miyim?',
          date: '1 saat önce'
        },
        {
          id: 3,
          postId: 3,
          username: 'zeynep_kaya',
          userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Seramik kaplama gerçekten fark yaratıyor, çok güzel olmuş!',
          date: '2 gün önce'
        },
        {
          id: 4,
          postId: 5,
          username: 'can_yilmaz',
          userAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'İnanılmaz bir değişim olmuş, tebrikler!',
          date: '6 gün önce'
        }
      ];

      setPosts(samplePosts);
      setComments(sampleComments);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const handleLike = (id: number) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleViewComments = (id: number) => {
    setViewingComments(viewingComments === id ? null : id);
  };

  const handleAddComment = (postId: number) => {
    if (!newComment.trim()) return;
    
    const newCommentObj: Comment = {
      id: comments.length + 1,
      postId,
      username: 'ziyaretci_kullanici',
      userAvatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: newComment,
      date: 'Şimdi'
    };
    
    setComments([...comments, newCommentObj]);
    
    // Update comment count in post
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments + 1
        };
      }
      return post;
    }));
    
    setNewComment('');
  };

  const filteredPosts = activeFilter === 'all'
    ? posts
    : activeFilter === 'featured'
      ? posts.filter(post => post.isFeatured)
      : posts.filter(post => post.tags?.includes(activeFilter));

  const getPostComments = (postId: number) => {
    return comments.filter(comment => comment.postId === postId);
  };

  return (
    <div className="fade-in pt-16">
      <section className="bg-primary-900 py-16 text-white">
        <div className="container px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sosyal Akış</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            En son çalışmalarımız, müşteri memnuniyeti ve güncel paylaşımlarımız.
            Siz de aracınızın fotoğraflarını bizimle paylaşabilirsiniz.
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

          {/* Add Post CTA */}
          <div className="mb-8 rounded-lg bg-primary-50 p-6 text-center dark:bg-primary-900/10">
            <h3 className="mb-3 text-xl font-semibold">Aracınızın Fotoğraflarını Paylaşın</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Servisimizde yapılan işlemler sonrası aracınızın fotoğraflarını bizimle paylaşabilirsiniz.
            </p>
            <button className="btn btn-primary">
              <Camera className="mr-2 h-5 w-5" />
              Fotoğraf Yükle
            </button>
          </div>

          {/* Post Feed */}
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="animate-pulse rounded-lg bg-white shadow-md dark:bg-gray-800">
                  <div className="h-64 w-full rounded-t-lg bg-gray-300 dark:bg-gray-700"></div>
                  <div className="p-4">
                    <div className="mb-2 h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
                    <div className="mb-4 h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700"></div>
                    <div className="flex justify-between">
                      <div className="h-8 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                      <div className="h-8 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
                >
                  <div className="border-b border-gray-100 p-4 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                          <img
                            src={post.userAvatar}
                            alt={post.username}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{post.username}</p>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={`Post by ${post.username}`}
                      className="h-auto w-full"
                    />
                    {post.isFeatured && (
                      <div className="absolute right-0 top-0 m-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                        Öne Çıkan
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-1 rounded-full px-3 py-1 transition-colors ${
                            post.isLiked
                              ? 'text-accent-600 dark:text-accent-400'
                              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Heart className={`h-5 w-5 ${post.isLiked ? 'fill-accent-600 dark:fill-accent-400' : ''}`} />
                          <span>{post.likes}</span>
                        </button>
                        <button
                          onClick={() => handleViewComments(post.id)}
                          className="flex items-center space-x-1 rounded-full px-3 py-1 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                      <button className="rounded-full px-3 py-1 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{post.caption}</p>
                    
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Comments */}
                    {viewingComments === post.id && (
                      <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                        <h4 className="mb-3 font-semibold">Yorumlar</h4>
                        
                        <div className="space-y-3">
                          {getPostComments(post.id).map((comment) => (
                            <div key={comment.id} className="flex space-x-3">
                              <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                                <img
                                  src={comment.userAvatar}
                                  alt={comment.username}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                                  <p className="text-sm font-semibold">{comment.username}</p>
                                  <p className="text-sm text-gray-700 dark:text-gray-300">{comment.text}</p>
                                </div>
                                <div className="mt-1 flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                                  <span>{comment.date}</span>
                                  <button className="flex items-center hover:text-primary-600 dark:hover:text-primary-400">
                                    <ThumbsUp className="mr-1 h-3 w-3" />
                                    Beğen
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Add comment form */}
                        <div className="mt-4 flex items-center space-x-3">
                          <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt="User"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              className="input w-full"
                              placeholder="Yorum yaz..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleAddComment(post.id);
                                }
                              }}
                            />
                          </div>
                          <button
                            className="btn btn-primary px-3 py-2"
                            onClick={() => handleAddComment(post.id)}
                          >
                            <PlusCircle className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Load More Button */}
          {!isLoading && filteredPosts.length > 0 && (
            <div className="mt-8 text-center">
              <button className="btn btn-outline">
                Daha Fazla Göster
              </button>
            </div>
          )}

          {/* No Posts Found */}
          {!isLoading && filteredPosts.length === 0 && (
            <div className="mt-10 rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Paylaşım Bulunamadı</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Seçilen filtre için henüz paylaşım bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SocialFeed;