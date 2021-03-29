import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return (
    <div className="container mt-4">
      <Layout />
      <BurgerBuilder />
    </div>
  );
};

export default App;
