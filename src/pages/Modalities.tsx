import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Modalities = () => {
  const modalities = mockData.pages.modalities;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');

  const categories = Array.from(
    new Set(modalities.flatMap(m => m.categories))
  );
  const intensities = Array.from(
    new Set(modalities.map(m => m.intensity))
  );

  const filteredModalities = modalities.filter(modality => {
    const categoryMatch = selectedCategory === 'all' || modality.categories.includes(selectedCategory);
    const intensityMatch = selectedIntensity === 'all' || modality.intensity === selectedIntensity;
    return categoryMatch && intensityMatch;
  });

  return (
    <div className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Modalidades</h1>
            <p className="text-xl text-gray-600">Escolha o treino perfeito para seus objetivos</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Categoria</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="all">Todas</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Intensidade</label>
              <select
                value={selectedIntensity}
                onChange={(e) => setSelectedIntensity(e.target.value)}
                className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="all">Todas</option>
                {intensities.map(intensity => (
                  <option key={intensity} value={intensity}>{intensity}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Modalities Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8"
          >
            {filteredModalities.map((modality) => (
              <motion.div
                key={modality.id}
                layout
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)`
                  }}
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{modality.name}</h3>
                  <p className="text-gray-600">{modality.description}</p>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {modality.categories.map(category => (
                        <span
                          key={category}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      Intensidade: {modality.intensity}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Benefícios:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {modality.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modalities;