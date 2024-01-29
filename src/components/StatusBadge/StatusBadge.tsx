import './StatusBadge.css';
interface IStatusBadge {
  color: string;
  text: string;
}
const StatusBadge = ({ color, text }: IStatusBadge) => {
  return (
    <div
      className="status-badge"
      style={{
        color,
        backgroundColor: `${color}33`
      }}
    >
      {text}
    </div>
  );
};

export default StatusBadge;
