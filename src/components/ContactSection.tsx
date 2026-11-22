import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SkylinePortalIllustration } from './SpiderIllustrations';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#070B14]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0D1424] rounded-2xl border border-slate-800 p-6 sm:p-8"
          >
            <p className="text-sm font-medium text-[#38BDF8] mb-2">Get in Touch</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
              style={{ textWrap: 'balance' }}
            >
              Let&apos;s Create Something Amazing!
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7">
              Have a student project idea, visual editing collaboration, or internship
              opportunity? Send a message below or reach out directly via{' '}
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-medium text-[#F43F5E] hover:underline"
              >
                {PROFILE.email}
              </a>
              .
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#111A2E] border border-slate-700 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-50">
                      Message Received, {name}!
                    </h3>
                    <p className="text-sm text-slate-300 mt-1">
                      Thanks for reaching out. You can also send this directly through your
                      email app to ensure instant delivery.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      `Portfolio Inquiry from ${name}`
                    )}&body=${encodeURIComponent(message)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#E11D48] rounded-lg hover:bg-[#BE123C] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-slate-200 bg-[#070B14] border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Aarav Sharma"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 bg-[#070B14] border border-slate-700/90 rounded-xl focus:outline-none focus:border-[#38BDF8] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 bg-[#070B14] border border-slate-700/90 rounded-xl focus:outline-none focus:border-[#38BDF8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, event, or idea..."
                    className="w-full px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 bg-[#070B14] border border-slate-700/90 rounded-xl focus:outline-none focus:border-[#38BDF8] transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#E11D48] rounded-xl hover:bg-[#BE123C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1424] focus-visible:ring-[#F43F5E]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-xs font-medium text-slate-400 mb-3">Connect Elsewhere</p>
              <div className="flex flex-wrap items-center gap-3">
                {PROFILE.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-[#070B14] border border-slate-800 rounded-xl hover:border-[#38BDF8] hover:text-white transition-colors"
                  >
                    {getSocialIcon(social.id)}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skyline Portal Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#0D1424] rounded-2xl border border-slate-800 p-8 flex flex-col items-center text-center"
          >
            <SkylinePortalIllustration isSent={submitted} />

            <div className="mt-4 max-w-xs">
              <h3 className="font-display text-lg font-bold text-slate-50 mb-1">
                {submitted ? 'Signal Launched!' : 'Skyline Portal'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {submitted
                  ? 'Your message swung right across the skyline. Looking forward to connecting soon!'
                  : 'Open to internships, campus visual editing collaborations, and AI/ML study groups at GLA University.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
