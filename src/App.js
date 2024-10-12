import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './styles.css';

const SECTIONS = ['about', 'employment', 'skills', 'education', 'contact'];

const SKILLS = [
  { category: 'Programming Languages', items: ['Python', 'Java', 'C', 'JavaScript'] },
  { category: 'CI/CD', items: ['Docker', 'Kubernetes', 'AWS', 'Maven'] },
  { category: 'Libraries & Frameworks', items: ['Django', 'Spring', 'React', 'Tailwind', 'RabbitMQ', 'jBPM', 'Numpy + Pandas + Scikit-Learn'] },
  { category: 'Databases', items: ['SQL', 'MongoDB'] },
  { category: 'Operating Systems', items: ['Windows', 'Linux', 'BSD'] },
  { category: 'Others', items: ['Matplotlib', 'PowerBI', 'Tableau', 'Jupyter Notebook'] }
];

const EMPLOYMENT_HISTORY = [
  {
    company: 'HP Enterprise (Juniper Networks)',
    position: 'Software Engineer II | Developer Tools Team',
    duration: 'Nov 2022 - July 2024 | Bangalore, India',
    responsibilities: [
      'Developed and maintained the internal Bug Tracking tool (the Rule Engine, the Notification system, and Business Logic layer).',
      'Developed a Chatbot for addressing frequent user queries.'
    ]
  },
  {
    company: 'JP Morgan Chase & Co.',
    position: 'Software Engineer | Trade & Risk Team',
    duration: 'July 2021 - Nov 2022 | Bangalore, India',
    responsibilities: [
      'Applied statistical measures for monitoring and flagging.',
      'Migrated legacy code-base (From Python 2 to Python 3) & rewrote the Reconciliation engine.'
    ]
  },
  {
    company: 'JP Morgan Chase & Co.',
    position: 'Software Intern | Reconciliations Team',
    duration: 'Jan 2020 - Jun 2020 | Mumbai, India',
    responsibilities: [
      'Exposed to various industry standards such as Version Control, CI/CD, Design Patterns etc.',
      'Developed a File Watcher and its corresponding ETL pipeline.'
    ]
  }
];

const EDUCATION = [
  { institution: 'Virginia Tech', degree: 'MS in Computer Engineering', duration: '2024 - 2026', location: 'Blacksburg, Virginia, United States' },
  { institution: 'Punjab Engineering College', degree: 'BE in Computer Science & Engg', duration: '2017 - 2021', location: 'Chandigarh, India' },
  { institution: 'Delhi Private School', degree: 'Central Board of Secondary Education', location: 'Sharjah, United Arab Emirates' }
];

const Footer = () => (
  <footer className="bg-white shadow-md py-4">
  <div className="container mx-auto text-center text-sm">© 2024 My Portfolio. All rights reserved.</div>
  </footer>
);

const Header = () => (
  <header className="bg-white shadow-md py-4 sticky top-0 z-50">
  <nav className="container mx-auto flex justify-between items-center px-6">
  <h1 className="text-2xl font-bold tracking-wide">Kartik Goel</h1>
  <ul className="flex space-x-4">
  {SECTIONS.map(section => (
    <li key={section}>
    <a href={`#${section}`} className="hover:text-blue-500 transition duration-300">{section.charAt(0).toUpperCase() + section.slice(1)}</a>
    </li>
  ))}
  </ul>
  </nav>
  </header>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="my-12">
  <h2 className="text-4xl font-bold mb-6 text-center">{title}</h2>
  {children}
  </section>
);

const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
  {children}
  </div>
);

const SkillsSection = () => (
  <Section id="skills" title="Skills">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {SKILLS.map(({ category, items }) => (
    <Card key={category}>
    <h3 className="text-2xl font-semibold">{category}</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    {items.map(item => (
      <span key={item} className="bg-white shadow-md rounded-full px-4 py-2 m-2">{item}</span>
    ))}
    </div>
    </Card>
  ))}
  </div>
  </Section>
);

const EmploymentSection = () => (
  <Section id="employment" title="Employment History">
  <div className="space-y-6">
  {EMPLOYMENT_HISTORY.map(({ company, position, duration, responsibilities }, index) => (
    <Card key={index}>
    <h3 className="text-2xl font-semibold">{company}</h3>
    <p className="text-l font-semibold">{position}</p>
    <h4 className="text-sm text-gray-600">{duration}</h4>
    <ul>
    {responsibilities.map((task, idx) => (
      <li key={idx} className="mt-2">{task}</li>
    ))}
    </ul>
    </Card>
  ))}
  </div>
  </Section>
);

const EducationSection = () => (
  <Section id="education" title="Education">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {EDUCATION.map(({ institution, degree, duration, location }, index) => (
    <Card key={index}>
    <h3 className="text-2xl font-semibold">{institution}</h3>
    <p className="text-l font-semibold">{degree}</p>
    {duration && <p className="mt-2">{duration}</p>}
    <p className="mt-2">{location}</p>
    </Card>
  ))}
  </div>
  </Section>
);

const ContactSection = () => (
  <Section id="contact" title="Contact">
  <p className="text-lg mb-6 text-center">Feel free to reach out to me via email or follow me on social media!</p>
  <div className="flex justify-center space-x-6 text-2xl">
  <a href="https://github.com/kargogit" className="hover:text-gray-700 transition duration-300"><FaGithub /></a>
  <a href="https://www.linkedin.com/in/kartikg-profile" className="hover:text-blue-700 transition duration-300"><FaLinkedin /></a>
  <a href="mailto:kartikgoel@hotmail.com" className="hover:text-red-500 transition duration-300"><FaEnvelope /></a>
  </div>
  </Section>
);

const App = () => (
  <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-900">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <Header />
    <main className="container mx-auto px-6 py-12">
    <Section id="about" title="About Me">
    <p className="text-lg leading-relaxed max-w-2xl mx-auto">
    Versatile Software Developer with a track record at multinational firms
    </p>
    </Section>
    <SkillsSection />
    <EmploymentSection />
    <EducationSection />
    <ContactSection />
    </main>
    <Footer />
    </div>
  );

export default App;
