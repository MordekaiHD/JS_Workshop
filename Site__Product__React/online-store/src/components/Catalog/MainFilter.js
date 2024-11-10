import FilterExtensive from "./FilterOptions/FilterExtensive";
import FilterSort from "./FilterOptions/FilterSort";

function MainFilter() {
  return (
    <div className="main__filter">
      <FilterExtensive />
      <FilterSort />
    </div>
  );
}

export default MainFilter;