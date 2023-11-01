import SinlgeColor from "./SinlgeColor";

import { nanoid } from "nanoid";
const ColorList = ({ clList }) => {
  return (
    <div className="colors">
      {clList.map((singleColor) => {
        const id = nanoid();

        return <SinlgeColor key={id} singleColor={singleColor} />;
      })}
    </div>
  );
};
export default ColorList;
