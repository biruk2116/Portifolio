import FadeIn from '../components/animations/FadeIn';
import { Award, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Coffee Cups' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800/30 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Profile"
                  className="w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with 5+ years of experience building
                web applications that solve real-world problems. I love creating elegant,
                efficient, and user-friendly solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work,
                and that curiosity has driven me to continuously learn and grow.
                I believe in writing clean, maintainable code and delivering
                exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
                    >
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                      <h3 className="text-2xl font-bold text-blue-600">{stat.value}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;