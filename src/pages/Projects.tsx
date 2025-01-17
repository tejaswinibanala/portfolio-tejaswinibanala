import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import  cinema_poster from '../assets/cinema_poster.webp';
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-8"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
      <ProjectCard
          title="Cinemate"
          description="Discover movies effortlessly with a clean, responsive interface and real-time search capabilities."
          image= {cinema_poster}
          technologies={['React', 'JavaScript', 'TailwindCSS', 'REST APIs']}
          points={[
            "Developed a responsive user interface for searching and exploring movies",
            "Integrated a third-party movie API to fetch real-time movie details",
            "Styled the application using Tailwind CSS for clean and modern design"
          ]}
          githubUrl="https://github.com/tejaswinibanala/cinemate"
          liveUrl="https://tb-cinemate.netlify.app/"
        />
        <ProjectCard
          title="Building Management System"
          description="A comprehensive system for managing building operations and maintenance."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
          technologies={['HTML', 'CSS', 'Bootstrap', 'Java', 'Hibernate', 'MySQL']}
          points={[
            "Developed responsive front-end interfaces using HTML, CSS, and Bootstrap",
            "Implemented backend logic with Java and Hibernate for efficient data management",
            "Designed and managed MySQL database schema, performed unit testing"
          ]}
          githubUrl="https://github.com/tejaswinibanala/Building-Management-System"
          liveUrl=""
        />

        <ProjectCard
          title="Chat Application"
          description="Real-time chat application with modern features and secure authentication."
          image="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
          technologies={['Java', 'Android SDK', 'Firebase']}
          points={[
            "Implemented user authentication and message handling using Firebase",
            "Designed user interfaces for viewing chat history and real-time messaging",
            "Enhanced data security through robust authentication mechanisms"
          ]}
          githubUrl=""
          liveUrl=""
        />

        
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, image, technologies, points, githubUrl, liveUrl }: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  points: string[];
  githubUrl: string;
  liveUrl: string;
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <ul className="space-y-2 mb-4">
        {points.map((point, index) => (
          <li key={index} className="text-gray-700">• {point}</li>
        ))}
      </ul>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
        >
          <Github size={20} />
          <span>Code</span>
        </a>
        {liveUrl.length>0?<a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
        >
          <ExternalLink size={20} />
          <span>Live Demo</span>
        </a>:""}
      </div>
    </div>
  </motion.div>
);

export default Projects;