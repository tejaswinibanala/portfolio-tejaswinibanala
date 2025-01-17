import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const mailtoUrl = `mailto:tejaswinibanala28@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4 pb-10 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            I'm always interested in hearing about new opportunities and collaborations.
            Feel free to reach out through any of the following channels:
          </p>
          <div className="space-y-4">
            <ContactItem
              icon={<Phone />}
              label="Phone"
              value="(806) 730-3721"
              href="tel:+18067303721"
            />
            <ContactItem
              icon={<Mail />}
              label="Email"
              value="tejaswinibanala28@gmail.com"
              href="mailto:tejaswinibanala28@gmail.com"
            />
            <ContactItem
              icon={<Linkedin />}
              label="LinkedIn"
              value="Connect on LinkedIn"
              href="https://www.linkedin.com/in/b-tejaswini/"
            />
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="form-input"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const ContactItem = ({ icon, label, value, href }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="text-purple-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg text-gray-900">{value}</p>
    </div>
  </motion.a>
);

export default Contact;