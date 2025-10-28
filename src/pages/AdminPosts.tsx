import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminPosts = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Hướng dẫn học HSK 1 hiệu quả",
      author: "Admin",
      category: "Hướng dẫn",
      status: "published",
      views: 1234,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "10 từ vựng HSK 2 thường gặp nhất",
      author: "Giáo viên A",
      category: "Từ vựng",
      status: "published",
      views: 856,
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Tips học tiếng Trung cho người mới bắt đầu",
      author: "Giáo viên B",
      category: "Tips",
      status: "draft",
      views: 0,
      date: "2024-01-13",
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Đã xuất bản</Badge>;
      case "draft":
        return <Badge variant="secondary">Bản nháp</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        
        <main className="flex-1 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <AdminHeader />

          <div className="container py-8 space-y-8">
            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Tổng bài viết</CardDescription>
                  <CardTitle className="text-3xl">156</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Đã xuất bản</CardDescription>
                  <CardTitle className="text-3xl">142</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Bản nháp</CardDescription>
                  <CardTitle className="text-3xl">14</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Tổng lượt xem</CardDescription>
                  <CardTitle className="text-3xl">45.2K</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Create Post Form */}
            <Card>
              <CardHeader>
                <CardTitle>Tạo bài viết mới</CardTitle>
                <CardDescription>Thêm bài viết mới vào hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Tiêu đề</Label>
                      <Input id="title" placeholder="Nhập tiêu đề bài viết" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Danh mục</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn danh mục" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="guide">Hướng dẫn</SelectItem>
                          <SelectItem value="vocab">Từ vựng</SelectItem>
                          <SelectItem value="tips">Tips</SelectItem>
                          <SelectItem value="news">Tin tức</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Nội dung</Label>
                    <Textarea 
                      id="content" 
                      placeholder="Nhập nội dung bài viết" 
                      className="min-h-[200px]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">
                      <Plus className="mr-2 h-4 w-4" />
                      Xuất bản
                    </Button>
                    <Button type="button" variant="outline">
                      Lưu nháp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Posts List */}
            <Card>
              <CardHeader>
                <CardTitle>Danh sách bài viết</CardTitle>
                <CardDescription>Quản lý tất cả bài viết trên hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tiêu đề</TableHead>
                      <TableHead>Tác giả</TableHead>
                      <TableHead>Danh mục</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Lượt xem</TableHead>
                      <TableHead>Ngày đăng</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{post.category}</Badge>
                        </TableCell>
                        <TableCell>{getStatusBadge(post.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            {post.views}
                          </div>
                        </TableCell>
                        <TableCell>{post.date}</TableCell>
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

export default AdminPosts;
