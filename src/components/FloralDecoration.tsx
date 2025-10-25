import { Flower, Flower2, Heart, Sparkles, Leaf } from 'lucide-react';

interface FloralDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function FloralDecoration({ position }: FloralDecorationProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  const rotationClasses = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-left': '-rotate-90',
    'bottom-right': 'rotate-180'
  };

  return (
    <div className={`absolute ${positionClasses[position]} opacity-20 pointer-events-none`}>
      <div className={`relative ${rotationClasses[position]}`}>
        <Flower className="absolute text-pink-300 w-24 h-24 animate-float" />
        <Flower2 className="absolute text-rose-300 w-16 h-16 top-12 left-16 animate-float-delay" />
        <Heart className="absolute text-rose-200 w-12 h-12 top-6 left-24 animate-float" />
        <Sparkles className="absolute text-pink-300 w-10 h-10 top-20 left-8 animate-float-delay" />
        <Leaf className="absolute text-green-300 w-14 h-14 top-16 left-20 animate-float" />
      </div>
    </div>
  );
}
