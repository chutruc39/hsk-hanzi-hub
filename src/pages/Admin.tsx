import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Users, BookOpen, TrendingUp, Award } from "lucide-react";
import PandaChatButton from "@/components/PandaChatButton";

const Admin = () => {
  const scoreData = [
    { name: "Tuần 1", average: 65, highest: 95, lowest: 45 },
    { name: "Tuần 2", average: 72, highest: 98, lowest: 50 },
    { name: "Tuần 3", average: 78, highest: 100, lowest: 55 },
    { name: "Tuần 4", average: 75, highest: 96, lowest: 48 },
    { name: "Tuần 5", average: 82, highest: 100, lowest: 60 },
  ];

  const levelDistribution = [
    { name: "HSK 1", value: 120, color: "hsl(var(--primary))" },
    { name: "HSK 2", value: 95, color: "hsl(var(--secondary))" },
    { name: "HSK 3", value: 68, color: "hsl(var(--chart-2))" },
    { name: "HSK 4", value: 42, color: "hsl(var(--accent))" },
    { name: "HSK 5+", value: 25, color: "hsl(var(--muted-foreground))" },
  ];

  const topStudents = [
    { id: 1, name: "Nguyễn Văn A", email: "a@example.com", averageScore: 95, completedLessons: 48, level: "HSK 4" },
    { id: 2, name: "Trần Thị B", email: "b@example.com", averageScore: 92, completedLessons: 45, level: "HSK 4" },
    { id: 3, name: "Lê Văn C", email: "c@example.com", averageScore: 89, completedLessons: 42, level: "HSK 3" },
    { id: 4, name: "Phạm Thị D", email: "d@example.com", averageScore: 87, completedLessons: 40, level: "HSK 3" },
    { id: 5, name: "Hoàng Văn E", email: "e@example.com", averageScore: 85, completedLessons: 38, level: "HSK 3" },
  ];

  const mockStats = {
    totalUsers: 1234,
    activeUsers: 856,
    totalLessons: 156,
    totalWords: 5420,
    totalStudents: 350,
    averageScore: 82,
    completedLessons: 1248,
    excellentStudents: 45
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        
        <main className="flex-1 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <AdminHeader />

          <div className="container py-8">
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold">Tổng quan</h1>
                <p className="text-muted-foreground">Theo dõi và quản lý hệ thống Panda-Chinese</p>
              </div>

              {/* Stats Cards */}
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
                    <CardTitle className="text-sm font-medium">Điểm trung bình</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockStats.averageScore}</div>
                    <p className="text-xs text-muted-foreground">+5% so với tháng trước</p>
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
                    <CardTitle className="text-sm font-medium">Học viên xuất sắc</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockStats.excellentStudents}</div>
                    <p className="text-xs text-muted-foreground">+8% so với tháng trước</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Score Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle>Xu hướng điểm số</CardTitle>
                    <CardDescription>Theo dõi tiến độ 5 tuần gần nhất</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={scoreData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="average" stroke="hsl(var(--primary))" name="Trung bình" strokeWidth={2} />
                        <Line type="monotone" dataKey="highest" stroke="hsl(var(--chart-2))" name="Cao nhất" strokeWidth={2} />
                        <Line type="monotone" dataKey="lowest" stroke="hsl(var(--destructive))" name="Thấp nhất" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Level Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Phân bổ trình độ</CardTitle>
                    <CardDescription>Số lượng học viên theo từng cấp độ HSK</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={levelDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="hsl(var(--primary))"
                          dataKey="value"
                        >
                          {levelDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Score Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Biểu đồ điểm số chi tiết</CardTitle>
                  <CardDescription>So sánh điểm trung bình, cao nhất và thấp nhất theo tuần</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={scoreData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="average" fill="hsl(var(--primary))" name="Trung bình" />
                      <Bar dataKey="highest" fill="hsl(var(--chart-2))" name="Cao nhất" />
                      <Bar dataKey="lowest" fill="hsl(var(--destructive))" name="Thấp nhất" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Top Students Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Học viên xuất sắc</CardTitle>
                      <CardDescription>Top 5 học viên có điểm cao nhất</CardDescription>
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Lọc theo cấp độ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="hsk1">HSK 1</SelectItem>
                        <SelectItem value="hsk2">HSK 2</SelectItem>
                        <SelectItem value="hsk3">HSK 3</SelectItem>
                        <SelectItem value="hsk4">HSK 4</SelectItem>
                        <SelectItem value="hsk5">HSK 5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Hạng</TableHead>
                        <TableHead>Tên</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Cấp độ</TableHead>
                        <TableHead>Bài học hoàn thành</TableHead>
                        <TableHead className="text-right">Điểm TB</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topStudents.map((student, index) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">
                            <div className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                              index === 0 ? 'bg-yellow-500 text-white' :
                              index === 1 ? 'bg-gray-400 text-white' :
                              index === 2 ? 'bg-orange-600 text-white' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {index + 1}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {student.level}
                            </span>
                          </TableCell>
                          <TableCell>{student.completedLessons}</TableCell>
                          <TableCell className="text-right">
                            <span className="text-lg font-bold text-green-500">{student.averageScore}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="cursor-pointer transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Quản lý người dùng
                    </CardTitle>
                    <CardDescription>Xem và quản lý tất cả người dùng</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="cursor-pointer transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Thêm từ vựng
                    </CardTitle>
                    <CardDescription>Thêm từ vựng mới vào hệ thống</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="cursor-pointer transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Xem báo cáo
                    </CardTitle>
                    <CardDescription>Xem báo cáo thống kê chi tiết</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <PandaChatButton />
      </div>
    </SidebarProvider>
  );
};

export default Admin;
