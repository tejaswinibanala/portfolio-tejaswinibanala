import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, Cloud } from 'lucide-react';
import Logo from "../assets/img5.jpg"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-20 px-4 pb-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Tejaswini Banala
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 mb-8"
            >
              Java Full-Stack Developer(Springboot | React)
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center md:justify-start space-x-6"
            >
              <SocialLink href="https://github.com/tejaswinibanala" icon={<Github />} />
              <SocialLink
                href="https://www.linkedin.com/in/b-tejaswini/"
                icon={<Linkedin />}
              />
              <SocialLink
                href="mailto:tejaswinibanala28@gmail.com"
                icon={<Mail />}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1 max-w-md"
          >
            <img
              src={Logo}
              alt="Tejaswini Banala"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <SkillCard
            icon={<Code className="w-8 h-8" />}
            title="Frontend Development"
            skills={['React', 'TypeScript', 'Angular', 'Tailwind CSS']}
          />
          <SkillCard
            icon={<Database className="w-8 h-8" />}
            title="Backend Development"
            skills={['Java', 'Spring Boot', 'Node.js', 'MongoDB']}
          />
          <SkillCard
            icon={<Cloud className="w-8 h-8" />}
            title="Cloud & DevOps"
            skills={['AWS', 'Docker', 'Kubernetes', 'CI/CD']}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCard = ({ icon, title, skills }: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-purple-600 transition-colors"
  >
    {icon}
  </a>
);

export default Home;