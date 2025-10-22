import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const PlantDetails = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch('/plants.json');
        const data = await res.json();
        const found = data.find((p) => String(p.plantId) === String(plantId));
        setPlant(found || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, [plantId]);

  const unavailable = useMemo(() => (plant ? plant.availableStock <= 0 : false), [plant]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (unavailable) return toast.error('Out of stock');
    toast.success('Consultation booked');
    setName('');
    setEmail('');
  };

  if (loading) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;
  if (!plant) return <div className="p-6">Plant not found</div>;

  return (
    <div className="p-6 grid lg:grid-cols-2 gap-8">
      <div>
        <img src={plant.image} alt={plant.plantName} className="w-full rounded-lg shadow"/>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-2">{plant.plantName}</h2>
        <p className="text-gray-700 mb-4">{plant.description}</p>
        <div className="space-y-1 mb-6">
          <p><span className="font-semibold">Category:</span> {plant.category}</p>
          <p><span className="font-semibold">Care Level:</span> {plant.careLevel}</p>
          <p><span className="font-semibold">Rating:</span> ⭐ {plant.rating}</p>
          <p><span className="font-semibold">Price:</span> ${plant.price}</p>
          <p><span className="font-semibold">Stock:</span> {plant.availableStock}</p>
          <p><span className="font-semibold">Provider:</span> {plant.providerName}</p>
        </div>

        <h3 className="text-xl font-semibold mb-2">Book Consultation</h3>
        <form onSubmit={onSubmit} className="space-y-3 max-w-md">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <button className="btn bg-[#227540] text-white" disabled={unavailable}>Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
