import "./styles.css";
import Topbar from './topbar';
import FilterBox from './filterBy';
import Trending from './trending';
import BlogRender from "./renderdata";


function App() {

return(
  <div className="App">
    <Topbar />
    <main>
      <Trending />
      <FilterBox />
      <BlogRender />
    </main>
  </div>
);
}

export default App;