import { Plus, Upload, FileText, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "Add New Member",
    description: "Register a new member to the association",
    icon: Plus,
    variant: "default" as const,
    action: () => console.log("Add member")
  },
  {
    title: "Bulk Import",
    description: "Import members from CSV/Excel file",
    icon: Upload,
    variant: "secondary" as const,
    action: () => console.log("Bulk import")
  },
  {
    title: "Create Event",
    description: "Schedule a new community event",
    icon: FileText,
    variant: "outline" as const,
    action: () => console.log("Create event")
  },
  {
    title: "Send Newsletter",
    description: "Compose and send newsletter to members",
    icon: Send,
    variant: "outline" as const,
    action: () => console.log("Send newsletter")
  }
];

export const QuickActions = () => {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start text-left hover-lift"
              onClick={action.action}
            >
              <div className="flex items-center mb-2">
                <action.icon size={18} className="mr-2" />
                <span className="font-medium">{action.title}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {action.description}
              </p>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};