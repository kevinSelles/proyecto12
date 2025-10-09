import "./Tooltip.css";

const Tooltip = ({ visible, text }) => {
  if (!visible) return null;
  return <div className="tooltip">{text}</div>;
};

export default Tooltip;