import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Zap, Target, CheckCircle, Users, TrendingUp, Download, Brain, Wand2, Rocket, Star, ArrowRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Link } from "react-router";


export default function LandingPage() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate("/generate-resume");
  };

  const handleEmailSubmit = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Sparkles className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div className="absolute inset-0 bg-purple-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ResumeAI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="about" className="text-gray-300 hover:text-white transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="services" className="text-gray-300 hover:text-white transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="contact" className="text-gray-300 hover:text-white transition-colors relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button onClick={handleGetStarted} className="relative group overflow-hidden px-6 py-3 rounded-full font-semibold">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
              <button onClick={handleGetStarted} className="w-full px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-blue-600">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full mb-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
              <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Powered by Advanced AI
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
              <span className="block text-white mb-2">Build Your Dream</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Resume in Seconds
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your career story into a stunning, ATS-optimized resume with the power of AI. 
              <span className="text-white font-semibold"> No templates. No hassle. Just results.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button onClick={handleGetStarted} className="relative group overflow-hidden px-10 py-5 rounded-full font-bold text-lg shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 blur-xl bg-purple-500/50 group-hover:bg-purple-400/60 transition-all duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Rocket className="w-6 h-6 mr-3 group-hover:-translate-y-1 transition-transform" />
                  Start Creating Free
                </span>
              </button>
              
              <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-xl group">
                <span className="flex items-center">
                  <FileText className="w-6 h-6 mr-3 group-hover:rotate-6 transition-transform" />
                  View Examples
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Happy Users", color: "from-purple-500 to-pink-500" },
              { icon: <FileText className="w-8 h-8" />, value: "100K+", label: "Resumes Created", color: "from-blue-500 to-cyan-500" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "85%", label: "Success Rate", color: "from-green-500 to-emerald-500" },
              { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "User Rating", color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity rounded-2xl blur-xl" style={{background: `linear-gradient(to bottom right, ${stat.color})`}}></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Supercharged Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create a resume that stands out and gets you hired
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI-Powered Intelligence",
                description: "Our advanced AI understands your experience and crafts compelling content that highlights your unique strengths.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "ATS Optimization",
                description: "Beat the robots. Our resumes are optimized to pass Applicant Tracking Systems and reach human recruiters.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Wand2 className="w-12 h-12" />,
                title: "Smart Formatting",
                description: "Beautiful, professional layouts that adapt to your content. No more fighting with margins and alignment.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Generate your complete resume in under 30 seconds. Spend your time on what matters - getting interviews.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Download className="w-12 h-12" />,
                title: "Multi-Format Export",
                description: "Download in PDF, DOCX, or plain text. Compatible with any job application platform or email.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Smart Suggestions",
                description: "Get intelligent recommendations to improve your content and increase your chances of landing interviews.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl blur-2xl`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="text-white">Simple. Fast. </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Effective.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three steps to your professional resume
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Describe Yourself",
                  description: "Tell us about your experience, skills, and achievements in plain language. No fancy formatting needed.",
                  icon: <FileText className="w-10 h-10" />
                },
                {
                  step: "02",
                  title: "AI Works Magic",
                  description: "Our AI analyzes your input and generates a professionally written, perfectly formatted resume tailored to your goals.",
                  icon: <Sparkles className="w-10 h-10" />
                },
                {
                  step: "03",
                  title: "Download & Conquer",
                  description: "Review, customize, and download your resume. Start applying to jobs and landing interviews immediately.",
                  icon: <Rocket className="w-10 h-10" />
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                      <div className="text-6xl font-black bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        {step.step}
                      </div>
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-6">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real people. Real results. Real careers transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer at Google",
                content: "I landed my dream job at Google within 2 weeks of using ResumeAI. The AI understood my technical background perfectly and highlighted my skills in ways I never thought of.",
                avatar: "SJ",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "This is game-changing. I received 5 interview requests in the first week. The resume looks so professional and really captures my achievements. Worth every penny!",
                avatar: "MC",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Emily Rodriguez",
                role: "Product Designer",
                content: "As a designer, I'm picky about aesthetics. This tool nailed it. Beautiful layouts and the content is compelling. Got 3 offers and negotiated 30% higher salary!",
                avatar: "ER",
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl blur-2xl`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">Ready to Transform </span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Your Career?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join 50,000+ professionals who landed their dream jobs with AI-powered resumes
              </p>
              <button onClick={handleGetStarted} className="relative group overflow-hidden px-12 py-6 rounded-full font-bold text-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 blur-2xl bg-purple-500/50 group-hover:bg-purple-400/60 transition-all duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                  Create Your Resume Now
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <p className="text-gray-500 mt-6">No credit card required • Free forever • Instant access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h3>
          <p className="text-gray-400 mb-8">Get career tips, resume strategies, and exclusive updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all"
            />
            <button onClick={handleEmailSubmit} className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ResumeAI
                </span>
              </div>
              <p className="text-gray-400">
                Building the future of resume creation with AI.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500">
            <p>&copy; 2024 ResumeAI. Crafted with AI • Powered by Innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}