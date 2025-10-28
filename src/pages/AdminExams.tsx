import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, FileText, Clock, Target, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AdminExams = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const mockExams = [
    { 
      id: 1, 
      title: "Đề thi thử HSK 1 - Tháng 1", 
      level: "HSK 1", 
      questions: 25, 
      duration: 45, 
      participants: 45,
      status: "active",
      createdAt: "2025-01-15"
    },
    { 
      id: 2, 
      title: "Đề thi thử HSK 2 - Giữa kỳ", 
      level: "HSK 2", 
      questions: 40, 
      duration: 60, 
      participants: 32,
      status: "active",
      createdAt: "2025-01-20"
    },
    { 
      id: 3, 
      title: "Đề thi thử HSK 3 - Tổng hợp", 
      level: "HSK 3", 
      questions: 60, 
      duration: 90, 
      participants: 28,
      status: "draft",
      createdAt: "2025-01-22"
    },
    { 
      id: 4, 
      title: "Đề thi thử HSK 4 - Nâng cao", 
      level: "HSK 4", 
      questions: 80, 
      duration: 120, 
      participants: 15,
      status: "archived",
      createdAt: "2025-01-10"
    },
  ];

  const stats = [
    { title: "Tổng đề thi", value: "24", icon: FileText, color: "text-primary" },
    { title: "Đề đang hoạt động", value: "12", icon: Target, color: "text-success" },
    { title: "Tổng thí sinh", value: "350", icon: Users, color: "text-secondary" },
    { title: "Thời lượng TB", value: "75 phút", icon: Clock, color: "text-accent" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        
        <main className="flex-1 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <AdminHeader />

          <div className="container py-8 space-y-8">
            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Exams List */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Danh sách đề thi</CardTitle>
                    <CardDescription>Quản lý tất cả đề thi thử trong hệ thống</CardDescription>
                  </div>
                  <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogTrigger asChild>
                      <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Tạo đề thi mới
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Tạo đề thi thử mới</DialogTitle>
                        <DialogDescription>
                          Điền thông tin để tạo đề thi thử cho học viên
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="title">Tiêu đề đề thi</Label>
                          <Input id="title" placeholder="VD: Đề thi thử HSK 1 - Tháng 1" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="level">Cấp độ</Label>
                          <Select>
                            <SelectTrigger id="level">
                              <SelectValue placeholder="Chọn cấp độ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hsk1">HSK 1</SelectItem>
                              <SelectItem value="hsk2">HSK 2</SelectItem>
                              <SelectItem value="hsk3">HSK 3</SelectItem>
                              <SelectItem value="hsk4">HSK 4</SelectItem>
                              <SelectItem value="hsk5">HSK 5</SelectItem>
                              <SelectItem value="hsk6">HSK 6</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="questions">Số câu hỏi</Label>
                            <Input id="questions" type="number" placeholder="25" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="duration">Thời gian (phút)</Label>
                            <Input id="duration" type="number" placeholder="45" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="description">Mô tả</Label>
                          <Textarea 
                            id="description" 
                            placeholder="Mô tả ngắn về đề thi..."
                            rows={3}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label>Cấu trúc đề thi</Label>
                          <div className="space-y-2">
                            <div className="flex gap-2">
                              <Input placeholder="Phần 1: Nghe" className="flex-1" />
                              <Input type="number" placeholder="Số câu" className="w-24" />
                            </div>
                            <div className="flex gap-2">
                              <Input placeholder="Phần 2: Đọc" className="flex-1" />
                              <Input type="number" placeholder="Số câu" className="w-24" />
                            </div>
                            <div className="flex gap-2">
                              <Input placeholder="Phần 3: Viết" className="flex-1" />
                              <Input type="number" placeholder="Số câu" className="w-24" />
                            </div>
                            <Button variant="outline" size="sm" className="gap-2">
                              <Plus className="h-3 w-3" />
                              Thêm phần
                            </Button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                          Hủy
                        </Button>
                        <Button onClick={() => setIsCreateOpen(false)}>
                          Tạo đề thi
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2">
                  <Input placeholder="Tìm kiếm đề thi..." className="flex-1" />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="active">Đang hoạt động</SelectItem>
                      <SelectItem value="draft">Bản nháp</SelectItem>
                      <SelectItem value="archived">Đã lưu trữ</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Cấp độ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="hsk1">HSK 1</SelectItem>
                      <SelectItem value="hsk2">HSK 2</SelectItem>
                      <SelectItem value="hsk3">HSK 3</SelectItem>
                      <SelectItem value="hsk4">HSK 4</SelectItem>
                      <SelectItem value="hsk5">HSK 5</SelectItem>
                      <SelectItem value="hsk6">HSK 6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tiêu đề</TableHead>
                      <TableHead>Cấp độ</TableHead>
                      <TableHead>Số câu</TableHead>
                      <TableHead>Thời lượng</TableHead>
                      <TableHead>Thí sinh</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ngày tạo</TableHead>
                      <TableHead className="text-right">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockExams.map((exam) => (
                      <TableRow key={exam.id}>
                        <TableCell className="font-medium">{exam.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {exam.level}
                          </Badge>
                        </TableCell>
                        <TableCell>{exam.questions} câu</TableCell>
                        <TableCell>{exam.duration} phút</TableCell>
                        <TableCell>{exam.participants} người</TableCell>
                        <TableCell>
                          <Badge 
                            variant={exam.status === 'active' ? 'default' : exam.status === 'draft' ? 'secondary' : 'outline'}
                            className={
                              exam.status === 'active' ? 'bg-success/10 text-success border-success/20' :
                              exam.status === 'draft' ? 'bg-secondary/10 text-secondary border-secondary/20' :
                              'bg-muted text-muted-foreground'
                            }
                          >
                            {exam.status === 'active' ? 'Đang hoạt động' :
                             exam.status === 'draft' ? 'Bản nháp' : 'Đã lưu trữ'}
                          </Badge>
                        </TableCell>
                        <TableCell>{exam.createdAt}</TableCell>
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

export default AdminExams;
