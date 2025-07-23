import { Button } from "@/components/ui/button";
import { Search, Menu, User, Briefcase } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">JobStream</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Jobs</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Companies</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">For Employers</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-background border border-border rounded-lg px-3 py-2 space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="bg-transparent border-none outline-none text-sm w-48"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="default" size="sm">
                Sign Up
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;