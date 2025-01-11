import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';

const Schedule = () => {
  const { schedule } = mockData.pages;
  const [showWeekend, setShowWeekend] = useState(false);
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = Array.from(
    new Set(
      [...schedule.weekdays, ...schedule.weekends]
        .flatMap(slot => slot.classes)
    )
  );

  const currentSchedule = showWeekend ? schedule.weekends : schedule.weekdays;
  const filteredSchedule = currentSchedule.map(slot => ({
    ...slot,
    classes: selectedClass === 'all'
      ? slot.classes
      : slot.classes.filter(c => c === selectedClass)
  })).filter(slot => slot.classes.length > 0);

  return (
    <div className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Horários das Aulas</h1>
            <p className="text-xl text-gray-600">Planeje seus treinos da semana</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Modalidade</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="all">Todas</option>
                {classes.map(className => (
                  <option key={className} value={className}>{className}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Período</label>
              <div className="flex rounded-lg overflow-hidden">
                <button
                  className={`px-4 py-2 ${!showWeekend ? 'bg-primary text-white' : 'bg-gray-100'}`}
                  onClick={() => setShowWeekend(false)}
                >
                  Seg-Sex
                </button>
                <button
                  className={`px-4 py-2 ${showWeekend ? 'bg-primary text-white' : 'bg-gray-100'}`}
                  onClick={() => setShowWeekend(true)}
                >
                  Sáb-Dom
                </button>
              </div>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left">Horário</th>
                  <th className="py-4 px-6 text-left">Aulas</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchedule.map((slot, index) => (
                  <motion.tr
                    key={slot.time}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100"
                  >
                    <td className="py-4 px-6 font-medium">{slot.time}</td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-2">
                        {slot.classes.map(className => (
                          <span
                            key={className}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {className}
                          </span>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;