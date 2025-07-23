import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';

const ContactSection = () => {
  const { isDark } = useTheme();
  const { personalInfo } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: personalInfo.contact.email,
      action: () => window.open(`mailto:${personalInfo.contact.email}`)
    },
    {
      icon: '📞',
      label: 'Phone',
      value: personalInfo.contact.phone,
      action: () => window.open(`tel:${personalInfo.contact.phone}`)
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      action: () => window.open(personalInfo.contact.linkedin, '_blank')
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Check out my repos',
      action: () => window.open(personalInfo.contact.github, '_blank')
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect 📬
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to build something amazing together?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Get In Touch
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    boxShadow: isDark 
                      ? "0 10px 30px rgba(59, 130, 246, 0.3)" 
                      : "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' 
                      : 'bg-gray-50 border border-gray-200 hover:border-blue-400'
                  }`}
                  onClick={method.action}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                      isDark ? 'bg-blue-600' : 'bg-blue-500'
                    } text-white`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {method.label}
                      </h4>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className={`p-6 rounded-xl ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-gray-700' 
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
              }`}>
                <h4 className={`text-lg font-semibold mb-4 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Response Time
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      &lt; 24h
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Email Response
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Same Day
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Call Response
                    </div>
                  </div>
                </div>
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
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Tell me about your project, opportunity, or just say hi!"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🚀 Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-300 dark:border-gray-700"
        >
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Built with ❤️ using React, Tailwind CSS, and Framer Motion
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            {[
              { name: 'LinkedIn', icon: '🔗', url: personalInfo.contact.linkedin },
              { name: 'GitHub', icon: '🐙', url: personalInfo.contact.github },
              { name: 'Email', icon: '📧', url: `mailto:${personalInfo.contact.email}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;