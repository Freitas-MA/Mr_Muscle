import { motion } from 'framer-motion';
import { Dumbbell, Users, Clock } from 'lucide-react';
import { mockData } from '../data/mockData';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  const { hero, features, stats } = mockData.pages.home;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="h-8 w-8" />;
      case 'users':
        return <Users className="h-8 w-8" />;
      case 'clock':
        return <Clock className="h-8 w-8" />;
      default:
        return <Dumbbell className="h-8 w-8" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-neutral bg-opacity-60" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-2xl text-white space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl tablet:text-5xl desktop:text-6xl font-bold leading-tight"
            >
              {hero.title}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl tablet:text-2xl text-gray-200"
            >
              {hero.subtitle}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button type='button' className="btn-primary text-lg">{hero.cta}</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="bg-background p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 tablet:grid-cols-3 gap-12 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                variants={fadeInUp}
                className="space-y-2"
              >
                <h3 className="text-4xl desktop:text-5xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;