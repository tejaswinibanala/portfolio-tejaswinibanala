import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-8">
        <ExperienceCard
          title="Full-Stack Java Developer"
          company="Tata Consultancy Services"
          period="April 2021–December 2022"
          location="Hyderabad, Telangana"
          achievements={[
            "Developed web applications and APIs with Java and React, focusing on scalability and real-time communication.",
            "Collaborated in Agile teams to deliver customer-facing features, enhancing support and operations.",
            "Ensured data integrity and reduced update downtime by 30% through database optimization (MongoDB and PostgreSQL).",
            "Led JIRA adoption, cutting ticket handling time by 2 days and streamlining project management.",
            "Implemented a microservices architecture with Docker and Kubernetes, decreasing deployment time by 30%."
          ]}
        />
        <ExperienceCard
          title="Software Engineering Intern"
          company="Smart Bridge Pvt Solutions"
          period="June 2020–February 2021"
          location="Hyderabad, Telangana"
          achievements={[
            "Enhanced system performance by 20% through contributions to systems architecture design and implementation.",
            "Engineered Angular components and applied advanced testing methods across 5 major projects.",
            "Automated development processes using CI/CD pipelines, improving code quality by 30%.",
            "Boosted coding efficiency by 20% through participation in software development workshops."
          ]}
        />
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ title, company, period, location, achievements }: {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="bg-white rounded-lg shadow-lg p-6"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-xl text-purple-600">{company}</p>
      </div>
      <div className="text-right text-gray-600">
        <div className="flex items-center justify-end gap-2">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
        <div className="flex items-center justify-end gap-2 mt-1">
          <Briefcase size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-gray-700">• {achievement}</li>
      ))}
    </ul>
  </motion.div>
);

export default Experience;