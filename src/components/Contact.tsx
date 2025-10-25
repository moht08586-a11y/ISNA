import { Mail, MapPin, Phone, Send, Flower2, Flower, Heart, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-white via-cream-50 to-rose-50">
      <Flower2 className="absolute top-20 left-16 text-pink-200 w-20 h-20 opacity-35 animate-float" />
      <Heart className="absolute top-32 right-20 text-rose-200 w-14 h-14 opacity-40 animate-float-delay" />
      <Flower className="absolute bottom-40 left-24 text-rose-200 w-16 h-16 opacity-30 animate-float" />
      <Sparkles className="absolute bottom-32 right-32 text-pink-300 w-12 h-12 opacity-35 animate-float-delay" />
      <Flower2 className="absolute top-1/2 right-12 text-pink-200 w-18 h-18 opacity-30 animate-float" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="text-rose-500 w-6 h-6 animate-float" />
            <Heart className="text-pink-500 w-5 h-5 animate-pulse" />
            <h2 className="font-italiana text-5xl md:text-6xl text-rose-900">Contact</h2>
            <Heart className="text-pink-500 w-5 h-5 animate-pulse" />
            <Flower2 className="text-rose-500 w-6 h-6 animate-float scale-x-[-1]" />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto rounded-full"></div>
          <p className="text-rose-700 mt-6 font-light text-lg">Let's create something beautiful together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group">
              <h3 className="font-italiana text-3xl text-rose-900 mb-6">Get in Touch</h3>
              <p className="text-rose-700 leading-relaxed font-light mb-8">
                Whether you have a question, a special request, or simply want to share your love for flowers, we'd be delighted to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-rose-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-1">Email</h4>
                    <p className="text-rose-700 font-light">hello@isna.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-pink-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-1">Phone</h4>
                    <p className="text-rose-700 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-1">Location</h4>
                    <p className="text-rose-700 font-light">123 Blossom Lane<br/>Garden City, GC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-100">
            <form className="space-y-6">
              <div>
                <label className="block text-rose-900 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 bg-white/80"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-rose-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 bg-white/80"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-rose-900 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 bg-white/80 resize-none"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
