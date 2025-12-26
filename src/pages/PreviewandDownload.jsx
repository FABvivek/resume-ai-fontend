import React, { useState, useRef } from 'react';
import { Download, Edit, ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Globe, Trophy, Sparkles, FileText, Check, Star, Zap, Eye } from 'lucide-react';

export default function ResumePreviewPage({ resumeData, onBack, onEdit }) {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const resumeRef = useRef(null);

  const data = resumeData || {};
  console.log("📄 Resume data in preview:", data);


  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      // In real implementation, you would generate PDF/DOCX here
      const fileName = `${data.personalInformation?.fullName || 'Resume'}_${selectedFormat}`;
      alert(`Downloading: ${fileName}`);
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/50 via-black to-black"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-blue-500/40 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-30"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .shimmer {
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/50 backdrop-blur-3xl border-b border-purple-500/30 sticky top-0 shadow-2xl shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Sparkles className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-all group-hover:rotate-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                <div className="absolute inset-0 bg-purple-400 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"></div>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                ResumeAI
              </span>
            </div>
            <div className="flex gap-4">
              <button onClick={onBack} className="group px-6 py-3 rounded-2xl font-semibold bg-white/10 border border-white/20 hover:border-purple-400/60 hover:bg-white/15 backdrop-blur-xl transition-all flex items-center shadow-lg shadow-black/20 hover:shadow-purple-500/30 hover:scale-105">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back
              </button>
              <button onClick={onEdit} className="group px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 transition-all flex items-center shadow-2xl shadow-purple-500/50 hover:shadow-pink-500/50 hover:scale-105 border border-purple-400/30">
                <Edit className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Edit Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header Section with Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-purple-500/50 px-6 py-3 rounded-full mb-6 group hover:scale-105 transition-transform shadow-xl shadow-purple-500/30">
            <Star className="w-5 h-5 text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Professional Resume Generated
            </span>
            <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-180 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-white drop-shadow-2xl">Your Resume is</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Ready to Impress! 🚀
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Your professionally crafted resume is ready. Review it below and download in your preferred format.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: <Eye className="w-5 h-5" />, label: "ATS Optimized", color: "from-green-500 to-emerald-500" },
              { icon: <Zap className="w-5 h-5" />, label: "Instant Download", color: "from-yellow-500 to-orange-500" },
              { icon: <Star className="w-5 h-5" />, label: "Professional", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full hover:scale-110 transition-all shadow-lg hover:shadow-xl hover:border-white/40">
                <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color} shadow-lg`}>
                  {stat.icon}
                </div>
                <span className="font-semibold text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Preview with 3D Effect */}
        <div className="mb-16 perspective-1000">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer rounded-3xl pointer-events-none"></div>
            
            {/* Border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity"></div>
            
            <div ref={resumeRef} className={`relative bg-white text-black rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto transform transition-all duration-500 border-2 border-purple-500/20 ${isHovered ? 'scale-[1.02] shadow-[0_30px_90px_rgba(168,85,247,0.5)]' : 'shadow-[0_20px_60px_rgba(0,0,0,0.5)]'}`}>
              {/* Premium Badge */}
              <div className="absolute top-8 right-8 z-10 animate-bounce">
                <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center space-x-1 border-2 border-yellow-300/50">
                  <Trophy className="w-4 h-4 drop-shadow-lg" />
                  <span className="drop-shadow-lg">PREMIUM</span>
                </div>
              </div>

              {/* Resume Content */}
              <div className="p-12 sm:p-16">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 -mx-12 sm:-mx-16 -mt-12 sm:-mt-16 px-12 sm:px-16 pt-12 sm:pt-16 pb-8 mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight">
                      {data.personalInformation?.fullName}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      {data.personalInformation?.email && (
                        <div className="flex items-center bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl">
                          <Mail className="w-4 h-4 mr-2" />
                          {data.personalInformation.email}
                        </div>
                      )}
                      {data.personalInformation?.phoneNumber && (
                        <div className="flex items-center bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl">
                          <Phone className="w-4 h-4 mr-2" />
                          {data.personalInformation.phoneNumber}
                        </div>
                      )}
                      {data.personalInformation?.location && (
                        <div className="flex items-center bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl">
                          <MapPin className="w-4 h-4 mr-2" />
                          {data.personalInformation.location}
                        </div>
                      )}
                    </div>
                    {(data.personalInformation?.linkedin || data.personalInformation?.githubHub || data.personalInformation?.portfolio) && (
                      <div className="flex flex-wrap gap-3 text-sm text-gray-300 mt-3">
                        {data.personalInformation?.linkedin && (
                          <div className="flex items-center bg-blue-500/20 px-3 py-1.5 rounded-full backdrop-blur-xl border border-blue-400/30">
                            <Linkedin className="w-4 h-4 mr-2 text-blue-400" />
                            {data.personalInformation.linkedin}
                          </div>
                        )}
                        {data.personalInformation?.githubHub && (
                          <div className="flex items-center bg-purple-500/20 px-3 py-1.5 rounded-full backdrop-blur-xl border border-purple-400/30">
                            <Github className="w-4 h-4 mr-2 text-purple-400" />
                            {data.personalInformation.githubHub}
                          </div>
                        )}
                        {data.personalInformation?.portfolio && (
                          <div className="flex items-center bg-green-500/20 px-3 py-1.5 rounded-full backdrop-blur-xl border border-green-400/30">
                            <Globe className="w-4 h-4 mr-2 text-green-400" />
                            {data.personalInformation.portfolio}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Skills Section */}
                {data.skills && data.skills.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 mr-3 rounded-full"></div>
                      SKILLS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.skills.map((skill, index) => (
                        <div key={index} className="group relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-gray-900 group-hover:text-purple-900 transition-colors">{skill.title}</span>
                            <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold shadow-sm">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience Section */}
                {data.experience && data.experience.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 mr-3 rounded-full"></div>
                      EXPERIENCE
                    </h2>
                    {data.experience.map((exp, index) => (
                      <div key={index} className="mb-6 last:mb-0 relative pl-6 border-l-4 border-blue-600/30 hover:border-blue-600 transition-colors">
                        <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full -translate-x-[8.5px]"></div>
                        <div className="bg-gradient-to-r from-blue-50/50 to-transparent p-4 rounded-r-xl -ml-6 pl-10">
                          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                            <div>
                              <h3 className="text-xl font-black text-gray-900">{exp.jobTitle}</h3>
                              <p className="text-blue-700 font-bold">{exp.company}</p>
                            </div>
                            <div className="text-right text-sm">
                              <p className="font-semibold text-gray-700">{exp.duration}</p>
                              <p className="text-gray-600">{exp.location}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{exp.responsibility}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Section */}
                {data.education && data.education.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-green-600 to-emerald-600 mr-3 rounded-full"></div>
                      EDUCATION
                    </h2>
                    {data.education.map((edu, index) => (
                      <div key={index} className="mb-4 last:mb-0 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-600 hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-black text-gray-900">{edu.degree}</h3>
                            <p className="text-green-700 font-bold">{edu.university}</p>
                          </div>
                          <div className="text-right text-sm">
                            <p className="font-semibold text-gray-700">{edu.graduationYear}</p>
                            <p className="text-gray-600">{edu.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Projects Section */}
                {data.projects && data.projects.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-orange-600 to-red-600 mr-3 rounded-full"></div>
                      PROJECTS
                    </h2>
                    {data.projects.map((project, index) => (
                      <div key={index} className="mb-4 last:mb-0 bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-l-4 border-orange-600 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-black text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievements Section */}
                {data.achievements && data.achievements.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-yellow-600 to-orange-600 mr-3 rounded-full"></div>
                      ACHIEVEMENTS
                    </h2>
                    {data.achievements.map((achievement, index) => (
                      <div key={index} className="mb-4 last:mb-0 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border-l-4 border-yellow-600 hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h3 className="text-lg font-black text-gray-900">{achievement.title}</h3>
                          <span className="text-sm font-bold text-yellow-700 bg-yellow-200 px-3 py-1 rounded-full">{achievement.year}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{achievement.extraInformation}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg shadow-purple-500/50">
                  <Download className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Download Your Resume
                </h3>
                <p className="text-gray-400">Choose your preferred format and start applying!</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { format: 'pdf', label: 'PDF', sublabel: 'Most Popular', icon: <FileText className="w-8 h-8" />, color: 'from-red-500 to-pink-500' },
                  { format: 'docx', label: 'DOCX', sublabel: 'Editable', icon: <FileText className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
                  { format: 'txt', label: 'TXT', sublabel: 'Plain Text', icon: <FileText className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' }
                ].map((option) => (
                  <button
                    key={option.format}
                    onClick={() => setSelectedFormat(option.format)}
                    className={`relative group/card flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 ${
                      selectedFormat === option.format
                        ? 'bg-gradient-to-br ' + option.color + ' scale-110 shadow-2xl'
                        : 'bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/20 hover:scale-105'
                    }`}
                  >
                    <div className={`mb-3 transition-transform ${selectedFormat === option.format ? 'scale-110' : 'group-hover/card:scale-110'}`}>
                      {option.icon}
                    </div>
                    <span className="font-black text-lg mb-1">{option.label}</span>
                    <span className="text-xs text-gray-400">{option.sublabel}</span>
                    {selectedFormat === option.format && (
                      <div className="absolute -top-2 -right-2">
                        <Check className="w-6 h-6 bg-green-500 rounded-full p-1" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full relative group/download overflow-hidden px-8 py-6 rounded-2xl font-black text-xl disabled:opacity-50 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover/download:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 blur-2xl bg-purple-500/50 group-hover/download:bg-purple-400/70 transition-all duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  {isDownloading ? (
                    <>
                      <Download className="w-7 h-7 mr-3 animate-bounce" />
                      Preparing Your Download...
                    </>
                  ) : (
                    <>
                      <Download className="w-7 h-7 mr-3 group-hover/download:animate-bounce" />
                      Download {selectedFormat.toUpperCase()} Now
                      <Sparkles className="w-5 h-5 ml-3 group-hover/download:rotate-180 transition-transform duration-500" />
                    </>
                  )}
                </span>
              </button>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: <Check className="w-5 h-5" />, label: "ATS Optimized", color: "from-green-500 to-emerald-500" },
                  { icon: <Star className="w-5 h-5" />, label: "Professional", color: "from-yellow-500 to-orange-500" },
                  { icon: <Zap className="w-5 h-5" />, label: "Print Ready", color: "from-purple-500 to-pink-500" }
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-2 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <span className="text-xs text-gray-400 font-semibold">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}