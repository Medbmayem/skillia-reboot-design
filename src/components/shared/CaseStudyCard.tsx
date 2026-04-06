
import React from 'react';

interface CaseStudyCardProps {
  sector: string;
  challenge: string;
  solution: string;
  result: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ sector, challenge, solution, result }) => {
  return (
    <div className="bg-card rounded-lg border p-6">
      <span className="text-xs font-semibold tracking-wider uppercase text-skillia-amber mb-3 block">{sector}</span>
      <p className="text-sm font-medium mb-2">{challenge}</p>
      <p className="text-sm text-muted-foreground mb-3">{solution}</p>
      <p className="text-sm font-semibold text-skillia-teal">{result}</p>
    </div>
  );
};

export default CaseStudyCard;
