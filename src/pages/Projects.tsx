import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects: React.FC = () => {
  const [filterTech, setFilterTech] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const contributionChartRef = useRef<HTMLDivElement>(null);
  const techUsageChartRef = useRef<HTMLDivElement>(null);

  // Project data
  const projects = [
    {
      id: 1,
      title: "NewsJackal",
      shortDescription: "A news aggregation platform that uses AI to summarize and categorize news articles from various sources.",
      fullDescription: "NewsJackal is an intelligent news aggregation platform that leverages AI to provide users with concise summaries and relevant news articles. The system automatically categorizes content and provides personalized recommendations based on user preferences.",
      challenges: "Implementing real-time news aggregation and ensuring accurate AI-powered summarization were the main challenges.",
      solutions: "Utilized web scraping techniques and advanced NLP algorithms to create accurate summaries while maintaining real-time performance.",
      technologies: ["Python", "Flask", "React", "SQL", "NLP"],
      type: "Web App",
      status: "Completed",
      date: "March 2024",
      demoLink: "https://newsjackal.com",
      repoLink: "https://github.com/Sourasish-cell/newsjackal",
      teamSize: 2,
      role: "Full Stack Developer",
      duration: "3 months",
      mainImage: "/newsjackal.png",
      gallery: [
        "/newsjackal.png",
        "/newsjackal.png",
        "/newsjackal.png"
      ],
      outcomes: "Successfully processed over 10,000 news articles daily with 95% accuracy in categorization."
    },
    {
      id: 2,
      title: "CardioSensing",
      shortDescription: "A real-time signal processing application for analyzing and visualizing pulse signals.",
      fullDescription: "Pulse Signal is a sophisticated application designed for real-time signal processing and analysis. It provides advanced visualization tools and analytical capabilities for processing various types of pulse signals.",
      challenges: "Handling real-time signal processing while maintaining high accuracy and performance.",
      solutions: "Implemented efficient signal processing algorithms and optimized data handling for real-time analysis.",
      technologies: ["Python", "React", "D3.js", "WebSockets"],
      type: "Web App",
      status: "Completed",
      date: "January 2024",
      demoLink: "https://pulsesignal.com",
      repoLink: "https://github.com/Sourasish-cell/pulse-signal",
      teamSize: 2,
      role: "Full Stack Developer",
      duration: "4 months",
      mainImage: "/pulse-signal.png",
      gallery: [
        "/pulse-signal.png",
        "/pulse-signal.png",
        "/pulse-signal.png"
      ],
      outcomes: "Achieved 99.9% accuracy in signal processing with real-time visualization capabilities."
    },
    {
      id: 3,
      title: "Parkinscan",
      shortDescription: "An AI-powered system for early detection of Parkinson's disease using analysis of vital body capacities.",
      fullDescription: "This innovative system uses machine learning algorithms to analyze voice patterns and detect early signs of Parkinson's disease. The application provides a non-invasive screening method that can help in early diagnosis.",
      challenges: "Developing accurate machine learning models for voice pattern analysis and ensuring reliable detection.",
      solutions: "Implemented advanced ML algorithms and created a robust dataset for training the models.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "ML"],
      type: "AI Application",
      status: "Completed",
      date: "November 2023",
      demoLink: "https://parkinsons-detection.com",
      repoLink: "https://github.com/Sourasish-cell/parkinsons-detection",
      teamSize: 3,
      role: "ML Engineer",
      duration: "6 months",
      mainImage: "/parkinson.png",
      gallery: [
        "/parkinson.png",
        "/parkinson.png",
        "/parkinson.png"
      ],
      outcomes: "Achieved 92% accuracy in early detection, significantly improving diagnosis rates."
    }
  ];

  // Filter projects based on selected filters and search query
  const filteredProjects = projects.filter(project => {
    if (filterTech !== 'all' && !project.technologies.includes(filterTech)) {
      return false;
    }
    if (filterType !== 'all' && project.type !== filterType) {
      return false;
    }
    if (filterStatus !== 'all' && project.status !== filterStatus) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    return true;
  });

  // Initialize charts
  useEffect(() => {
    if (contributionChartRef.current) {
      const chart = echarts.init(contributionChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'Project Contribution',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#0f0f0f',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 35, name: 'Frontend', itemStyle: { color: '#9333ea' } },
              { value: 30, name: 'Backend', itemStyle: { color: '#4f46e5' } },
              { value: 15, name: 'Database', itemStyle: { color: '#10b981' } },
              { value: 10, name: 'DevOps', itemStyle: { color: '#f59e0b' } },
              { value: 10, name: 'Testing', itemStyle: { color: '#ef4444' } }
            ]
          }
        ]
      };
      chart.setOption(option);
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener('resize', handleResize);
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (techUsageChartRef.current) {
      const chart = echarts.init(techUsageChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['Python', 'React', 'Flask', 'SQL', 'TensorFlow', 'D3.js'],
          axisLabel: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'Projects',
            type: 'bar',
            data: [3, 3, 2, 2, 1, 1],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#9333ea' },
                { offset: 1, color: '#4f46e5' }
              ])
            }
          }
        ]
      };
      chart.setOption(option);
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener('resize', handleResize);
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white font-sans">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <a
              href="/"
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Portfolio
            </a>
          </div>
          <h1 className="text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Explore my portfolio of projects spanning web applications, AI solutions, and more.
            Each project represents a unique challenge and showcases different aspects of my technical expertise.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
            <div className="flex items-center mb-3">
              <i className="fas fa-code-branch text-purple-400 text-2xl mr-3"></i>
              <div>
                <h3 className="text-2xl font-bold">{projects.length}</h3>
                <p className="text-gray-300">Total Projects</p>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
            <div className="flex items-center mb-3">
              <i className="fas fa-check-circle text-green-500 text-2xl mr-3"></i>
              <div>
                <h3 className="text-2xl font-bold">{projects.filter(p => p.status === 'Completed').length}</h3>
                <p className="text-gray-300">Completed</p>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
            <div className="flex items-center mb-3">
              <i className="fas fa-code text-purple-400 text-2xl mr-3"></i>
              <div>
                <h3 className="text-2xl font-bold">6</h3>
                <p className="text-gray-300">Technologies Used</p>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
            <div className="flex items-center mb-3">
              <i className="fas fa-users text-purple-400 text-2xl mr-3"></i>
              <div>
                <h3 className="text-2xl font-bold">5</h3>
                <p className="text-gray-300">Total Team Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="relative w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white pl-10 pr-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <Select value={filterTech} onValueChange={setFilterTech}>
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-white">
                  <SelectItem value="all">All Technologies</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="React">React</SelectItem>
                  <SelectItem value="Flask">Flask</SelectItem>
                  <SelectItem value="SQL">SQL</SelectItem>
                  <SelectItem value="TensorFlow">TensorFlow</SelectItem>
                  <SelectItem value="D3.js">D3.js</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-white">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Web App">Web App</SelectItem>
                  <SelectItem value="AI Application">AI Application</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-white">
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 ml-auto">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                className={`!rounded-button whitespace-nowrap cursor-pointer ${viewMode === 'grid' ? 'bg-purple-700 hover:bg-purple-600' : 'bg-transparent border border-gray-700'}`}
              >
                <i className="fas fa-th-large mr-2"></i> Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className={`!rounded-button whitespace-nowrap cursor-pointer ${viewMode === 'list' ? 'bg-purple-700 hover:bg-purple-600' : 'bg-transparent border border-gray-700'}`}
              >
                <i className="fas fa-list mr-2"></i> List
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(filterTech !== 'all' || filterType !== 'all' || filterStatus !== 'all' || searchQuery) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {filterTech !== 'all' && (
                <Badge variant="secondary" className="bg-purple-900 text-white px-3 py-1">
                  Tech: {filterTech}
                  <button
                    onClick={() => setFilterTech('all')}
                    className="ml-2 text-xs hover:text-gray-300 cursor-pointer"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </Badge>
              )}
              {filterType !== 'all' && (
                <Badge variant="secondary" className="bg-purple-900 text-white px-3 py-1">
                  Type: {filterType}
                  <button
                    onClick={() => setFilterType('all')}
                    className="ml-2 text-xs hover:text-gray-300 cursor-pointer"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </Badge>
              )}
              {filterStatus !== 'all' && (
                <Badge variant="secondary" className="bg-purple-900 text-white px-3 py-1">
                  Status: {filterStatus}
                  <button
                    onClick={() => setFilterStatus('all')}
                    className="ml-2 text-xs hover:text-gray-300 cursor-pointer"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" className="bg-purple-900 text-white px-3 py-1">
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-xs hover:text-gray-300 cursor-pointer"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </Badge>
              )}
              <Button
                variant="link"
                onClick={() => {
                  setFilterTech('all');
                  setFilterType('all');
                  setFilterStatus('all');
                  setSearchQuery('');
                }}
                className="text-purple-400 hover:text-purple-300 p-0 h-auto !rounded-button whitespace-nowrap cursor-pointer"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Projects Display */}
        {filteredProjects.length > 0 ? (
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'} mb-16`}>
            {filteredProjects.map((project) => (
              viewMode === 'grid' ? (
                <Card key={project.id} className="bg-black bg-opacity-40 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className={project.status === 'Completed' ? 'bg-green-700' : 'bg-blue-700'}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="outline" className="bg-purple-900/50 border-purple-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-700 hover:bg-purple-900 text-purple-400 hover:text-purple-300 !rounded-button whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsDialogOpen(true);
                      }}
                    >
                      <strong>View Details</strong>
                    </Button>
                    <div className="flex gap-2">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 cursor-pointer">
                        <i className="fas fa-external-link-alt" title="Live Demo"></i>
                      </a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 cursor-pointer">
                        <i className="fab fa-github" title="GitHub Repository"></i>
                      </a>
                    </div>
                  </CardFooter>
                </Card>
              ) : (
                <Card key={project.id} className="bg-black bg-opacity-40 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-48 md:h-auto">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className={project.status === 'Completed' ? 'bg-green-700' : 'bg-blue-700'}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{project.date}</p>
                      <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="outline" className="bg-purple-900/50 border-purple-700 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-700 hover:bg-purple-900 text-purple-400 hover:text-purple-300 !rounded-button whitespace-nowrap cursor-pointer"
                          onClick={() => {
                            setSelectedProject(project);
                            setIsDialogOpen(true);
                          }}
                        >
                          <strong>View Details</strong>
                        </Button>
                        <div className="flex gap-3">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 cursor-pointer">
                            <i className="fas fa-external-link-alt mr-1"></i> Demo
                          </a>
                          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 cursor-pointer">
                            <i className="fab fa-github mr-1"></i> Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            ))}
          </div>
        ) : (
          <div className="bg-black bg-opacity-40 p-12 rounded-lg text-center mb-16">
            <i className="fas fa-search text-4xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your filters or search criteria</p>
            <Button
              onClick={() => {
                setFilterTech('all');
                setFilterType('all');
                setFilterStatus('all');
                setSearchQuery('');
              }}
              className="bg-purple-700 hover:bg-purple-600 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Project Analytics */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 border-b border-purple-700 pb-2 inline-block text-white">Project Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Contribution Breakdown</h3>
              <div ref={contributionChartRef} style={{ height: '300px' }}></div>
            </div>
            <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Technology Usage</h3>
              <div ref={techUsageChartRef} style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>

        {/* Project Methodology */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 border-b border-purple-700 pb-2 inline-block text-white">My Project Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Discovery & Planning</h3>
              </div>
              <p className="text-gray-300">
                I begin each project with a thorough discovery phase to understand requirements, constraints, and objectives. This involves stakeholder interviews, market research, and technical feasibility analysis.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                  <i className="fas fa-code-branch text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Development & Testing</h3>
              </div>
              <p className="text-gray-300">
                I follow agile methodologies with iterative development cycles. Each feature is built with clean, maintainable code and undergoes rigorous testing to ensure functionality and performance.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-50 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Deployment & Refinement</h3>
              </div>
              <p className="text-gray-300">
                After thorough testing, projects are deployed with careful monitoring for performance and user feedback. I believe in continuous improvement, implementing refinements based on real-world usage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-4xl max-h-[90vh] overflow-hidden p-0">
          {selectedProject && (
            <div className="flex flex-col h-full">
              <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-800">
                <div className="flex justify-between items-start">
                  <DialogTitle className="text-2xl font-bold text-white">{selectedProject.title}</DialogTitle>
                  <Badge variant={selectedProject.status === 'Completed' ? 'default' : 'secondary'} className={selectedProject.status === 'Completed' ? 'bg-green-700' : 'bg-blue-700'}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <DialogDescription className="text-gray-400">
                  {selectedProject.date} • {selectedProject.type}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-1 px-6 py-4">
                {/* Project Gallery */}
                <div className="mb-6">
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 5000 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <SwiperSlide>
                      <img
                        src={selectedProject.mainImage}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover object-top"
                      />
                    </SwiperSlide>
                    {selectedProject.gallery.map((image: string, index: number) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="w-full h-64 object-cover object-top"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-gray-300">{selectedProject.fullDescription}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                      <p className="text-gray-300">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                      <p className="text-gray-300">{selectedProject.solutions}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <Badge key={index} variant="outline" className="bg-purple-900/50 border-purple-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-1">Team Size</h4>
                      <p>{selectedProject.teamSize} people</p>
                    </div>
                    <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-1">My Role</h4>
                      <p>{selectedProject.role}</p>
                    </div>
                    <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-1">Duration</h4>
                      <p>{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Outcomes & Results</h3>
                    <p className="text-gray-300">{selectedProject.outcomes}</p>
                  </div>
                </div>
              </ScrollArea>
              <div className="px-6 py-4 border-t border-gray-800 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="border-gray-700 hover:bg-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Close
                </Button>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                  </a>
                  <a
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fab fa-github mr-2"></i> Repository
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects; 