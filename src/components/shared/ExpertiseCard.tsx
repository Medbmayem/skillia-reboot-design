
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExpertiseCardProps {
  tag: string;
  title: string;
  problem: string;
  offers: string[];
  href: string;
  accentColor?: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ tag, title, problem, offers, href, accentColor = 'skillia-navy' }) => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    'skillia-navy': { bg: 'bg-skillia-navy-light', text: 'text-skillia-navy', border: 'border-skillia-navy' },
    'skillia-purple': { bg: 'bg-skillia-purple-light', text: 'text-skillia-purple', border: 'border-skillia-purple' },
    'skillia-teal': { bg: 'bg-skillia-teal-light', text: 'text-skillia-teal', border: 'border-skillia-teal' },
    'skillia-amber': { bg: 'bg-skillia-amber-light', text: 'text-skillia-amber-dark', border: 'border-skillia-amber' },
  };

  const colors = colorMap[accentColor] || colorMap['skillia-navy'];

  return (
    <div className={`bg-card rounded-lg border p-6 md:p-8 hover:shadow-md transition-shadow group`}>
      <span className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${colors.bg} ${colors.text} mb-4`}>
        {tag}
      </span>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{problem}</p>
      <ul className="space-y-2 mb-6">
        {offers.map((offer, i) => (
          <li key={i} className="text-sm flex items-start gap-2">
            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.bg.replace('light', '')}`} style={{ backgroundColor: accentColor === 'skillia-navy' ? '#1A2B4A' : accentColor === 'skillia-purple' ? '#534AB7' : accentColor === 'skillia-teal' ? '#0F6E56' : '#C8943A' }} />
            {offer}
          </li>
        ))}
      </ul>
      <Link to={href} className={`inline-flex items-center text-sm font-medium ${colors.text} group-hover:gap-2 transition-all gap-1`}>
        Approfondir <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default ExpertiseCard;
