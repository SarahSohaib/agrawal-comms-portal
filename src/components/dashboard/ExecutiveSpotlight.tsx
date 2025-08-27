import { Crown, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const executives = [
  {
    name: "Dr. Suresh Agrawal",
    role: "President",
    email: "president@apca.org",
    phone: "+91 98765 43210",
    tenure: "2024-2025",
    image: "SA"
  },
  {
    name: "Mrs. Kavita Agrawal",
    role: "Vice President",
    email: "vp@apca.org",
    phone: "+91 98765 43211",
    tenure: "2024-2025",
    image: "KA"
  },
  {
    name: "Mr. Amit Agrawal",
    role: "Secretary",
    email: "secretary@apca.org",
    phone: "+91 98765 43212",
    tenure: "2024-2025",
    image: "AA"
  }
];

export const ExecutiveSpotlight = () => {
  return (
    <Card className="card-elevated">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Crown size={18} className="mr-2 text-primary" />
          Executive Committee
        </CardTitle>
        <Badge className="bg-gradient-primary text-primary-foreground">
          2024-25
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {executives.map((exec) => (
            <div key={exec.name} className="p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                  {exec.image}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {exec.name}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {exec.role}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">
                    Tenure: {exec.tenure}
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      <Mail size={12} className="mr-1" />
                      Email
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      <Phone size={12} className="mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4 hover-lift">
          View All Executives
        </Button>
      </CardContent>
    </Card>
  );
};