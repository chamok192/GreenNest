import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/plants.json');
        const data = await res.json();
        setPlants(data);
      } catch {}
    })();
  }, []);

  const topRated = plants
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative h-[360px] sm:h-[460px] overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#227540] text-center px-4"
          >
            Nurture a Greener Home with GreenNest
          </motion.h1>
        </div>
      </section>

      {/* Top Rated */}
      <section className="px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Top Rated Indoor Plants</h2>
          <Link to="/plants" className="text-[#227540]">View all</Link>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {topRated.map((p) => (
            <div key={p.plantId} className="card bg-base-100 shadow">
              <figure className="h-48 overflow-hidden"><img src={p.image} alt={p.plantName} className="w-full h-full object-cover"/></figure>
              <div className="card-body">
                <h3 className="card-title">{p.plantName}</h3>
                <p className="text-sm text-gray-600">{p.category} • ⭐ {p.rating}</p>
                <p className="font-semibold">${p.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/plants/${p.plantId}`} className="btn btn-sm bg-[#227540] text-white">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-4">Plant Care Tips</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="p-4 rounded-lg bg-green-50 border">
            <h3 className="font-semibold mb-1">Watering</h3>
            <p className="text-sm text-gray-700">Water when the top inch of soil is dry. Avoid soggy roots.</p>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border">
            <h3 className="font-semibold mb-1">Light</h3>
            <p className="text-sm text-gray-700">Most indoor plants prefer bright, indirect light.</p>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border">
            <h3 className="font-semibold mb-1">Feeding</h3>
            <p className="text-sm text-gray-700">Fertilize monthly during growing seasons for healthy growth.</p>
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-4">Meet Our Green Experts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Ava Greene', role: 'Indoor Care Specialist', img: 'https://i.pravatar.cc/150?img=1' },
            { name: 'Liam Moss', role: 'Soil & Nutrition', img: 'https://i.pravatar.cc/150?img=2' },
            { name: 'Mia Fern', role: 'Lighting & Placement', img: 'https://i.pravatar.cc/150?img=3' },
            { name: 'Noah Ivy', role: 'Pest Management', img: 'https://i.pravatar.cc/150?img=4' },
          ].map((e) => (
            <div key={e.name} className="p-4 rounded-lg border bg-white shadow-sm flex items-center gap-4">
              <img src={e.img} className="w-14 h-14 rounded-full object-cover"/>
              <div>
                <p className="font-semibold">{e.name}</p>
                <p className="text-sm text-gray-600">{e.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;