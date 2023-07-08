import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";

function App() {
  const cardArr = Array(8).fill(1);

  return (
    <>
      <Header />
      <main>
        <Form />
        <section>
          <div className="container">
            <ul className="d-flex flex-wrap justify-content-between ps-0">
              {cardArr.map((item, index) => (
                <Card key={index} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
