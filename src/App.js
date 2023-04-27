import { useState } from "react";
import Form from "./components/Form/Form";
import Container from "./components/Show/Container";

function App() {
  const [data, setData] = useState([]);

  function dataHandler(data) {
    setData((pre) => {
      return [...pre, data];
    });
  }
  function delHandler(d) {
    setData((r) => {
      return r.filter((e) => e.id.toString() !== d);
    });
  }
  console.log(data);
  return (
    <div>
      <Form data={dataHandler} />
      <Container data={data} del={delHandler} />
    </div>
  );
}
export default App;
