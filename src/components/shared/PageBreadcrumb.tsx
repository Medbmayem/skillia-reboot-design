
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Fil d'Ariane" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-foreground transition-colors">Skillia</Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li>
              {item.href ? (
                <Link to={item.href} className="hover:text-foreground transition-colors">{item.label}</Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default PageBreadcrumb;
