import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../hooks/use-toast';
import { mockData } from '../../data/mockData';

const ContactSection = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const { contactInfo } = mockData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- Start of API Integration ---
    
    const backendUrl = 'http://127.0.0.1:8000/api/contact-messages'; // Or your deployed backend URL

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might need 'Access-Control-Allow-Origin' or other CORS headers on the server side
          // but for this simple setup, FastAPI's CORSMiddleware handles it.
        },
        body: JSON.stringify({
          sender_name: formData.name, // Map 'name' to 'sender_name' for backend
          sender_email: formData.email, // New field for email
          subject: formData.subject,
          content: formData.message    // Map 'message' to 'content' for backend
        })
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        console.log('Backend response:', result); // Log the response from your backend

        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form on success
      } else {
        const errorData = await response.json();
        toast({
          title: "Failed to send message!",
          description: errorData.detail || "Something went wrong on the server.",
          variant: "destructive", // Add a destructive variant for error toasts
        });
        console.error('Backend error:', errorData);
      }
    } catch (error) {
      console.error('Network or API call error:', error);
      toast({
        title: "Network error!",
        description: "Could not connect to the backend. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // Always reset submission state
    }
      
    // --- End of API Integration ---
  };

  const contactLinks = [
    {
      name: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: '📧',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      icon: '📱',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      name: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: contactInfo.linkedin,
      icon: '💼',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'GitHub',
      value: 'View my work',
      href: contactInfo.github,
      icon: '🐙',
      color: 'from-yellow-600 to-yellow-800'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              Let's Connect! 🤝
            </span>
          </h2>
          <p className="text-lg text-yellow-200 max-w-2xl mx-auto">
            Ready to collaborate? Have a project in mind? Or just want to chat about DevOps, ML, and Cloud?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-8">Get in Touch</h3>

            <div className="space-y-6">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target={contact.name === 'LinkedIn' || contact.name === 'GitHub' ? '_blank' : undefined}
                  rel={contact.name === 'LinkedIn' || contact.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="interactive-card flex items-center p-4 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-300">{contact.name}</div>
                    <div className="text-sm text-yellow-200/80">{contact.value}</div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-yellow-400">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 interactive-card p-6 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90"
            >
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                {[
                  'Fast response time (usually within 24 hours)',
                  'Collaborative approach to problem-solving',
                  'Expertise in DevOps, ML, and Cloud technologies',
                  'Always eager to learn and explore new solutions'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-500 mr-2 mt-1">✦</span>
                    <span className="text-sm text-yellow-200">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="interactive-card p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/95 via-black to-gray-800/95">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-yellow-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-yellow-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-yellow-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="interactive-button w-full py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2" />
                        Sending...
                      </div>
                    ) : (
                      '🚀 Send Message'
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-yellow-500/20"
        >
          <p className="text-yellow-200/60">
            © 2024 Valluru Yashwanth Reddy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;