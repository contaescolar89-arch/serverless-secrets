import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface ContentCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const ContentCard = ({ title, description, children, icon: Icon, className = "" }: ContentCardProps) => {
  return (
    <Card className={`glass-card shadow-card hover:shadow-hover transition-smooth ${className}`}>
      <CardHeader>
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          )}
          <div>
            <CardTitle className="text-xl font-bold mb-1">{title}</CardTitle>
            {description && (
              <CardDescription className="text-sm">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContentCard;
