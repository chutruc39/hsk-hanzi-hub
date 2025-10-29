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
import { Plus, Edit, Trash2, Gamepad2, Users, Trophy } from "lucide-react";
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

const AdminGames = () => {
  const [games] = useState([
    {
      id: 1,
      name: "Ghép từ vựng HSK 1",
      type: "Matching",
      level: "HSK 1",
      plays: 1523,
      avgScore: 85,
      status: "active",
    },
    {
      id: 2,
      name: "Quiz nhanh HSK 2",
      type: "Quiz",
      level: "HSK 2",
      plays: 987,
      avgScore: 78,
      status: "active",
    },
    {
      id: 3,
      name: "Lật thẻ ghi nhớ",
      type: "Memory",
      level: "HSK 1",
      plays: 2341,
      avgScore: 92,
      status: "active",
    },
    {
      id: 4,
      name: "Đoán chữ Hán",
      type: "Puzzle",
      level: "HSK 3",
      plays: 645,
      avgScore: 73,
      status: "maintenance",
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Hoạt động</Badge>;
      case "maintenance":
        return <Badge variant="secondary">Bảo trì</Badge>;
      case "inactive":
        return <Badge variant="destructive">Tạm dừng</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const totalPlays = games.reduce((acc, g) => acc + g.plays, 0);
  const avgScore = (games.reduce((acc, g) => acc + g.avgScore, 0) / games.length).toFixed(0);
  const activeGames = games.filter(g => g.status === "active").length;

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
                  <CardDescription>Tổng trò chơi</CardDescription>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Gamepad2 className="h-6 w-6" />
                    {games.length}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Đang hoạt động</CardDescription>
                  <CardTitle className="text-3xl">{activeGames}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Tổng lượt chơi</CardDescription>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    {totalPlays.toLocaleString()}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Điểm TB</CardDescription>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Trophy className="h-6 w-6" />
                    {avgScore}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Create Game Form */}
            <Card>
              <CardHeader>
                <CardTitle>Tạo trò chơi mới</CardTitle>
                <CardDescription>Thêm trò chơi học tập mới vào hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gameName">Tên trò chơi</Label>
                      <Input id="gameName" placeholder="Nhập tên trò chơi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gameType">Loại trò chơi</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matching">Ghép thẻ (Matching)</SelectItem>
                          <SelectItem value="quiz">Quiz</SelectItem>
                          <SelectItem value="memory">Trí nhớ (Memory)</SelectItem>
                          <SelectItem value="puzzle">Đố vui (Puzzle)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gameLevel">Cấp độ HSK</Label>
                      <Select>
                        <SelectTrigger>
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
                    <div className="space-y-2">
                      <Label htmlFor="timeLimit">Giới hạn thời gian (giây)</Label>
                      <Input id="timeLimit" type="number" placeholder="60" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Mô tả</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Mô tả trò chơi" 
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button type="submit">
                    <Plus className="mr-2 h-4 w-4" />
                    Tạo trò chơi
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Games List */}
            <Card>
              <CardHeader>
                <CardTitle>Danh sách trò chơi</CardTitle>
                <CardDescription>Quản lý tất cả trò chơi học tập</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tên trò chơi</TableHead>
                      <TableHead>Loại</TableHead>
                      <TableHead>Cấp độ</TableHead>
                      <TableHead>Lượt chơi</TableHead>
                      <TableHead>Điểm TB</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {games.map((game) => (
                      <TableRow key={game.id}>
                        <TableCell className="font-medium">{game.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{game.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge>{game.level}</Badge>
                        </TableCell>
                        <TableCell>{game.plays.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4 text-yellow-500" />
                            {game.avgScore}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(game.status)}</TableCell>
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

export default AdminGames;
