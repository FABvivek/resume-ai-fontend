import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, ArrowLeft, Sparkles, User, Briefcase, GraduationCap, Award, Code, Trophy, X } from 'lucide-react';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router';

export default function ResumeEditForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const aiResponse = location.state?.aiResponse;

  // Initialize with AI response data or default empty structure
  const [formData, setFormData] = useState({
    personalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedin: "",
      githubHub: "",
      portfolio: ""
    },
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    achievements: [],
    languages: [],
    interests: []
  });

  // Populate form when AI response is received
  useEffect(() => {
    console.log('🔍 Checking aiResponse:', aiResponse); // Debug log
    
    if (aiResponse && aiResponse.data) {
      console.log('✅ Setting form data from AI response'); // Debug log
      setFormData({
        personalInformation: aiResponse.data.personalInformation || formData.personalInformation,
        skills: aiResponse.data.skills || [],
        experience: aiResponse.data.experience || [],
        education: aiResponse.data.education || [],
        certifications: aiResponse.data.certifications || [],
        projects: aiResponse.data.projects || [],
        achievements: aiResponse.data.achievements || [],
        languages: aiResponse.data.languages || [],
        interests: aiResponse.data.interests || []
      });
    } else {
      console.log('❌ No AI response data found'); // Debug log
    }
  }, [aiResponse]);

  

  // Personal Information Handlers
  const handlePersonalInfoChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [field]: value
      }
    }));
  };

  // Skills Handlers
  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { title: "", level: "Beginner" }]
    }));
  };

  const updateSkill = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  // Experience Handlers
  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        jobTitle: "",
        company: "",
        location: "",
        duration: "",
        responsibility: ""
      }]
    }));
  };

  const updateExperience = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  // Education Handlers
  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        degree: "",
        university: "",
        location: "",
        graduationYear: ""
      }]
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  // Projects Handlers
  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, { title: "", description: "" }]
    }));
  };

  const updateProject = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === index ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const removeProject = (index) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  // Achievements Handlers
  const addAchievement = () => {
    setFormData(prev => ({
      ...prev,
      achievements: [...prev.achievements, {
        title: "",
        year: "",
        extraInformation: ""
      }]
    }));
  };

  const updateAchievement = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.map((ach, i) => 
        i === index ? { ...ach, [field]: value } : ach
      )
    }));
  };

  const removeAchievement = (index) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
  console.log('Saving resume data:', formData);
  navigate("/DownloadResume", { state: { resumeData: formData } });
};

  const handleBack = () => {
    navigate("/generate-resume");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-10 h-10 text-purple-400" />
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ResumeAI
              </span>
            </div>
            <div className="flex gap-4">
              <button onClick={handleBack} className="px-6 py-3 rounded-full font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <button onClick={handleSave} className="relative group overflow-hidden px-8 py-3 rounded-full font-bold">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform"></div>
                <span className="relative z-10 flex items-center">
                  <Save className="w-5 h-5 mr-2" />
                  Save & Generate
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-white">Edit Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Resume Details
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Review and customize your information before generating the final resume
          </p>
        </div>

        {/* Personal Information Section */}
        <section className="mb-12">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.personalInformation.fullName}
                    onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.personalInformation.email}
                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.personalInformation.phoneNumber}
                    onChange={(e) => handlePersonalInfoChange('phoneNumber', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.personalInformation.location}
                    onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="New York, NY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">LinkedIn</label>
                  <input
                    type="text"
                    value={formData.personalInformation.linkedin}
                    onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">GitHub</label>
                  <input
                    type="text"
                    value={formData.personalInformation.githubHub}
                    onChange={(e) => handlePersonalInfoChange('githubHub', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="github.com/johndoe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Portfolio</label>
                  <input
                    type="text"
                    value={formData.personalInformation.portfolio}
                    onChange={(e) => handlePersonalInfoChange('portfolio', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="johndoe.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Code className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold">Skills</h2>
                </div>
                <button onClick={addSkill} className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Skill
                </button>
              </div>
              
              <div className="space-y-4">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={skill.title}
                        onChange={(e) => updateSkill(index, 'title', e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-all"
                        placeholder="Skill name"
                      />
                    </div>
                    <div className="w-48">
                      <select
                        value={skill.level}
                        onChange={(e) => updateSkill(index, 'level', e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-all"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Basic">Basic</option>
                        <option value="Junior">Junior</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Mid-Level">Mid-Level</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Senior">Senior</option>
                      </select>
                    </div>
                    <button
                      onClick={() => removeSkill(index)}
                      className="p-3 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-xl transition-all"
                    >
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Briefcase className="w-6 h-6 text-green-400 mr-3" />
                  <h2 className="text-2xl font-bold">Work Experience</h2>
                </div>
                <button onClick={addExperience} className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Experience
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.experience.map((exp, index) => (
                  <div key={index} className="relative bg-black/30 border border-white/10 rounded-xl p-6">
                    <button
                      onClick={() => removeExperience(index)}
                      className="absolute top-4 right-4 p-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-lg transition-all"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Job Title</label>
                        <input
                          type="text"
                          value={exp.jobTitle}
                          onChange={(e) => updateExperience(index, 'jobTitle', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-all"
                          placeholder="Software Engineer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateExperience(index, 'company', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-all"
                          placeholder="Tech Company Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Location</label>
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) => updateExperience(index, 'location', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-all"
                          placeholder="San Francisco, CA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Duration</label>
                        <input
                          type="text"
                          value={exp.duration}
                          onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-all"
                          placeholder="Jan 2020 - Present"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Responsibilities</label>
                      <textarea
                        value={exp.responsibility}
                        onChange={(e) => updateExperience(index, 'responsibility', e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-all resize-none"
                        rows="3"
                        placeholder="Describe your key responsibilities and achievements..."
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <button onClick={addEducation} className="flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-all">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Education
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.education.map((edu, index) => (
                  <div key={index} className="relative bg-black/30 border border-white/10 rounded-xl p-6">
                    <button
                      onClick={() => removeEducation(index)}
                      className="absolute top-4 right-4 p-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-lg transition-all"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-all"
                          placeholder="Bachelor of Science in Computer Science"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">University</label>
                        <input
                          type="text"
                          value={edu.university}
                          onChange={(e) => updateEducation(index, 'university', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-all"
                          placeholder="University Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Location</label>
                        <input
                          type="text"
                          value={edu.location}
                          onChange={(e) => updateEducation(index, 'location', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-all"
                          placeholder="City, State"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Graduation Year</label>
                        <input
                          type="text"
                          value={edu.graduationYear}
                          onChange={(e) => updateEducation(index, 'graduationYear', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-all"
                          placeholder="2020"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-bold">Projects</h2>
                </div>
                <button onClick={addProject} className="flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Project
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.projects.map((project, index) => (
                  <div key={index} className="relative bg-black/30 border border-white/10 rounded-xl p-6">
                    <button
                      onClick={() => removeProject(index)}
                      className="absolute top-4 right-4 p-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-lg transition-all"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Project Title</label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => updateProject(index, 'title', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-400 transition-all"
                          placeholder="E-commerce Platform"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Description</label>
                        <textarea
                          value={project.description}
                          onChange={(e) => updateProject(index, 'description', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-400 transition-all resize-none"
                          rows="3"
                          placeholder="Describe your project, technologies used, and impact..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 text-indigo-400 mr-3" />
                  <h2 className="text-2xl font-bold">Achievements</h2>
                </div>
                <button onClick={addAchievement} className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Achievement
                </button>
              </div>
              
              <div className="space-y-6">
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="relative bg-black/30 border border-white/10 rounded-xl p-6">
                    <button
                      onClick={() => removeAchievement(index)}
                      className="absolute top-4 right-4 p-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-lg transition-all"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Title</label>
                        <input
                          type="text"
                          value={achievement.title}
                          onChange={(e) => updateAchievement(index, 'title', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-400 transition-all"
                          placeholder="Achievement title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Year</label>
                        <input
                          type="text"
                          value={achievement.year}
                          onChange={(e) => updateAchievement(index, 'year', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-400 transition-all"
                          placeholder="2023"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Details</label>
                        <textarea
                          value={achievement.extraInformation}
                          onChange={(e) => updateAchievement(index, 'extraInformation', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-400 transition-all resize-none"
                          rows="2"
                          placeholder="Additional information about this achievement..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Save Button at Bottom */}
        <div className="flex justify-center">
          <button onClick={handleSave} className="relative group overflow-hidden px-12 py-5 rounded-full font-bold text-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 blur-xl bg-purple-500/50 group-hover:bg-purple-400/60 transition-all duration-300"></div>
            <span className="relative z-10 flex items-center">
              <Save className="w-6 h-6 mr-3" />
              Save & Generate Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}