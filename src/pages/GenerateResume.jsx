import React, { useState } from 'react';
import { Sparkles, Wand2, Trash2, FileText, Lightbulb, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';


function GenerateResume() {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);


  const navigate = useNavigate();

  const handleGenerate = () => {
    if (!description.trim()) {
      alert('Please enter your description first!');
      return;
    }
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      alert('Resume generated successfully! This would navigate to the resume preview page.');
      // Here you would actually call your AI API and navigate to results
    }, 2000);
  };
  const handleBackToHome = () => {
    navigate("/");
  };

  const handleClear = () => {
  if (!description.trim()) return;
  setShowClearModal(true);
};

  const examplePrompts = [
    "I'm a software engineer with 5 years of experience in React, Node.js, and Python...",
    "Marketing professional with expertise in digital campaigns, SEO, and content strategy...",
    "Recent graduate with a degree in Computer Science, completed internships at..."
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/80 backdrop-blur-xl border-b border-white/10">
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
            <button  onClick={handleBackToHome} className="px-6 py-3 rounded-full font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full mb-6">
            <FileText className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Step 1 of 2
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Tell Us About</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Your Experience
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Describe your professional background, skills, and achievements. Our AI will transform your words into a professional resume.
          </p>
        </div>

        {/* Quick Tips */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Quick Tips for Best Results</h3>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Include your job titles, companies, and years of experience</li>
                  <li>• Mention specific skills, technologies, or tools you've used</li>
                  <li>• Describe your key achievements and responsibilities</li>
                  <li>• Add your education background and certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Text Area Card */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <label className="block text-lg font-bold text-white mb-4">
              Your Professional Story
            </label>
            
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Start typing here... For example: I am a full-stack developer with 5 years of experience building web applications. I have expertise in React, Node.js, and MongoDB. I've led teams of 3-5 developers and successfully delivered 15+ projects. I'm passionate about clean code and user experience..."
              className="w-full h-96 px-6 py-4 bg-black/50 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none text-lg leading-relaxed"
              maxLength={5000}
            />
            
            <div className="flex justify-between items-center mt-4 text-sm">
              <span className="text-gray-500">
                {description.length} / 5000 characters
              </span>
              <span className="text-gray-500">
                {description.trim().split(/\s+/).filter(word => word.length > 0).length} words
              </span>
            </div>
          </div>
        </div>

        {/* Example Prompts */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            Need inspiration? Try these examples:
          </h3>
          <div className="grid gap-3">
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setDescription(prompt)}
                className="text-left px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {prompt}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClear}
            disabled={!description.trim()}
            className="relative group overflow-hidden px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Trash2 className="w-5 h-5 mr-3" />
              Clear All
            </span>
          </button>

          <button
            onClick={handleGenerate}
            disabled={!description.trim() || isGenerating}
            className="relative group overflow-hidden px-12 py-4 rounded-full font-bold text-lg shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 blur-xl bg-purple-500/50 group-hover:bg-purple-400/60 transition-all duration-300"></div>
            <span className="relative z-10 flex items-center justify-center">
              {isGenerating ? (
                <>
                  <Wand2 className="w-6 h-6 mr-3 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Generate Resume
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Your data is secure and will only be used to generate your resume
        </p>
      </div>
      {showClearModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="relative w-full max-w-md mx-4">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-2xl rounded-3xl"></div>

      {/* Modal Card */}
      <div className="relative bg-black/90 border border-white/20 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Clear all text?
        </h3>

        <p className="text-gray-400 mb-8">
          This action will permanently remove everything you have written.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowClearModal(false)}
            className="px-6 py-3 rounded-full font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              setDescription("");
              setShowClearModal(false);
            }}
            className="relative group overflow-hidden px-6 py-3 rounded-full font-semibold text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">
              Yes, Clear
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
    )}

    </div>
  );
}
export default GenerateResume;