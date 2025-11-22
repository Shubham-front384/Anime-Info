import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

import Pagination from '../Pagination/Pagination';

const Cards = () => {
  const [urlData, setUrlData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNull, setIsNull] = useState(null);

  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const page = pageNumber || 1;

  const URL_API = `https://api.jikan.moe/v4/anime?page=${page}`;

  useEffect(() => {
    const getDataFromUrl = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URL_API);

        setUrlData(data.data.data);
      } catch (err) {
        setIsNull('Failed to fetch Anime data!');
      } finally {
        setLoading(false);
      }
    };

    getDataFromUrl();
  }, [page]);

  if (isNull) return <h5>Error</h5>;
  if (loading) return <h5>Loading Anime...</h5>;

  return (
    <>
      <div className="cards flex flex-wrap items-start justify-evenly gap-y-5 py-8">
        {urlData.map((ele, index) => {
          return (
            <div className="card w-45 md:w-72 md:h-[400px] relative cursor-pointer" key={ index } onClick={() => navigate(`/anime/${ele.mal_id}`)}>
              <img
                src={ele.images.jpg.image_url}
                alt="anime-img"
                className="card-img w-full h-[210px] md:h-[350px]"
              />
              <div className="rating-count-list">
                <div className="rating-count px-4 py-2.5 flex-col gap-2 w-max bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/30 backdrop-saturate-150 absolute bottom-20 hidden md:flex">
                  <div className="rating flex items-center justify-between gap-2 text-black">
                    <h5 className="rating-heading">{ ele.score || "N/A" }</h5>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className="count flex items-center justify-between gap-2 text-black">
                    <h5 className="count-heading">{ ele.members.toLocaleString() }</h5>
                    <i className="ri-user-line"></i>
                  </div>
                </div>
                <div className="list px-4 py-2.5 w-max bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/30 backdrop-saturate-150 absolute bottom-24 right-0 text-black">
                  <i className="ri-list-check"></i>
                </div>
              </div>

              <div className="card-info pt-2">
                <h5 className="card-name capitalize text-lg font-semibold break-words line-clamp-2">{ ele.title }</h5>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination page={ page } />
    </>
  );
};

export default Cards;
