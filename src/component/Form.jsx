import { useState } from "react";
import Values from "values.js";

const Form = ({ addCl }) => {
  const [color, setColor] = useState("#000000");
  const handleFormsub = (e) => {
    e.preventDefault();
    addCl(color);
  };
  return (
    <section className="container">
      <h4>color generater</h4>
      <form className="color-form " onSubmit={handleFormsub}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />

        <input
          type="text"
          value={color}
          placeholder="#00000"
          max={6}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
