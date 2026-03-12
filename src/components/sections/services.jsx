export const Services = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Visual Mockup Option",
      description:
        "Start by either sending in your own visual mockup for the website or having our team create one for you. This helps define the look, layout, and overall direction of your site before development begins.",
    },
    {
      number: "02",
      title: "Review the Mockup & Domain Suggestions",
      description:
        "Once the mockup is ready, you'll review the design along with domain suggestions. After everything looks right and you give confirmation, the developer can begin building your website.",
    },
    {
      number: "03",
      title: "Approve the Final Website",
      description:
        "When the site is complete, you'll view the final product through a Zoom call or a video message walkthrough. After your final confirmation, the website is published and ready to go live.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20 bg-white text-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Service Process
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          A simple step-by-step process designed to make launching your website
          clear, smooth, and professional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-100 bg-slate-50 p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="text-blue-600 text-sm font-semibold tracking-widest mb-3">
                STEP {step.number}
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-4">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};