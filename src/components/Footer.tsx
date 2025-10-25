import { Flower2, Heart, Flower, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-gradient-to-br from-rose-900 to-pink-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
      </div>

      <Flower className="absolute top-8 left-20 text-pink-200 w-16 h-16 opacity-20 animate-float" />
      <Flower2 className="absolute top-6 right-24 text-rose-200 w-20 h-20 opacity-15 animate-float-delay" />
      <Sparkles className="absolute bottom-8 left-32 text-pink-300 w-12 h-12 opacity-20 animate-float" />
      <Heart className="absolute bottom-6 right-28 text-rose-200 w-14 h-14 opacity-15 animate-float-delay" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Flower2 className="w-8 h-8 text-pink-200 animate-float" />
            <Sparkles className="w-5 h-5 text-pink-300 animate-pulse" />
            <span className="font-italiana text-3xl">Isna</span>
            <Sparkles className="w-5 h-5 text-pink-300 animate-pulse" />
            <Flower2 className="w-8 h-8 text-pink-200 scale-x-[-1] animate-float" />
          </div>

          <p className="text-pink-100 font-light max-w-md mb-8">
            Celebrating the beauty of nature, one bloom at a time. Where elegance meets inspiration.
          </p>

          <div className="flex items-center gap-2 text-pink-200 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-pink-300 text-pink-300 animate-pulse" />
            <span>© 2025 Isna. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
