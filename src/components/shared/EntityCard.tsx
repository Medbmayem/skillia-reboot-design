
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EntityCardProps {
  name: string;
  role: string;
  offers: string[];
  href: string;
  accentColor: string;
}

const EntityCard: React.FC<EntityCardProps> = ({ name, role, offers, href, accentColor }) => {
  return (
    <div className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-8 rounded-full" style={{ backgroundColor: accentColor }} />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{role}</p>
      <ul className="space-y-1.5 mb-5">
        {offers.map((offer, i) => (
          <li key={i} className="text-sm text-muted-foreground">• {offer}</li>
        ))}
      </ul>
      <Link to={href} className="inline-flex items-center text-sm font-medium text-foreground hover:gap-2 transition-all gap-1">
        En savoir plus <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default EntityCard;
