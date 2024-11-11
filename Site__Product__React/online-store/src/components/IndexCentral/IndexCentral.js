import IndexInfo from "./IndexInfo";
import IndexProducts from "./IndexProducts";
import IndexProposals from "./IndexProposals";
import '../../Style/StyleIndex/style.css';


function IndexCentral() {
  return (
    <main className="main">
      <IndexInfo/>
      <IndexProposals/>
      <IndexProducts/>
    </main>
  );
}

export default IndexCentral;