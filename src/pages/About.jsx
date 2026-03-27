import FadeIn from '../components/animations/FadeIn';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Profile"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with 5+ years of experience building
                web applications that solve real-world problems. I love creating elegant,
                efficient, and user-friendly solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work,
                and that curiosity has driven me to continuously learn and grow.
                I believe in writing clean, maintainable code and delivering
                exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-blue-600">5+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-blue-600">50+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;