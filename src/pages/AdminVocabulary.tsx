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
import { Search, Plus, Edit, Trash2 } from "lucide-react";

const AdminVocabulary = () => {
  const mockVocabulary = [
    { id: 1, chinese: "你好", pinyin: "nǐ hǎo", vietnamese: "Xin chào", level: "HSK1", category: "Chào hỏi" },
    { id: 2, chinese: "谢谢", pinyin: "xiè xie", vietnamese: "Cảm ơn", level: "HSK1", category: "Lịch sự" },
    { id: 3, chinese: "再见", pinyin: "zài jiàn", vietnamese: "Tạm biệt", level: "HSK1", category: "Chào hỏi" },
    { id: 4, chinese: "学习", pinyin: "xué xí", vietnamese: "Học tập", level: "HSK2", category: "Giáo dục" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        
        <main className="flex-1 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <AdminHeader />

          <div className="container py-8 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Danh sách từ vựng</CardTitle>
                    <CardDescription>Quản lý tất cả từ vựng trong hệ thống</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Tìm kiếm từ vựng..." className="pl-10" />
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
                      <TableHead>Chủ đề</TableHead>
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
                        <TableCell>{word.category}</TableCell>
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
                    <Label htmlFor="category">Chủ đề</Label>
                    <Input id="category" placeholder="Chào hỏi" />
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
                  <Button type="submit" className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Thêm từ vựng
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminVocabulary;
