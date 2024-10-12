import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-900">
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
    <nav className="container mx-auto flex justify-between items-center px-6">
    <h1 className="text-2xl font-bold tracking-wide">Kartik Goel</h1>
    <ul className="flex space-x-4">
    <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
    <li><a href="#employment" className="hover:text-blue-500 transition duration-300">Employment</a></li>
    <li><a href="#skills" className="hover:text-blue-500 transition duration-300">Skills</a></li>
    <li><a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
    </ul>
    </nav>
    </header>

    <main className="container mx-auto px-6 py-12">
    <section id="about" className="my-12 text-center">
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <p className="text-lg leading-relaxed max-w-2xl mx-auto">
    Versatile Software Developer with track record at multinational firms, committed to delivering innovative solutions leveraging diverse tech stacks.
    </p>
    </section>


    <section id="skills" className="my-12">
    <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1 space-y-8">

    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Programming Languages</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Python</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Java</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">C</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">JavaScript</span>
    </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">CI/CD</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Docker</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Kubernetes</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">AWS</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Maven</span>
    </div>
    </div>

    </div>

    <div className="lg:col-span-1 space-y-8">

    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Libraries & Frameworks</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Django</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Spring</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">React</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Tailwind</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">RabbitMQ</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">jBPM</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Numpy + Pandas + Scikit-Learn</span>
    </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Databases</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">SQL</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">MongoDB</span>
    </div>
    </div>

    </div>


    <div className="lg:col-span-1 space-y-8">

    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Operating Systems</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Windows</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Linux</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">BSD</span>
    </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Others</h3>
    <div className="flex flex-wrap justify-center space-x-4">
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Matplotlib</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">PowerBI</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Tableau</span>
    <span className="bg-white shadow-md rounded-full px-4 py-2 m-2">Jupyter Notebook</span>
    </div>
    </div>

    </div>

    </div>
    </section>



    <section id="employment" className="my-12">
    <h2 className="text-4xl font-bold mb-6 text-center">Employment History</h2>
    <div className="space-y-6">

    <div className="bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-2xl font-semibold">HP Enterprise (Juniper Networks)</h3>
    <p className="text-l font-semibold">Software Engineer II | Developer Tools Team</p>
    <h4 className="text-sm text-gray-600">Nov 2022 - July 2024 | Bangalore, India</h4>
    <ul>
    <li className="mt-2">Developed and maintained the internal Bug Tracking tool (the Rule Engine, the Notification system and Business Logic layer).</li>
    <li className="mt-2">Developed a Chatbot for addressing frequent user queries.</li>
    </ul>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-2xl font-semibold">JP Morgan Chase & Co.</h3>
    <p className="text-l font-semibold">Software Engineer | Trade & Risk Team</p>
    <h4 className="text-sm text-gray-600">July 2021 - Nov 2022 | Bangalore, India</h4>
    <ul>
    <li className="mt-2">Applied statistical measures for monitoring and flagging.</li>
    <li className="mt-2">Migrated legacy code-base (From Python 2 to Python 3) & rewrote the Reconciliation engine.</li>
    </ul>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-2xl font-semibold">JP Morgan Chase & Co.</h3>
    <p className="text-l font-semibold">Software Intern | Reconciliations Team</p>
    <h4 className="text-sm text-gray-600">Jan 2020 - Jun 2020 | Mumbai, India</h4>
    <ul>
    <li className="mt-2">Exposed to various industry standards such as Version Control, CI/CD, Design Patterns etc.</li>
    <li className="mt-2">Developed a File Watcher and its corresponding ETL pipeline.</li>
    </ul>
    </div>

    </div>
    </section>

    <section id="Education" className="my-12">
    <h2 className="text-4xl font-bold mb-6 text-center">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Virginia Tech</h3>
    <p className="text-l font-semibold">MS in Computer Engineering | 2024 - 2026</p>
    <p className="mt-2">Blacksburg, Virginia, United States</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Punjab Engineering College</h3>
    <p className="text-l font-semibold">BE in Computer Science & Engg | 2017 - 2021</p>
    <p className="mt-2">Chandigarh, India</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-semibold">Delhi Private School</h3>
    <p className="text-l font-semibold">Central Board of Secondary Education</p>
    <p className="mt-2">Sharjah, United Arab Emirates</p>
    </div>
    </div>
    </section>

    <section id="contact" className="my-12 text-center">
    <h2 className="text-4xl font-bold mb-6">Contact</h2>
    <p className="text-lg mb-6">Feel free to reach out to me via email or follow me on social media!</p>
    <div className="flex justify-center space-x-6 text-2xl">
    <a href="https://github.com/kargogit" className="hover:text-gray-700 transition duration-300"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/kartikg-profile" className="hover:text-blue-700 transition duration-300"><FaLinkedin /></a>
    <a href="mailto:kartikgoel@hotmail.com" className="hover:text-red-500 transition duration-300"><FaEnvelope /></a>
    </div>
    </section>
    </main>

    <footer className="bg-white shadow-md py-4">
    <div className="container mx-auto text-center text-sm">
    © 2024 My Portfolio. All rights reserved.
    </div>
    </footer>
    </div>
  );
}

export default App;
