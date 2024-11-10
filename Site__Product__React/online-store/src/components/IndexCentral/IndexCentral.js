import IndexInfo from "./IndexInfo";
import IndexProducts from "./IndexProducts";
import IndexProposals from "./IndexProposals";
import "./style/style.css";

function IndexCentral() {
  return (
    <>
      <IndexInfo/>
      <IndexProposals/>
      <IndexProducts/>
    </>
  );
}

export default IndexCentral;