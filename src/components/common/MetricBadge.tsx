type Props = { stat: string | number; label: string };

export const MetricBadge = ({ stat, label }: Props) => (
  <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded border">
    <div className="fw-bold">{stat}</div>
    <div className="text-muted">{label}</div>
  </div>
);