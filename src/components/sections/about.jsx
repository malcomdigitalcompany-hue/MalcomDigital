
export const About = () => {
  const highlights = [
    "Modern, mobile-friendly design",
    "Fast and clear communication",
    "Built for small businesses",
    "Simple launch process",
    "Professional branding-focused websites",
    "Direct one-on-one collaboration",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-white text-slate-900"
    >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            About Malcom Digital
          </h2>

          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Malcom Digital is a web design and development brand focused on
            helping small businesses build a stronger online presence through
            clean, modern, and professional websites.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-slate-50 p-8 shadow-sm hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Built with a personal approach
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Malcom Digital is independently run, which means every project
                  is handled with direct attention, clear communication, and a
                  strong focus on quality. Clients work directly with me from
                  the planning stage to the final launch.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The goal is simple: create websites that help small businesses
                  look professional, build trust, and attract more customers
                  online. Whether it’s a landing page or a full business site,
                  every build is designed to be modern, responsive, and easy to
                  use.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  What sets Malcom Digital apart
                </h3>
                <div className="flex flex-wrap gap-3">
                  {highlights.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To help small businesses launch websites that feel polished,
                trustworthy, and aligned with their brand without making the
                process overwhelming.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Focus
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Malcom Digital specializes in business websites for brands that
                want a clean online presence, better presentation, and a site
                that works well across desktop and mobile.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};