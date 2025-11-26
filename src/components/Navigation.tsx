import { NavLink } from "./NavLink";
import { Cloud, Code, Lightbulb } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Conceitos Fundamentais", icon: Lightbulb },
    { to: "/azure-functions", label: "Azure Functions", icon: Code },
    { to: "/casos-uso", label: "Casos de Uso", icon: Cloud },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-azure flex items-center justify-center shadow-glow">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Azure Serverless
            </h1>
          </div>
          
          <div className="flex gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                activeClassName="text-primary bg-primary/5 shadow-card"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
