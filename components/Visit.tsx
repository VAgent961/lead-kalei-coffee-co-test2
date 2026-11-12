import { MapPin } from 'lucide-react';

export default function Visit() {
  return (
    <section id="visit" className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-serif text-ink mb-6">Visit us in Mar Mikhael, Beirut</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Find us nestled in the heart of the neighborhood, near the historic stairs. We look forward to welcoming you for a cup.
        </p>
      </div>
    </section>
  );
}
