import Banner from "../components/banner/Banner"
import AccueilChat from "../components/accueil/AccueilChat"
import AccueilMoney from "../components/accueil/AccueilMoney"
import AccueilSecurity from "../components/accueil/AccueilSecurity"
import "../style/IndexHome.css"

function Home() {
  return (
    <div className="pageContainer">
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <AccueilChat />
        <AccueilMoney />
        <AccueilSecurity />
      </section>
    </div>
  );
}

export default Home;