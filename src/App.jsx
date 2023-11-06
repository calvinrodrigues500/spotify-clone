import {Route, Routes} from "react-router-dom"
import { SideBar, SearchBar, TopPlay } from "./components"
import { Discover, TopArtists, TopCharts } from "./pages" 

const App = () => {
  return (
    <div className="relative flex">
      <SideBar />

      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          
          <Routes>
            <Route path="/" element={ <Discover /> } />
            <Route path="/top-artists" element={ <TopArtists /> } />
            <Route path="/top-charts" element={ <TopCharts /> } />
          </Routes>

        </div>

        <div className="xl:sticky relative top-0 h-fit">
          <TopPlay />
        </div>
      </div>
    </div>
  )
}

export default App