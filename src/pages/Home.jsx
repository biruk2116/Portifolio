import FadeIn from '../components/animations/FadeIn';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <FadeIn delay={0.2}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm John Doe
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="mt-16 flex justify-center gap-4 flex-wrap">
            {['React', 'Node.js', 'Python', 'Tailwind', 'TypeScript', 'MongoDB'].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Home;