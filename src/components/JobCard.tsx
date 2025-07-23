import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  tags: string[];
  logo?: string;
}

const JobCard = ({ title, company, location, type, salary, posted, tags, logo }: JobCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center border border-border">
            {logo ? (
              <img src={logo} alt={company} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 bg-primary rounded text-primary-foreground text-sm font-bold flex items-center justify-center">
                {company.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
              {title}
            </h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          {type} • Posted {posted}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <DollarSign className="w-4 h-4 mr-2" />
          {salary}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" className="flex-1">
          View Details
        </Button>
        <Button variant="default" className="flex-1">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;