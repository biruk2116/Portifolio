import FadeIn from '../components/animations/FadeIn';
import Button from '../components/ui/Button';

const Home = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hi, I'm John Doe
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={scrollToContact} variant="primary" size="lg">
              Get In Touch
            </Button>
            <Button
              onClick={() => {
                const projects = document.getElementById('projects');
                projects?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              size="lg"
            >
              View Projects
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="mt-16 flex justify-center gap-8">
            {['React', 'Node.js', 'Python', 'Tailwind'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform cursor-pointer"
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