import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"


const Animedetail = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.jikan.moe/v4/anime/${id}`;

  useEffect(() => {
    const getAnimeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);

        setData(response.data.data);
      } catch (err) {
        setError('Failed to fetch Anime details!');
      } finally {
        setLoading(false);
      }
    }
    
    getAnimeDetails();
  }, [id]);

  if (error) return <h5>Error</h5>;
  if (loading) return <h5>Loading Anime Detail...</h5>;

  return (
    <>
      <h5>Animedetail</h5>
    </>
  )
}

export default Animedetail
