import { StatsCards } from "./StatsCards";
import { RecentActivity } from "./RecentActivity";
import { EventsCalendar } from "./EventsCalendar";
import { QuickActions } from "./QuickActions";
import { ExecutiveSpotlight } from "./ExecutiveSpotlight";

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground shadow-medium">
        <h1 className="text-2xl font-bold mb-2">Welcome to APCA Admin Portal</h1>
        <p className="text-primary-foreground/90">
          Manage your community with powerful tools and insights
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ExecutiveSpotlight />
          <EventsCalendar />
        </div>
      </div>
    </div>
  );
};