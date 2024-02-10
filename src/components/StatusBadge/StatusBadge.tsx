import './StatusBadge.css';
import { memo } from 'react';
interface IStatusBadge {
  color: string;
  text: string;
}
const StatusBadge = memo(({ color, text }: IStatusBadge) => {
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
});

export default StatusBadge;
