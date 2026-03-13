type Props = { title: string; subtitle?: string; breadcrumb?: string };

export const PageHeader = ({ title, subtitle, breadcrumb }: Props) => (
  <div className="text-center py-4">
    {breadcrumb && <div className="text-muted mb-2">{breadcrumb}</div>}
    <h1 className="h2">{title}</h1>
    {subtitle && <p className="text-muted">{subtitle}</p>}
  </div>
);