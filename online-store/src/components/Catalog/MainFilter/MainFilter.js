import FilterExtensive from "../MainFilter/FilterOptions/FilterExtensive";
import FilterSort from "../MainFilter/FilterOptions/FilterSort";

function MainFilter() {
  return (
    <div className="main__filter">
      <FilterExtensive />
      <FilterSort />
    </div>
  );
}

export default MainFilter;