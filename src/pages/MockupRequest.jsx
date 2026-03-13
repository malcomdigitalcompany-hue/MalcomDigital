import { useState } from "react";

export const MockupRequest = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    style: "",
    colors: "",
    pages: [],
    examples: "",
    notes: "",
    name: "",
    email: "",
  });

  const pageOptions = ["Home", "About", "Services", "Gallery", "Contact"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (page) => {
    setFormData((prev) => ({
      ...prev,
      pages: prev.pages.includes(page)
        ? prev.pages.filter((p) => p !== page)
        : [...prev.pages, page],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-4 text-center text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Request a Free Mockup
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
          Fill out a few details about your business and website goals so I can
          create a mockup that matches your vision.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-blue-100 bg-slate-50 p-8 shadow-sm"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Your business name"
              className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Business Type
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select one</option>
              <option value="restaurant">Restaurant</option>
              <option value="barber">Barber</option>
              <option value="gym">Gym</option>
              <option value="real-estate">Real Estate</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Preferred Style
            </label>
            <select
              name="style"
              value={formData.style}
              onChange={handleChange}
              className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select a style</option>
              <option value="clean-minimal">Clean & Minimal</option>
              <option value="bold-modern">Bold & Modern</option>
              <option value="luxury">Luxury</option>
              <option value="simple-professional">Simple & Professional</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Preferred Colors
            </label>
            <input
              type="text"
              name="colors"
              value={formData.colors}
              onChange={handleChange}
              placeholder="Blue, black, white, gold, etc."
              className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-blue-700">
              Pages Needed
            </label>
            <div className="flex flex-wrap gap-3">
              {pageOptions.map((page) => (
                <label
                  key={page}
                  className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={formData.pages.includes(page)}
                    onChange={() => handleCheckboxChange(page)}
                  />
                  {page}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Example Websites You Like
            </label>
            <textarea
              name="examples"
              value={formData.examples}
              onChange={handleChange}
              rows={4}
              placeholder="Paste links or describe websites you like"
              className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Extra Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Anything else I should know about your vision?"
              className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-blue-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-blue-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.25)]"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};