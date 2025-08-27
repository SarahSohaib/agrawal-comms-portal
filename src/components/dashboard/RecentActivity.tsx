import { Clock, User, Calendar, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "member",
    title: "New member registered",
    description: "Rajesh Agrawal joined the association",
    time: "2 hours ago",
    icon: User,
    color: "bg-primary/10 text-primary"
  },
  {
    id: 2,
    type: "event",
    title: "Event created",
    description: "Diwali Celebration 2024 has been scheduled",
    time: "4 hours ago",
    icon: Calendar,
    color: "bg-secondary/10 text-secondary"
  },
  {
    id: 3,
    type: "job",
    title: "New job posting",
    description: "Software Engineer position at TechCorp",
    time: "6 hours ago",
    icon: Briefcase,
    color: "bg-accent/50 text-accent-foreground"
  },
  {
    id: 4,
    type: "member",
    title: "Profile updated",
    description: "Priya Agrawal updated her contact information",
    time: "1 day ago",
    icon: User,
    color: "bg-primary/10 text-primary"
  },
  {
    id: 5,
    type: "event",
    title: "Event completed",
    description: "Monthly Meet successfully concluded",
    time: "2 days ago",
    icon: Calendar,
    color: "bg-green-100 text-green-700"
  }
];

export const RecentActivity = () => {
  return (
    <Card className="card-elevated">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Badge variant="secondary" className="text-xs">
          Live
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <activity.icon size={16} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.description}
                </p>
                <div className="flex items-center mt-2">
                  <Clock size={12} className="text-muted-foreground mr-1" />
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};