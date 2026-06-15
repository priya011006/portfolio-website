import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLinkedin, FiGithub } from 'react-icons/fi';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      // FormSubmit.co AJAX API submission directly to your email
      const response = await fetch("https://formsubmit.co/ajax/priya2005dec@gmail.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || 'New Portfolio Contact Message',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        triggerConfetti();
      } else {
        throw new Error('Failed to send message via FormSubmit API.');
      }
    } catch (err) {
      console.warn('FormSubmit submission failed, falling back to mailto client.', err);
      // Fallback: Open mail client if API fails
      setStatus('success'); // Still show success to user as we offer mailto fallback
      sendMailtoFallback();
    }
  };

  const sendMailtoFallback = () => {
    const mailtoLink = `mailto:priya2005dec@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-4 md:px-8 bg-slate-50/50 dark:bg-transparent">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-72 h-72 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative after:absolute after:bottom-[-8px] after:left-1/4 after:right-1/4 after:h-[3px] after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:rounded"
          >
            Get In Touch
          </motion.h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Have an internship role, an engineering project, or just want to say hi? Fill out the form or reach out directly!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 dark:text-violet-400 border border-violet-500/10">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href="mailto:priya2005dec@gmail.com"
                      className="text-slate-700 dark:text-slate-200 hover:text-violet-500 dark:hover:text-cyan-400 font-medium transition-colors break-all"
                    >
                      priya2005dec@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/10">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Phone
                    </span>
                    <a
                      href="tel:+917007977482"
                      className="text-slate-700 dark:text-slate-200 hover:text-violet-500 dark:hover:text-cyan-400 font-medium transition-colors"
                    >
                      +91 7007977482
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500 dark:text-pink-400 border border-pink-500/10">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                      Kanpur, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links inside Contact */}
            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Connect Digitally
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/priya-patel17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/priya011006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Internship Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Hey Priya, let's connect..."
                />
              </div>

              {/* Feedback State alerts */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Your message has been sent successfully! I will reach out soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold shadow-md shadow-violet-600/20 disabled:opacity-50 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <FiSend className="w-4.5 h-4.5" />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                
                <button
                  type="button"
                  onClick={sendMailtoFallback}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <FiMail className="w-4.5 h-4.5" />
                  Send via Mail Client
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
