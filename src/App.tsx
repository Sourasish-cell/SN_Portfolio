import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import * as echarts from 'echarts';
import Projects from './pages/Projects';

const App: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const option = {
                // Your chart options here
            };
            chart.setOption(option);
        }
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white font-sans">
                {/* Navbar */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-purple-950 to-black bg-opacity-90 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="flex space-x-12 items-center">
                            <Link to="/" className="text-white hover:text-purple-300 transition-colors">Home</Link>
                            <Link to="/projects" className="text-white hover:text-purple-300 transition-colors">Projects</Link>
                            <a
                                href="#contact-section"
                                onClick={e => {
                                    e.preventDefault();
                                    const contactSection = document.getElementById('contact-section');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        // If not on home page, navigate to home and scroll after render
                                        window.location.href = '/#contact-section';
                                    }
                                }}
                                className="text-white hover:text-purple-300 transition-colors"
                            >
                                Get In Touch
                            </a>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <a href="https://www.linkedin.com/in/sourasish-nath-b7b035202/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors cursor-pointer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a
                                href="https://medium.com/@souro400.nath"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-purple-300 transition-colors cursor-pointer relative group"
                            >
                                <i className="fab fa-medium text-xl"></i>
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Check out my blog posts
                                </span>
                            </a>
                            <a href="https://x.com/iamroyalSN" target="_blank"
                                rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors cursor-pointer">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={
                        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                            {/* Hero Section */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-32">
                                <div className="md:w-1/2">
                                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Sourasish Nath</h1>
                                    <p className="text-lg text-gray-300 mb-8 max-w-lg">
                                        Experienced Software Developer specializing in Python development, with expertise in Flask, React, and SQL.
                                        Passionate about creating efficient and scalable solutions through clean code and innovative approaches.
                                    </p>
                                    <Button>
                                        Let's get started <i className="fas fa-arrow-right ml-2"></i>
                                    </Button>
                                </div>
                                <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
                                    <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-purple-400 shadow-2xl">
                                        <img
                                            src="/sourasish2.png"
                                            alt="Sourasish Nath"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                                <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
                                    <div className="flex items-center mb-3">
                                        <i className="fas fa-envelope text-purple-400 text-xl mr-3"></i>
                                        <h3 className="text-lg font-semibold">Email</h3>
                                    </div>
                                    <a
                                        href="mailto:nathsourasish02@gmail.com"
                                        className="text-gray-300 hover:text-purple-300 transition-colors"
                                    >
                                        nathsourasish02@gmail.com
                                    </a>
                                </div>
                                <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
                                    <div className="flex items-center mb-3">
                                        <i className="fas fa-phone-alt text-purple-400 text-xl mr-3"></i>
                                        <h3 className="text-lg font-semibold">Phone</h3>
                                    </div>
                                    <a
                                        href="tel:+917003749906"
                                        className="text-gray-300 hover:text-purple-300 transition-colors"
                                    >
                                        +91 7003749906
                                    </a>
                                </div>
                                <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
                                    <div className="flex items-center mb-3">
                                        <i className="fas fa-map-marker-alt text-purple-400 text-xl mr-3"></i>
                                        <h3 className="text-lg font-semibold">Location</h3>
                                    </div>
                                    <p className="text-gray-300">Kolkata, India</p>
                                </div>
                                <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
                                    <div className="flex items-center mb-3">
                                        <i className="fab fa-github text-purple-400 text-xl mr-3"></i>
                                        <h3 className="text-lg font-semibold">GitHub</h3>
                                    </div>
                                    <a
                                        href="https://github.com/Sourasish-cell"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-purple-300 transition-colors"
                                    >
                                        github.com/Sourasish-cell
                                    </a>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="mb-24">
                                <h2 className="text-3xl font-bold mb-8 border-b border-purple-700 pb-2 inline-block">
                                    Technical Skills
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-6 text-purple-300">
                                            Programming Languages
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { name: "Python", level: 90 },
                                                { name: "JavaScript", level: 80 },
                                                { name: "SQL", level: 85 },
                                                { name: "HTML/CSS", level: 75 },
                                            ].map((skill, index) => (
                                                <div key={index}>
                                                    <div className="flex justify-between mb-1">
                                                        <span>{skill.name}</span>
                                                        <span>{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                        <div
                                                            className="bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-6 text-purple-300">
                                            Frameworks & Tools
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { name: "Flask", level: 85 },
                                                { name: "React", level: 80 },
                                                { name: "Git", level: 75 },
                                                { name: "Docker", level: 70 },
                                            ].map((skill, index) => (
                                                <div key={index}>
                                                    <div className="flex justify-between mb-1">
                                                        <span>{skill.name}</span>
                                                        <span>{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                        <div
                                                            className="bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Projects Section */}
                            <div className="mb-24">
                                <h2 className="text-3xl font-bold mb-8 border-b border-purple-700 pb-2 inline-block">
                                    Featured Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "Parkinson Detector",
                                            description:
                                                "A full-stack medical diagnosis solution using Flask and React. DNN has been mainly used for segmentation the disease. This web based model has been designed to successfully identify if patient's are affected by Parkinson's disease.",
                                            technologies: ["Python", "Flask", "React", "SQL", "Stripe"],
                                            image:
                                                "/parkinson.png",
                                        },
                                        {
                                            title: "Heart Movement Detection",
                                            description:
                                                "Interactive website for visualizing heart movement signals. The website has been designed to successfully identify if patient's are affected by heart movement disorders.",
                                            technologies: ["Python", "React", "D3.js", "REST API"],
                                            image:
                                                "/pulse-signal.png",
                                        },
                                        {
                                            title: "News Articles Website",
                                            description:
                                                "Newsjackal is a news website that provides a platform for users to read news articles. It provides news from all over the world from different categories.",
                                            technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
                                            image:
                                                "/newsjackal.png",
                                        },
                                    ].map((project, index) => (
                                        <div
                                            key={index}
                                            className="bg-black bg-opacity-40 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                                        >
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                                <p className="text-gray-300 mb-4">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="bg-purple-900 px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <Button className="bg-transparent border border-purple-500 hover:bg-purple-900 text-white px-4 py-2 rounded-md transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                                    View Project
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Worked With Section */}
                            <div className="mb-24">
                                <h2 className="text-2xl font-semibold mb-8">Worked with</h2>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                                    <div className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                        <i className="fab fa-stripe text-4xl"></i>
                                    </div>
                                    <div className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                        <i className="fab fa-dropbox text-4xl"></i>
                                    </div>
                                    <div className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                        <i className="fab fa-slack text-4xl"></i>
                                    </div>
                                    <div className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                        <i className="fab fa-amazon text-4xl"></i>
                                    </div>
                                    <div className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                        <i className="fab fa-google text-4xl"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials Section */}
                            <div className="mb-24">
                                <h2 className="text-3xl font-bold mb-8 border-b border-purple-700 pb-2 inline-block">
                                    Testimonials
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            quote:
                                                "Sourasish is an exceptional developer who consistently delivers high-quality code. His problem-solving skills and attention to detail make him a valuable asset to any team.",
                                            author: "Alex Johnson",
                                            position: "CTO, TechInnovate",
                                            image:
                                                "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20business%20executive%20in%20formal%20attire%20against%20dark%20background%2C%20corporate%20headshot%20style%2C%20neutral%20expression%2C%20high%20quality%20professional%20photography%20with%20soft%20studio%20lighting&width=100&height=100&seq=5&orientation=squarish",
                                        },
                                        {
                                            quote:
                                                "Working with Sourasish was a pleasure. He not only understood our technical requirements perfectly but also suggested improvements that enhanced the overall project outcome.",
                                            author: "Sarah Williams",
                                            position: "Product Manager, DataSphere",
                                            image:
                                                "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20business%20professional%20in%20smart%20casual%20attire%20against%20dark%20background%2C%20corporate%20headshot%20style%2C%20friendly%20expression%2C%20high%20quality%20professional%20photography%20with%20soft%20studio%20lighting&width=100&height=100&seq=6&orientation=squarish",
                                        },
                                    ].map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-black bg-opacity-40 p-8 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all"
                                        >
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mr-4">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.author}
                                                            className="w-full h-full object-cover object-top"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 mb-4 italic">
                                                        "{testimonial.quote}"
                                                    </p>
                                                    <p className="font-semibold">{testimonial.author}</p>
                                                    <p className="text-purple-400 text-sm">
                                                        {testimonial.position}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form Section */}
                            <div id="contact-section" className="mb-24">
                                <h2 className="text-3xl font-bold mb-8 border-b border-purple-700 pb-2 inline-block">
                                    Get In Touch
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <p className="text-lg text-gray-300 mb-6">
                                            Interested in working together? Fill out the form below with
                                            some info about your project and I will get back to you as soon
                                            as I can.
                                        </p>
                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-center">
                                                <i className="fas fa-envelope text-purple-400 mr-3"></i>
                                                <span>nathsourasish02@gmail.com</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-phone text-purple-400 mr-3"></i>
                                                <span>+91 7003749906</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-map-marker-alt text-purple-400 mr-3"></i>
                                                <span>Kolkata, India</span>
                                            </div>
                                        </div>
                                        <div className="flex space-x-4">
                                            <a
                                                href="https://www.linkedin.com/in/sourasish-nath-b7b035202/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer"
                                            >
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a
                                                href="https://github.com/Sourasish-cell"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-black bg-opacity-40 p-8 rounded-lg backdrop-blur-sm">
                                        <form>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <label htmlFor="name" className="block mb-2 text-sm">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block mb-2 text-sm">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="subject" className="block mb-2 text-sm">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="message" className="block mb-2 text-sm">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    rows={5}
                                                    className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                                ></textarea>
                                            </div>
                                            <Button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                                Send Message
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App; 