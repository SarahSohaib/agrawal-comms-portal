import { useState } from "react";
import { MoreHorizontal, Search, Filter, Download, Upload, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const members = [
  {
    id: "APL001",
    name: "Rajesh Agrawal",
    email: "rajesh@email.com",
    phone: "+91 98765 43210",
    address: "Mumbai, Maharashtra",
    dob: "1985-06-15",
    status: "Active",
    joinDate: "2020-01-15"
  },
  {
    id: "APL002",
    name: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 98765 43211",
    address: "Delhi, NCR",
    dob: "1990-03-22",
    status: "Active",
    joinDate: "2021-03-10"
  },
  {
    id: "APL003",
    name: "Amit Kumar",
    email: "amit@email.com",
    phone: "+91 98765 43212",
    address: "Pune, Maharashtra",
    dob: "1988-11-08",
    status: "Inactive",
    joinDate: "2019-08-20"
  },
  {
    id: "APL004",
    name: "Kavita Agrawal",
    email: "kavita@email.com",
    phone: "+91 98765 43213",
    address: "Bangalore, Karnataka",
    dob: "1992-07-12",
    status: "Active",
    joinDate: "2022-05-18"
  },
  {
    id: "APL005",
    name: "Suresh Agrawal",
    email: "suresh@email.com",
    phone: "+91 98765 43214",
    address: "Chennai, Tamil Nadu",
    dob: "1980-02-28",
    status: "Active",
    joinDate: "2018-12-05"
  }
];

export const MembersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || member.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
    ) : (
      <Badge variant="secondary">Inactive</Badge>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Members Management</h1>
          <p className="text-muted-foreground">Manage association members and their profiles</p>
        </div>
        <Button className="btn-primary">
          <Plus size={16} className="mr-2" />
          Add Member
        </Button>
      </div>

      {/* Filters and Actions */}
      <Card className="card-elevated">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search and Filter */}
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder="Search by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" className="hover-lift">
                <Download size={16} className="mr-2" />
                Export
              </Button>
              <Button variant="outline" className="hover-lift">
                <Upload size={16} className="mr-2" />
                Import
              </Button>
              <Button variant="outline" className="hover-lift">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members Table */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Members List ({filteredMembers.length})</span>
            <Badge variant="secondary" className="text-xs">
              Total: {members.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{member.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{member.phone}</div>
                        <div className="text-muted-foreground">DOB: {new Date(member.dob).toLocaleDateString()}</div>
                      </div>
                    </TableCell>
                    <TableCell>{member.address}</TableCell>
                    <TableCell>{getStatusBadge(member.status)}</TableCell>
                    <TableCell>{new Date(member.joinDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="hover:bg-accent">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye size={16} className="mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit size={16} className="mr-2" />
                            Edit Member
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 size={16} className="mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No members found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};