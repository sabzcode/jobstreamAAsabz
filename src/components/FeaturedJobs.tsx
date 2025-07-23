import { Button } from "@/components/ui/button";
import JobCard from "./JobCard";
import { ArrowRight } from "lucide-react";

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      id: "1",
      title: "Frontend Software Engineer",
      company: "Tesla",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹13 - ₹20LPA",
      posted: "2 days ago",
     // time: "12:10-1:10",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k",
      posted: "1 day ago",
      tags: ["Strategy", "Analytics", "SaaS"]
    },
    {
      id: "3",
      title: "UX Designer",
      company: "DesignStudio",
      location: "Austin, TX",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "3 days ago",
      tags: ["Figma", "User Research", "Mobile"]
    },
    {
      id: "4",
      title: "Data Scientist",
      company: "DataFlow Systems",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "4 days ago",
      tags: ["Python", "Machine Learning", "SQL"]
    },
    {
      id: "5",
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Remote",
      type: "Full-time",
      salary: "$95k - $125k",
      posted: "1 week ago",
      tags: ["AWS", "Docker", "Kubernetes"]
    },
    {
      id: "6",
      title: "Marketing Manager",
      company: "GrowthCo",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$85k - $110k",
      posted: "5 days ago",
      tags: ["Digital Marketing", "SEO", "Content"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked job opportunities from top companies across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Jobs
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;