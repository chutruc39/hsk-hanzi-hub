import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  Search,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - sẽ thay bằng dữ liệu thực từ database
  const mockUsers = [
    { id: 1, email: "user1@example.com", name: "Nguyễn Văn A", role: "user", createdAt: "2025-01-15" },
    { id: 2, email: "user2@example.com", name: "Trần Thị B", role: "user", createdAt: "2025-01-20" },
    { id: 3, email: "admin@example.com", name: "Admin", role: "admin", createdAt: "2025-01-01" },
  ];

  const mockVocabulary = [
    { id: 1, chinese: "你好", pinyin: "nǐ hǎo", vietnamese: "Xin chào", level: "HSK1" },
    { id: 2, chinese: "谢谢", pinyin: "xiè xie", vietnamese: "Cảm ơn", level: "HSK1" },
    { id: 3, chinese: "再见", pinyin: "zài jiàn", vietnamese: "Tạm biệt", level: "HSK1" },
  ];

  const mockStats = {
    totalUsers: 1234,
    activeUsers: 856,
    totalLessons: 156,
    totalWords: 5420
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">Panda-Chinese Admin</h1>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            Về trang chủ
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Thống kê
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Người dùng
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Nội dung
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Cài đặt
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tổng người dùng</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">+12% so với tháng trước</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Người dùng hoạt động</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.activeUsers}</div>
                  <p className="text-xs text-muted-foreground">+8% so với tháng trước</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tổng bài học</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.totalLessons}</div>
                  <p className="text-xs text-muted-foreground">+5 bài mới tuần này</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tổng từ vựng</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.totalWords}</div>
                  <p className="text-xs text-muted-foreground">+120 từ mới tuần này</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Hoạt động gần đây</CardTitle>
                <CardDescription>Các hoạt động mới nhất trên hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Người dùng mới đăng ký</p>
                      <p className="text-xs text-muted-foreground">user@example.com - 2 phút trước</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Bài học mới được tạo</p>
                      <p className="text-xs text-muted-foreground">HSK2 - Bài 15 - 1 giờ trước</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Từ vựng được cập nhật</p>
                      <p className="text-xs text-muted-foreground">50 từ mới HSK3 - 3 giờ trước</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Quản lý người dùng</CardTitle>
                    <CardDescription>Danh sách tất cả người dùng trong hệ thống</CardDescription>
                  </div>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Thêm người dùng
                  </Button>
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
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">Người dùng</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Tên</TableHead>
                      <TableHead>Vai trò</TableHead>
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
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.role === 'admin' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                          }`}>
                            {user.role === 'admin' ? 'Admin' : 'Người dùng'}
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
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Quản lý nội dung học</CardTitle>
                    <CardDescription>Quản lý từ vựng, ngữ pháp và bài tập</CardDescription>
                  </div>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Thêm từ vựng
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Tìm kiếm từ vựng..."
                      className="pl-10"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Cấp độ HSK" />
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
                      <TableHead>Chữ Hán</TableHead>
                      <TableHead>Pinyin</TableHead>
                      <TableHead>Nghĩa tiếng Việt</TableHead>
                      <TableHead>Cấp độ</TableHead>
                      <TableHead className="text-right">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockVocabulary.map((word) => (
                      <TableRow key={word.id}>
                        <TableCell className="text-lg font-medium">{word.chinese}</TableCell>
                        <TableCell>{word.pinyin}</TableCell>
                        <TableCell>{word.vietnamese}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {word.level}
                          </span>
                        </TableCell>
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

            <Card>
              <CardHeader>
                <CardTitle>Thêm từ vựng mới</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="chinese">Chữ Hán</Label>
                      <Input id="chinese" placeholder="你好" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pinyin">Pinyin</Label>
                      <Input id="pinyin" placeholder="nǐ hǎo" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vietnamese">Nghĩa tiếng Việt</Label>
                    <Input id="vietnamese" placeholder="Xin chào" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="example">Câu ví dụ</Label>
                    <Textarea id="example" placeholder="你好，我是小明。" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="level">Cấp độ HSK</Label>
                    <Select defaultValue="hsk1">
                      <SelectTrigger id="level">
                        <SelectValue />
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
                  <Button type="submit" className="w-full">Thêm từ vựng</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cài đặt hệ thống</CardTitle>
                <CardDescription>Quản lý cấu hình và thiết lập hệ thống</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Tên website</Label>
                    <Input id="siteName" defaultValue="Panda-Chinese" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteDescription">Mô tả</Label>
                    <Textarea 
                      id="siteDescription" 
                      defaultValue="Nền tảng học tiếng Trung trực tuyến"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email liên hệ</Label>
                    <Input id="contactEmail" type="email" defaultValue="contact@panda-chinese.com" />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Cài đặt học tập</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Số từ vựng mỗi bài</Label>
                        <p className="text-sm text-muted-foreground">Số từ vựng mặc định trong một bài học</p>
                      </div>
                      <Input type="number" defaultValue="20" className="w-24" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Thời gian ôn tập (phút)</Label>
                        <p className="text-sm text-muted-foreground">Thời gian ôn tập đề xuất</p>
                      </div>
                      <Input type="number" defaultValue="15" className="w-24" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <Button>Lưu thay đổi</Button>
                  <Button variant="outline">Hủy</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
