import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import type { Instructor, Data } from '../data/mockData';

type InstructorModalProps = {
  data: Pick<Data, 'pages'>['pages']['instructors'];
}
const Instructors = ({data} : InstructorModalProps) => {
  const instructors = data;
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = Array.from(
    new Set(instructors.flatMap(i => i.specialties))
  );

  const filteredInstructors = instructors.filter(instructor =>
    selectedSpecialty === 'all' || instructor.specialties.includes(selectedSpecialty)
  );

  const dayTranslations: { [key: string]: string } = {
    'monday': 'Segunda',
    'tuesday': 'Terça',
    'wednesday': 'Quarta',
    'thursday': 'Quinta',
    'friday': 'Sexta',
    'saturday': 'Sábado',
    'sunday': 'Domingo'
  };

  return (
    <div className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Nossos Instrutores</h1>
            <p className="text-xl text-gray-600">Profissionais certificados prontos para te ajudar</p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap w-[50%] mx-auto justify-center bg-slate-100 shadow-lg border border-gray-200 p-4 rounded-lg gap-14">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="all">Todas as Especialidades</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>

          {/* Instructors Grid */}
          <motion.div
            layout
            className="flex flex-row flex-wrap items-center justify-center gap-10"
          >
            {filteredInstructors.map((instructor) => (
              <motion.div
                key={instructor.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-[20rem] h-[15rem] lg:w-[30rem] lg:h-[15rem] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedInstructor(instructor)}
              >
                <div
                  className="h-[50%] bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)"
                  }}
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{instructor.name}</h3>
                  <p className="text-gray-600">{instructor.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map(specialty => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Instructor Modal */}
        <AnimatePresence>
          {selectedInstructor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedInstructor(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{selectedInstructor.name}</h2>
                  <button
                    type="button"
                    onClick={() => setSelectedInstructor(null)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6">
                  <div
                    className="h-64 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)"
                    }}
                  />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h3 className="font-semibold mb-2">Experiência</h3>
                      <p>{selectedInstructor.experience}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certificações</h3>
                      <p>{selectedInstructor.certification}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horários Disponíveis</h3>
                    <div className="space-y-2">
                      {Object.entries(selectedInstructor.schedule).map(([day, times]) => (
                        <div key={day} className="flex gap-2">
                          <span className="font-medium w-20">{dayTranslations[day]}:</span>
                          <div className="flex flex-wrap gap-2">
                            {times.map(time => (
                              <span
                                key={time}
                                className="px-2 py-1 bg-gray-100 rounded text-sm"
                              >
                                {time}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Instructors;