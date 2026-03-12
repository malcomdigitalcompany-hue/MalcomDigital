export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white text-black"
    >

        <div className="text-center z-10 px-4">
          {/* Headline */}
<h1 className="mb-10 text-5xl font-bold leading-[1.15] md:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
  Malcom Digital
</h1>

          {/* Subheadline */}
          <p className="text-black-300 text-lg mb-8 max-w-2xl mx-auto">
            We build modern, mobile-friendly websites for local businesses fast.
            Perfect for restaurants, barbers, gyms, and small businesses that want
            to look professional and get more calls, customers, and bookings.
          </p>

          {/* Quick value bullets (optional but really helps conversions) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="text-sm text-black-300 border border-blue-600/40 px-4 py-2 rounded-full">
              ✅ 3-day delivery
            </span>
            <span className="text-sm text-black-300 border border-blue-600/40 px-4 py-2 rounded-full">
              ✅ $300 flat rate
            </span>
            <span className="text-sm text-black-300 border border-blue-600/40 px-4 py-2 rounded-full">
              ✅ $50–$100/mo maintenance
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(38,38,220,0.4)]"
            >
              More Information
            </a>
          </div>
        </div>
    </section>
  );
};