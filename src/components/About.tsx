import { Heart, Leaf, Sparkles, Flower, Flower2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-br from-cream-50 via-white to-green-50">
      <Flower2 className="absolute top-32 left-10 text-pink-200 w-16 h-16 opacity-40 animate-float" />
      <Flower className="absolute top-20 right-16 text-rose-200 w-20 h-20 opacity-30 animate-float-delay" />
      <Heart className="absolute bottom-40 left-1/4 text-rose-200 w-12 h-12 opacity-35 animate-float" />
      <Sparkles className="absolute bottom-32 right-20 text-pink-300 w-10 h-10 opacity-40 animate-float-delay" />
      <Flower2 className="absolute top-1/2 right-10 text-rose-200 w-14 h-14 opacity-30 animate-float" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="text-green-500 w-6 h-6" />
            <h2 className="font-italiana text-5xl md:text-6xl text-rose-900">About</h2>
            <Leaf className="text-green-500 w-6 h-6 scale-x-[-1]" />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="text-rose-600 w-8 h-8" />
            </div>
            <h3 className="font-italiana text-2xl text-rose-900 mb-4">Passion</h3>
            <p className="text-rose-700 leading-relaxed font-light">
              Every petal tells a story of dedication and love. We pour our hearts into creating moments of natural beauty that inspire and uplift.
            </p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="font-italiana text-2xl text-rose-900 mb-4">Nature</h3>
            <p className="text-rose-700 leading-relaxed font-light">
              Drawing inspiration from gardens in bloom, we celebrate the raw elegance of nature and its endless capacity to bring joy.
            </p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-pink-600 w-8 h-8" />
            </div>
            <h3 className="font-italiana text-2xl text-rose-900 mb-4">Elegance</h3>
            <p className="text-rose-700 leading-relaxed font-light">
              Timeless grace meets modern sophistication. Each creation is a testament to refined beauty and artistic expression.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto relative">
          <Flower className="absolute -left-12 top-0 text-pink-300 w-10 h-10 opacity-40 animate-float" />
          <Flower2 className="absolute -right-12 top-0 text-rose-300 w-10 h-10 opacity-40 animate-float-delay" />
          <p className="text-lg text-rose-700 leading-relaxed font-light">
            Isna is more than a name—it's a celebration of life's most beautiful moments, captured in the delicate dance of petals and leaves. Join us in discovering the extraordinary in the everyday.
          </p>
        </div>
      </div>
    </section>
  );
}
