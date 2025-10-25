import { Flower2, Sparkles, Flower, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-green-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200 rounded-full blur-3xl animate-float"></div>
      </div>

      <Flower2 className="absolute top-20 right-1/4 text-rose-300 w-20 h-20 opacity-30 animate-float" />
      <Flower className="absolute top-1/4 left-20 text-pink-300 w-16 h-16 opacity-40 animate-float-delay" />
      <Heart className="absolute bottom-1/3 right-32 text-rose-200 w-12 h-12 opacity-30 animate-float" />
      <Flower2 className="absolute bottom-40 left-1/4 text-pink-200 w-24 h-24 opacity-25 animate-float-delay" />
      <Sparkles className="absolute top-40 right-40 text-rose-300 w-10 h-10 opacity-40 animate-float" />
      <Flower className="absolute bottom-1/4 right-1/3 text-pink-300 w-14 h-14 opacity-35 animate-float-delay" />

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flower2 className="text-rose-400 w-8 h-8 animate-float" />
          <Sparkles className="text-pink-400 w-6 h-6 animate-pulse" />
          <Heart className="text-rose-400 w-6 h-6 animate-pulse" />
          <Flower className="text-pink-400 w-8 h-8 animate-float" />
        </div>

        <h1 className="font-italiana text-8xl md:text-9xl text-rose-900 mb-4 tracking-wide">
          Isna
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Flower className="text-rose-300 w-5 h-5 animate-float" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300"></div>
          <Flower2 className="text-pink-400 w-6 h-6 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300"></div>
          <Flower className="text-rose-300 w-5 h-5 animate-float" />
        </div>

        <p className="text-lg md:text-xl text-rose-700 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Where nature's beauty meets timeless elegance. Discover a world of blooms, grace, and inspiration.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden">
            <Heart className="absolute -top-1 -left-1 w-4 h-4 opacity-30 animate-pulse" />
            <Sparkles className="absolute -bottom-1 -right-1 w-4 h-4 opacity-30 animate-pulse" />
            Explore Gallery
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <button className="relative px-8 py-4 bg-white/80 backdrop-blur-sm text-rose-700 rounded-full font-medium hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-rose-200 overflow-hidden">
            <Flower className="absolute -top-1 -left-1 w-4 h-4 text-pink-300 opacity-40 animate-float" />
            <Flower2 className="absolute -bottom-1 -right-1 w-4 h-4 text-rose-300 opacity-40 animate-float" />
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
