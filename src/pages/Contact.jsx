import { useState, useRef } from "react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser"; // npm install emailjs-com

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef(null);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_6tf3y58",     // Replace with your EmailJS service ID
        "template_qx2yedm",    // Replace with your EmailJS template ID
        formRef.current,
        "Zh6ZKtLQzzMCTeJQK"      // Replace with your EmailJS public key
      );

      toast({
  title: "📩 Message received!",
  description: "Thanks for reaching out — I’ll get back to you soon. Until then, keep building the future 🚀",
  duration: 5000, // 5 seconds
});

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-black bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-breathe">
      <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent animate-glow">
          Contact the Future
        </h2>
        <p className="text-sm md:text-lg text-gray-400 mt-4 max-w-xl mx-auto animate-fadeInUp">
          Collaborate with innovation. Let's build extraordinary together.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 animate-fadeInUp">
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 bg-opacity-10 backdrop-blur border border-cyan-400/20 rounded-xl shadow-neon animate-float">
          {['name', 'email'].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full px-4 py-3 bg-black bg-opacity-20 border border-cyan-500 rounded-md text-cyan-300 placeholder-cyan-500 focus:outline-none focus:ring-2 focus:ring-pink-400 neon-input"
              />
            </div>
          ))}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-black bg-opacity-20 border border-cyan-500 rounded-md text-cyan-300 placeholder-cyan-500 focus:outline-none focus:ring-2 focus:ring-pink-400 neon-input"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-300 py-3 px-6 rounded-full text-black font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-glow"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="space-y-6 text-cyan-200 animate-fadeInRight">
          <div>
            <h4 className="text-xl font-bold text-pink-400">Phone</h4>
            <a href="tel:+919972146948" className="text-sm hover:text-pink-300 transition">
              +91 99721 46948
            </a>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-400">Email</h4>
            <a href="mailto:kiranms880@gmail.com" className="text-sm break-words hover:text-yellow-300 transition">
              kiranms880@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-400">Location</h4>
            <a
              href="https://maps.app.goo.gl/PzptM8WYe81DoeD97?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cyan-300 transition"
            >
              Hassan, Karnataka, India
            </a>
          </div>
          <div className="pt-6 border-t border-cyan-700/20">
            <p className="text-sm text-gray-400 mb-3">
              Open to freelance & full-time futuristic adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
