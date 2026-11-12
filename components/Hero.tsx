export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800')] bg-cover bg-center opacity-70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-ink mb-4">Slow Coffee in a Fast City.</h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">Experience authentic specialty coffee in the heart of Beirut.</p>
      </div>
    </section>
  );
}
