import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Layout from "./components/Layout";

function App() {
  return (
    // div only for styling purposes - the background lines
    <div className="bg-lines bg-right-standard min-h-screen bg-no-repeat">
      <Layout>
        <Hero />
        <Gallery />
        <Info />
      </Layout>
    </div>
  );
}

export default App;
