import Form from "./component/Form";
import ColorList from "./component/ColorList";
import { useState } from "react";

import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [clList, setClList] = useState(new Values("#000000").all(10));
  const addCl = (color) => {
    try {
      setClList(new Values(color).all(10));
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section>
      <Form addCl={addCl} />
      <ColorList clList={clList} />
      <ToastContainer position="top-center" />
    </section>
  );
};
export default App;
