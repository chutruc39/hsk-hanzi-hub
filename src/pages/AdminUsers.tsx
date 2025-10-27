import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, Plus, Edit, Trash2, Shield, GraduationCap, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const mockUsers = [
    { id: 1, email: "user1@example.com", name: "Nguyễn Văn A", role: "student", createdAt: "2025-01-15", status: "active" },
    { id: 2, email: "user2@example.com", name: "Trần Thị B", role: "student", createdAt: "2025-01-20", status: "active" },
    { id: 3, email: "admin@example.com", name: "Admin", role: "admin", createdAt: "2025-01-01", status: "active" },
    { id: 4, email: "teacher@example.com", name: "Lê Văn C", role: "teacher", createdAt: "2025-01-22", status: "active" },
    { id: 5, email: "staff@example.com", name: "Phạm Thị D", role: "staff", createdAt: "2025-01-18", status: "active" },
    { id: 6, email: "user3@example.com", name: "Hoàng Văn E", role: "student", createdAt: "2025-01-25", status: "inactive" },
  ];

  const getRoleBadge = (role: string) => {
    switch(role) {
      case "admin":
        return { label: "Quản trị viên", color: "bg-primary/10 text-primary border-primary/20", icon: Shield };
      case "teacher":
        return { label: "Giáo viên", color: "bg-success/10 text-success border-success/20", icon: GraduationCap };
      case "staff":
        return { label: "Giáo vụ", color: "bg-secondary/10 text-secondary border-secondary/20", icon: ClipboardList };
      default:
        return { label: "Học viên", color: "bg-muted text-muted-foreground border-border", icon: null };
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        
        <main className="flex-1 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">Quản lý người dùng</h1>
            </div>
          </header>

          <div className="container py-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Danh sách người dùng</CardTitle>
                    <CardDescription>Quản lý tất cả người dùng trong hệ thống</CardDescription>
                  </div>
                  <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                    <DialogTrigger asChild>
                      <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Thêm người dùng
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Thêm người dùng mới</DialogTitle>
                        <DialogDescription>
                          Tạo tài khoản mới và phân quyền cho người dùng
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Họ và tên</Label>
                          <Input id="name" placeholder="Nhập họ tên" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="email@example.com" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="password">Mật khẩu</Label>
                          <Input id="password" type="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="role">Vai trò</Label>
                          <Select defaultValue="student">
                            <SelectTrigger id="role">
                              <SelectValue placeholder="Chọn vai trò" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">
                                <div className="flex items-center gap-2">
                                  <Shield className="h-4 w-4" />
                                  Quản trị viên
                                </div>
                              </SelectItem>
                              <SelectItem value="teacher">
                                <div className="flex items-center gap-2">
                                  <GraduationCap className="h-4 w-4" />
                                  Giáo viên
                                </div>
                              </SelectItem>
                              <SelectItem value="staff">
                                <div className="flex items-center gap-2">
                                  <ClipboardList className="h-4 w-4" />
                                  Giáo vụ
                                </div>
                              </SelectItem>
                              <SelectItem value="student">Học viên</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                          Hủy
                        </Button>
                        <Button onClick={() => setIsAddUserOpen(false)}>
                          Thêm người dùng
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Tìm kiếm người dùng..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Vai trò" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="admin">Quản trị viên</SelectItem>
                      <SelectItem value="teacher">Giáo viên</SelectItem>
                      <SelectItem value="staff">Giáo vụ</SelectItem>
                      <SelectItem value="student">Học viên</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Tên</TableHead>
                      <TableHead>Vai trò</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ngày tạo</TableHead>
                      <TableHead className="text-right">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.email}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>
                          {(() => {
                            const badge = getRoleBadge(user.role);
                            return (
                              <Badge variant="outline" className={`gap-1 ${badge.color}`}>
                                {badge.icon && <badge.icon className="h-3 w-3" />}
                                {badge.label}
                              </Badge>
                            );
                          })()}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                          </span>
                        </TableCell>
                        <TableCell>{user.createdAt}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminUsers;
