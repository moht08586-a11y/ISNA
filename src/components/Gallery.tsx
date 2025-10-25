import { Flower, Flower2, Leaf, Heart, Sparkles } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    { icon: Flower2, color: 'from-rose-300 to-pink-300', title: 'Roses' },
    { icon: Flower, color: 'from-pink-300 to-rose-300', title: 'Daisies' },
    { icon: Leaf, color: 'from-green-300 to-emerald-300', title: 'Botanical' },
    { icon: Flower2, color: 'from-pink-200 to-rose-200', title: 'Petals' },
    { icon: Flower, color: 'from-rose-200 to-pink-200', title: 'Blooms' },
    { icon: Leaf, color: 'from-emerald-300 to-green-300', title: 'Greenery' }
  ];

  return (
    <section id="gallery" className="relative py-24 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <Flower2 className="absolute top-24 left-12 text-rose-200 w-20 h-20 opacity-30 animate-float" />
      <Heart className="absolute top-40 right-24 text-pink-200 w-16 h-16 opacity-35 animate-float-delay" />
      <Flower className="absolute bottom-32 left-1/4 text-rose-200 w-18 h-18 opacity-40 animate-float" />
      <Sparkles className="absolute bottom-40 right-32 text-pink-300 w-12 h-12 opacity-35 animate-float-delay" />
      <Leaf className="absolute top-1/2 left-16 text-green-200 w-14 h-14 opacity-30 animate-float" />
      <Flower2 className="absolute bottom-1/4 right-16 text-rose-200 w-16 h-16 opacity-35 animate-float-delay" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower className="text-pink-500 w-6 h-6" />
            <h2 className="font-italiana text-5xl md:text-6xl text-rose-900">Gallery</h2>
            <Flower className="text-pink-500 w-6 h-6 scale-x-[-1]" />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto rounded-full"></div>
          <p className="text-rose-700 mt-6 font-light text-lg">A curated collection of nature's finest artistry</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Icon className="w-24 h-24 text-white/90 mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" />
                  <h3 className="font-italiana text-3xl text-white">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
