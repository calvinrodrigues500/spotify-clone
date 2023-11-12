import { Error, Loader, SongCard } from "../components"
import { genres } from "../assets/constants"
import { useGetRecommendedQuery } from '../redux/services/deezer';

const Discover = () => {

  // const { data, isFetching, error } = useGetRecommendedQuery();

  const data = [];

  console.log('--------- ', data?.results);

  // if (isFetching) {
  //   return <Loader/>
  // }

  const genreTitle = 'Pop';

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          onChange={() => { }}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-5 border-none"
        >
          {genres.map((genre) => {
            return <option
              key={genre.value}
              value={genre.value}>
              {genre.title}
            </option>
          })}

        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.results?.map((video) => (
          <SongCard 
            key={video.videoId}
            video={ video }
          />
        ))}
      </div>
    </div>
  )
}

export default Discover