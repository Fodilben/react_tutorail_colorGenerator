import { toast } from "react-toastify";
const SinlgeColor = ({ singleColor }) => {
  const { type, weight, hex } = singleColor;
  const saveTOClib = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (err) {
        toast.error("faild to copy to clipboard");
      }
    } else {
      toast.error("Clipboard access not avalibale");
    }
  };
  return (
    <div
      className={type === "tint" ? "color" : "color color-light "}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveTOClib}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};
export default SinlgeColor;
