import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Diwali Celebration 2024",
    date: "Nov 15, 2024",
    time: "6:00 PM",
    location: "Community Hall",
    attendees: 150,
    type: "festival",
    color: "bg-secondary/10 text-secondary"
  },
  {
    id: 2,
    title: "Business Networking Meet",
    date: "Nov 22, 2024",
    time: "10:00 AM",
    location: "Hotel Radisson",
    attendees: 75,
    type: "business",
    color: "bg-primary/10 text-primary"
  },
  {
    id: 3,
    title: "Cultural Program",
    date: "Dec 5, 2024",
    time: "7:00 PM",
    location: "Auditorium",
    attendees: 200,
    type: "cultural",
    color: "bg-accent/50 text-accent-foreground"
  }
];

const birthdayWishes = [
  { name: "Rajesh Agrawal", date: "Today" },
  { name: "Priya Sharma", date: "Tomorrow" },
  { name: "Amit Kumar", date: "Nov 20" }
];

export const EventsCalendar = () => {
  return (
    <div className="space-y-4">
      {/* Upcoming Events */}
      <Card className="card-elevated">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Calendar size={18} className="mr-2 text-primary" />
            Upcoming Events
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {upcomingEvents.length} Active
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {event.title}
                  </h4>
                  <Badge className={`text-xs ${event.color}`}>
                    {event.type}
                  </Badge>
                </div>
                
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-2" />
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={12} className="mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users size={12} className="mr-2" />
                    {event.attendees} expected
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4 hover-lift">
            View Calendar
          </Button>
        </CardContent>
      </Card>

      {/* Birthday Wishes */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            🎂 Birthday Wishes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {birthdayWishes.map((person, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <span className="text-sm font-medium">{person.name}</span>
                <Badge variant="outline" className="text-xs">
                  {person.date}
                </Badge>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4 hover-lift">
            View All Wishes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};