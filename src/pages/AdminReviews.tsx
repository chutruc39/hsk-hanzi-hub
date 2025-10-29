import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Star, Trash2, Eye, ThumbsUp, MessageSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminReviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      user: "Nguyễn Văn A",
      course: "HSK 1 - Khóa cơ bản",
      rating: 5,
      comment: "Khóa học rất tuyệt vời, giáo viên nhiệt tình!",
      date: "2024-01-15",
      status: "approved",
      likes: 12,
    },
    {
      id: 2,
      user: "Trần Thị B",
      course: "HSK 2 - Nâng cao",
      rating: 4,
      comment: "Nội dung hay nhưng cần thêm bài tập thực hành.",
      date: "2024-01-14",
      status: "approved",
      likes: 8,
    },
    {
      id: 3,
      user: "Lê Văn C",
      course: "Luyện phát âm",
      rating: 3,
      comment: "Bình thường, cần cải thiện thêm.",
      date: "2024-01-13",
      status: "pending",
      likes: 2,
    },
    {
      id: 4,
      user: "Phạm Thị D",
      course: "Từ vựng HSK 3",
      rating: 5,
      comment: "Xuất sắc! Học được rất nhiều từ vựng hữu ích.",
      date: "2024-01-12",
      status: "approved",
      likes: 15,
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Đã duyệt</Badge>;
      case "pending":
        return <Badge variant="secondary">Chờ duyệt</Badge>;
      case "rejected":
        return <Badge variant="destructive">Từ chối</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRatingStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const pendingReviews = reviews.filter(r => r.status === "pending").length;
  const approvedReviews = reviews.filter(r => r.status === "approved").length;

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
                  <CardDescription>Tổng đánh giá</CardDescription>
                  <CardTitle className="text-3xl">{totalReviews}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Đánh giá trung bình</CardDescription>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    {averageRating} <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Chờ duyệt</CardDescription>
                  <CardTitle className="text-3xl">{pendingReviews}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Đã duyệt</CardDescription>
                  <CardTitle className="text-3xl">{approvedReviews}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Bộ lọc</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="approved">Đã duyệt</SelectItem>
                      <SelectItem value="pending">Chờ duyệt</SelectItem>
                      <SelectItem value="rejected">Từ chối</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Đánh giá" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="5">5 sao</SelectItem>
                      <SelectItem value="4">4 sao</SelectItem>
                      <SelectItem value="3">3 sao</SelectItem>
                      <SelectItem value="2">2 sao</SelectItem>
                      <SelectItem value="1">1 sao</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <Card>
              <CardHeader>
                <CardTitle>Danh sách đánh giá</CardTitle>
                <CardDescription>Quản lý tất cả đánh giá từ người dùng</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Người dùng</TableHead>
                      <TableHead>Khóa học</TableHead>
                      <TableHead>Đánh giá</TableHead>
                      <TableHead>Nội dung</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Lượt thích</TableHead>
                      <TableHead>Ngày</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reviews.map((review) => (
                      <TableRow key={review.id}>
                        <TableCell className="font-medium">{review.user}</TableCell>
                        <TableCell>{review.course}</TableCell>
                        <TableCell>{getRatingStars(review.rating)}</TableCell>
                        <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                        <TableCell>{getStatusBadge(review.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                            {review.likes}
                          </div>
                        </TableCell>
                        <TableCell>{review.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" title="Xem chi tiết">
                              <Eye className="h-4 w-4" />
                            </Button>
                            {review.status === "pending" && (
                              <Button variant="ghost" size="icon" className="text-green-600" title="Duyệt">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="ghost" size="icon" title="Xóa">
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

export default AdminReviews;
