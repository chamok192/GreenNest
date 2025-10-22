import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch('/plants.json');
        const data = await res.json();
        setPlants(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  if (loading) return <div className="min-h-[50vh] flex items-center justify-center">Loading plants...</div>;

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {plants.map((p) => (
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
  );
};

export default Plants;
