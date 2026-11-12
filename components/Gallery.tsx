export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-ink text-center mb-12">A Moment at Kalei</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative h-64 bg-stone-200 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"
              alt="Curated views of our coffee brewing process and the cozy interior of our Mar Mikhael space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 bg-stone-200 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
              alt="Curated views of our coffee brewing process and the cozy interior of our Mar Mikhael space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 bg-stone-200 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"
              alt="Curated views of our coffee brewing process and the cozy interior of our Mar Mikhael space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
