import { Search, Users, Target, Shield, TrendingUp, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Job Matching",
      description: "Our AI-powered algorithm matches you with jobs that fit your skills and preferences perfectly."
    },
    {
      icon: Users,
      title: "Top Companies",
      description: "Connect with leading companies across all industries, from startups to Fortune 500."
    },
    {
      icon: Target,
      title: "Targeted Applications",
      description: "Apply to jobs with one click and track your application status in real-time."
    },
    {
      icon: Shield,
      title: "Verified Employers",
      description: "All employers are verified to ensure legitimate opportunities and safe job hunting."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access career resources, salary insights, and professional development opportunities."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant notifications about new job matches and application updates."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">JobStream?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make job searching simple, efficient, and successful with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;