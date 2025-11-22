import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Detailleft from "./Detailleft";
import Detailright from "./Detailright";


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
      <div className="main-details flex flex-col py-8 px-8 justify-center gap-4">
        <div className="main-heading border-2 py-2 px-4">
          <h4 className="anime-heading text-xl text-white font-semibold">
            { data.title }
          </h4>
          <h5 className="anime-title text-lg text-gray-400 font-semibold">
            { data.title_english }
          </h5>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 md:flex-row">
          <Detailleft details={data} />
          <Detailright details={data} />
        </div>
      </div>
    </>
  )
}

export default Animedetail
