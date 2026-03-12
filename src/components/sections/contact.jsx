import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-white text-slate-900"
    >
      <div className="w-full max-w-2xl px-4">
        <div className="rounded-2xl border border-blue-100 bg-slate-50 p-8 shadow-sm">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-center text-slate-600">
            Ready to launch your website or have questions about the process?
            Send a message and I’ll get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-blue-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-blue-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="[email protected]"
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-blue-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your business and the type of website you need..."
                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-slate-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};