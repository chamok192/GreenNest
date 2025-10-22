import axios from "axios";
import { useEffect, useState } from "react";

const usePlants = (url = "/plants.json") => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                if (mounted) {
                    setPlants(response.data);
                }
            })
            .catch((err) => {
                if (mounted) {
                    setError(err.message || "Failed to fetch plants");
                }
            })
            .finally(() => {
                if (mounted) {
                    setLoading(false);
                }
            });

        return () => {
            mounted = false;
        };
    }, [url]);

    const refetch = () => {
        setLoading(true);
        setError(null);
        axios
            .get(url)
            .then((response) => setPlants(response.data))
            .catch((err) => setError(err.message || "Failed to fetch plants"))
            .finally(() => setLoading(false));
    };

    return { plants, loading, error, refetch };
};

export default usePlants;