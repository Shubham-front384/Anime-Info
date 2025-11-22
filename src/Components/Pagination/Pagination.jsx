import { useNavigate } from "react-router-dom";

const Pagination = ({ page }) => {

  const navigate = useNavigate();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];

  page = Number(page);

  return (
    <>
      <div className="pagination pb-8 flex items-center justify-center flex-wrap">
        <div className="selected flex gap-4 text-xl">

          <button
            onClick={() => page > 1 && navigate(`/${page - 1}`)}
            className="px-4 py-2 bg-amber-300 text-black rounded-xl cursor-pointer active:scale-95"
          >
            Prev
          </button>

          {
            pages.map((ele, ind) => {
              return (
                <button key={ ind } onClick={() => navigate(`/${ele}`)} className="pagination-number px-4 py-2 bg-amber-300 text-black cursor-pointer capitalize rounded-xl active:scale-95">
                  { ele }
                </button>
              )
            })
          }

          <button
            onClick={() => navigate(`/${page + 1}`)}
            className="px-4 py-2 bg-amber-300 text-black rounded-xl cursor-pointer active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination
