import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome!</h2>
        <p>
          QuesTales is a community driven choose your own adventure app for
          writing and reading adventures.
        </p>
        <p>
          It's simple: start with one chapter and add up to 3 forks in the
          story. For each fork, add up to 3 more. And so on and so on until you
          are satisfied with your adventure. Then publish it for others to
          enjoy!
        </p>
        <a href="#" className="button">
          Get started!
        </a>
      </main>
      <Footer />
    </>
  );
};

export default Home;
