import React from 'react';
import AuditForm from '@/components/forms/AuditForm';

export const LeadMagnetSection: React.FC = () => (
  <div>
    <h2 className="h3 mb-4">Get a free website audit</h2>
    <div className="row">
      <div className="col-md-6">
        <p className="text-muted">Get an expert review of conversion blockers and quick wins.</p>
      </div>
      <div className="col-md-6">
        <AuditForm />
      </div>
    </div>
  </div>
);

export default LeadMagnetSection;
