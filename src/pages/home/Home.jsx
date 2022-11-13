import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import Listcontinue from "../../components/list/Listcontinue";
import Listpopular from "../../components/list/Listpopular"
import Listtrend from "../../components/list/Listtrend"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Series"/>
      <Listcontinue />
      <Listpopular />
      <Listtrend />
    </div>
  );
};

export default Home;