import { Users, Calendar, Briefcase, Heart, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    name: "Total Members",
    value: "2,847",
    change: "+12%",
    changeType: "increase" as const,
    icon: Users,
    color: "text-primary"
  },
  {
    name: "Active Events",
    value: "23",
    change: "+3",
    changeType: "increase" as const,
    icon: Calendar,
    color: "text-secondary"
  },
  {
    name: "Job Postings",
    value: "156",
    change: "+8%",
    changeType: "increase" as const,
    icon: Briefcase,
    color: "text-accent-foreground"
  },
  {
    name: "Matrimony Profiles",
    value: "89",
    change: "-2%",
    changeType: "decrease" as const,
    icon: Heart,
    color: "text-destructive"
  }
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="card-elevated hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'increase' ? (
                    <TrendingUp size={14} className="text-green-600 mr-1" />
                  ) : (
                    <TrendingDown size={14} className="text-red-600 mr-1" />
                  )}
                  <span className={`text-xs font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              
              <div className={`p-3 rounded-lg bg-muted/50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};