import { motion } from 'framer-motion';
import { Award, Book, Code2, Coffee } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4 pb-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700">
          As a Full-Stack Developer with a Master’s in Computer Science from Texas Tech University, I bring expertise in both front-end and back-end development. My experience at Tata Consultancy Services has honed my skills in React, TypeScript, and Redux, enabling me to create responsive, user-friendly interfaces.


          </p>
          <p className="text-lg text-gray-700">
          On the back-end, I have experience with Java, Spring Boot, and microservices architecture, as well as relational and NoSQL databases like PostgreSQL and MongoDB. I’ve worked with Docker, Kubernetes, and CI/CD pipelines to enhance deployment processes and ensure smooth integration. Driven by problem-solving and collaborative work, I’m eager to contribute to innovative projects in Agile environments.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
        >
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <div className="space-y-1">
          <h4 className="text-xl font-medium text-purple-600">Texas Tech University</h4>
          <p className="text-gray-600 text-sm">Master of Science, Computer Science</p>
          <p className="text-gray-500 text-sm">January 2023–December 2024</p>
          <p className="text-gray-600 text-sm">GPA: 3.54</p>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <h5 className="font-medium">Key Skills Gained:</h5>
          <p>- Object-Oriented Programming, Data Structures, Software Engineering.</p>
          <h5 className="font-medium">Relevant Coursework:</h5>
          <p>- Advanced Algorithms, Cloud Computing, Machine Learning.</p>
          <h5 className="font-medium">Notable Projects:</h5>
          <p>- Developed a full-stack web application using React and Spring Boot.</p>
        </div>
</motion.div>

      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        <StatCard
          icon={<Code2 className="w-6 h-6" />}
          number="2+"
          label="Years of Experience"
        />
        <StatCard
          icon={<Coffee className="w-6 h-6" />}
          number="10+"
          label="Projects Completed"
        />
        
        <StatCard
          icon={<Book className="w-6 h-6" />}
          number="3.54"
          label="GPA"
        />
      </motion.div>
    </motion.div>
  );
};

const StatCard = ({ icon, number, label }: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <div className="text-purple-600 mb-2 flex justify-center">{icon}</div>
    <h4 className="text-2xl font-bold text-gray-900 mb-1">{number}</h4>
    <p className="text-gray-600 text-sm">{label}</p>
  </motion.div>
);

export default About;