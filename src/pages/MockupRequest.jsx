import { useState } from "react";
import emailjs from "@emailjs/browser";

export const MockupRequest = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    customBusinessType: "",
    sitePlan: "",
    style: "",
    colors: "",
    pages: [],
    examples: "",
    notes: "",
    name: "",
    email: "",
  });

  const [customPage, setCustomPage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_MOCKUP_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const handleAddCustomPage = () => {
    const trimmedPage = customPage.trim();
    if (!trimmedPage) return;

    const normalizedPage =
      trimmedPage.charAt(0).toUpperCase() + trimmedPage.slice(1);

    if (formData.pages.includes(normalizedPage)) {
      setCustomPage("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      pages: [...prev.pages, normalizedPage],
    }));

    setCustomPage("");
  };

  const handleRemovePage = (pageToRemove) => {
    setFormData((prev) => ({
      ...prev,
      pages: prev.pages.filter((page) => page !== pageToRemove),
    }));
  };

  const handlePlanSelect = (plan) => {
    setFormData((prev) => ({
      ...prev,
      sitePlan: plan,
    }));
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      businessType: "",
      customBusinessType: "",
      sitePlan: "",
      style: "",
      colors: "",
      pages: [],
      examples: "",
      notes: "",
      name: "",
      email: "",
    });
    setCustomPage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const missing = [
      !SERVICE_ID && "VITE_EMAILJS_SERVICE_ID",
      !TEMPLATE_ID && "VITE_EMAILJS_MOCKUP_TEMPLATE_ID",
      !PUBLIC_KEY && "VITE_EMAILJS_PUBLIC_KEY",
    ].filter(Boolean);

    if (missing.length > 0) {
      console.log("Missing EmailJS config:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
        missing,
      });
      setStatus(`Missing config: ${missing.join(", ")}`);
      setIsSending(false);
      return;
    }

    const resolvedBusinessType =
      formData.businessType === "other"
        ? formData.customBusinessType.trim()
        : formData.businessType;

    const templateParams = {
      user_name: formData.name.trim(),
      user_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      business_name: formData.businessName.trim(),
      business_type: resolvedBusinessType,
      site_plan: formData.sitePlan,
      style: formData.style,
      colors: formData.colors.trim(),
      pages: formData.pages.join(", "),
      examples: formData.examples.trim(),
      notes: formData.notes.trim(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("Mockup request sent successfully.");
      resetForm();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus(
        error?.text || error?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-4 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-center text-4xl font-bold text-transparent">
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
              required
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
              required
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

          {formData.businessType === "other" && (
            <div>
              <label className="mb-2 block text-sm font-medium text-blue-700">
                Enter Business Type
              </label>
              <input
                type="text"
                name="customBusinessType"
                value={formData.customBusinessType}
                onChange={handleChange}
                placeholder="Ex: Dentist, Photographer, Roofing Company"
                required
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          )}

          <div>
            <label className="mb-3 block text-sm font-medium text-blue-700">
              Website Plan
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => handlePlanSelect("Non-ecommerce - $30/month")}
                className={`rounded-2xl border p-5 text-left transition ${
                  formData.sitePlan === "Non-ecommerce - $30/month"
                    ? "border-blue-600 bg-blue-50 ring-2 ring-blue-200"
                    : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Non-ecommerce
                  </h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    $30/mo
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Best for service businesses, portfolios, restaurants, and
                  informational websites.
                </p>
              </button>

              <button
                type="button"
                onClick={() => handlePlanSelect("Ecommerce - $50/month")}
                className={`rounded-2xl border p-5 text-left transition ${
                  formData.sitePlan === "Ecommerce - $50/month"
                    ? "border-blue-600 bg-blue-50 ring-2 ring-blue-200"
                    : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Ecommerce
                  </h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    $50/mo
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Best for businesses that need online ordering, product
                  listings, and checkout functionality.
                </p>
              </button>
            </div>

            {!formData.sitePlan && (
              <p className="mt-2 text-sm text-slate-500">
                Select the type of website you want.
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-blue-700">
              Preferred Style
            </label>
            <select
              name="style"
              value={formData.style}
              onChange={handleChange}
              required
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

            <div className="mb-4 flex flex-wrap gap-3">
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

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={customPage}
                onChange={(e) => setCustomPage(e.target.value)}
                placeholder="Add a custom page (ex: Pricing, FAQ, Testimonials)"
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={handleAddCustomPage}
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Add Page
              </button>
            </div>

            {formData.pages.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {formData.pages.map((page) => (
                  <div
                    key={page}
                    className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-2 text-sm text-blue-800"
                  >
                    <span>{page}</span>
                    <button
                      type="button"
                      onClick={() => handleRemovePage(page)}
                      className="font-bold text-blue-700 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
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
                required
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
                required
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSending || !formData.sitePlan}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Submit Request"}
            </button>
          </div>

          {status && (
            <p className="text-center text-sm text-slate-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};