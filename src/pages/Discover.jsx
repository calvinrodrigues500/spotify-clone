import { Error, Loader, SongCard } from "../components"
import { genres } from "../assets/constants"

const Discover = () => {
  console.log('geners ', genres)

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
          {genres.map((genre, index) => {
            return <option key={index}>
              {genre.title}
            </option>
          })}

        </select>
      </div>
    </div>
  )
}

export default Discover