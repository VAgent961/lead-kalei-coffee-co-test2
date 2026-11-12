import { Coffee, Utensils, Home } from 'lucide-react';

export default function CoffeeSection() {
  return (
    <section id="coffee" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-ink text-center mb-12">Our Craft</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-lg shadow-md p-6">
            <Coffee className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-serif text-ink mb-2">Micro-Roastery</h3>
            <p className="text-muted">Expertly roasted beans, sourced ethically and brewed with precision.</p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6">
            <Utensils className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-serif text-ink mb-2">Homemade Bites</h3>
            <p className="text-muted">Fresh, simple, and delicious food prepared daily to pair with your brew.</p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6">
            <Home className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-serif text-ink mb-2">Heritage Space</h3>
            <p className="text-muted">Relax in our historic Lebanese house—a quiet sanctuary in the middle of the city.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
