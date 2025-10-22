import usePlants from '../Hooks/usePlants'; 

const TopPlants = () => {
    const { plants, loading, error } = usePlants();

    const topPlants = plants.slice(0, 5);

    console.log(topPlants);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Top Plants</h2>
            <ul className="space-y-2">
                {topPlants.map((plant, plantId) => (
                    <li key={plantId} className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                        {plant.plantName || `Plant ${plantId + 1}`} {}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopPlants;