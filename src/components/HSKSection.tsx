import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, BookOpen, Clock, Target } from "lucide-react";

const HSKSection = () => {
  const [selectedLevel, setSelectedLevel] = useState(3);

  const hskLevels = [
    {
      level: 1,
      name: "HSK 1 - Cơ bản",
      description: "150 từ vựng cơ bản nhất",
      vocabulary: 150,
      progress: 100,
      completed: true,
      topics: ["Chào hỏi", "Số đếm", "Thời gian", "Gia đình"]
    },
    {
      level: 2, 
      name: "HSK 2 - Sơ cấp",
      description: "300 từ vựng thiết yếu",
      vocabulary: 300,
      progress: 85,
      completed: false,
      topics: ["Mua sắm", "Đi lại", "Thức ăn", "Thời tiết"]
    },
    {
      level: 3,
      name: "HSK 3 - Trung cấp thấp",
      description: "600 từ vựng giao tiếp",
      vocabulary: 600,
      progress: 45,
      completed: false,
      topics: ["Công việc", "Sở thích", "Du lịch", "Sức khỏe"]
    },
    {
      level: 4,
      name: "HSK 4 - Trung cấp",
      description: "1200 từ vựng nâng cao",
      vocabulary: 1200,
      progress: 12,
      completed: false,
      topics: ["Giáo dục", "Văn hóa", "Kinh tế", "Xã hội"]
    },
    {
      level: 5,
      name: "HSK 5 - Trung cấp cao",
      description: "2500 từ vựng phức tạp",
      vocabulary: 2500,
      progress: 0,
      completed: false,
      topics: ["Khoa học", "Công nghệ", "Chính trị", "Lịch sử"]
    },
    {
      level: 6,
      name: "HSK 6 - Cao cấp",
      description: "5000+ từ vựng thành thạo",
      vocabulary: 5000,
      progress: 0,
      completed: false,
      topics: ["Văn học", "Triết học", "Nghệ thuật", "Học thuật"]
    }
  ];

  const currentLevel = hskLevels.find(level => level.level === selectedLevel) || hskLevels[2];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Lộ Trình HSK
        </h2>
        <p className="text-muted-foreground">
          Học theo tiêu chuẩn quốc tế HSK - Hanyu Shuiping Kaoshi
        </p>
      </div>

      {/* Level Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {hskLevels.map((level) => (
          <Card
            key={level.level}
            className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-hover ${
              selectedLevel === level.level 
                ? 'ring-2 ring-primary shadow-card' 
                : 'hover:shadow-card'
            }`}
            onClick={() => setSelectedLevel(level.level)}
          >
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-primary">HSK {level.level}</span>
                {level.completed && (
                  <Trophy className="w-5 h-5 text-success" />
                )}
              </div>
              <Progress value={level.progress} className="h-1" />
              <div className="text-xs text-muted-foreground">
                {level.progress}% hoàn thành
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Selected Level Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 shadow-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{currentLevel.name}</h3>
                <p className="text-muted-foreground">{currentLevel.description}</p>
              </div>
              <Badge variant={currentLevel.completed ? "default" : "secondary"} className="ml-4">
                {currentLevel.completed ? "Hoàn thành" : "Đang học"}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-primary-soft rounded-lg">
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{currentLevel.vocabulary}</div>
                <div className="text-sm text-muted-foreground">Từ vựng</div>
              </div>
              <div className="text-center p-4 bg-secondary-soft rounded-lg">
                <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-secondary">{currentLevel.progress}%</div>
                <div className="text-sm text-muted-foreground">Tiến độ</div>
              </div>
              <div className="text-center p-4 bg-success-soft rounded-lg">
                <Star className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">
                  {Math.floor(currentLevel.progress * 4.5 / 100)}
                </div>
                <div className="text-sm text-muted-foreground">Sao đạt được</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Chủ đề học tập</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentLevel.topics.map((topic, index) => (
                  <Button
                    key={topic}
                    variant="outline"
                    className="justify-start h-auto p-4"
                  >
                    <div className="text-left">
                      <div className="font-medium">{topic}</div>
                      <div className="text-xs text-muted-foreground">
                        Bài {index + 1} • {Math.floor(Math.random() * 50 + 20)} từ
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Study Plan */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Kế hoạch học tập hôm nay</h3>
            <div className="space-y-3">
              {[
                { task: "Học 10 từ mới", completed: true, time: "15 phút" },
                { task: "Ôn tập từ vựng cũ", completed: true, time: "10 phút" },
                { task: "Luyện phát âm", completed: false, time: "20 phút" },
                { task: "Làm bài tập ngữ pháp", completed: false, time: "25 phút" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    item.completed ? 'bg-success-soft' : 'bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      item.completed 
                        ? 'bg-success border-success' 
                        : 'border-muted-foreground'
                    }`}>
                      {item.completed && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <span className={item.completed ? 'line-through text-muted-foreground' : ''}>
                      {item.task}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Progress Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Thống kê tổng quan</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Level {selectedLevel}</div>
                <div className="text-sm text-muted-foreground">Cấp độ hiện tại</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tiến độ cấp độ</span>
                  <span>{currentLevel.progress}%</span>
                </div>
                <Progress value={currentLevel.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">847</div>
                  <div className="text-xs text-muted-foreground">Từ đã học</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-success">12</div>
                  <div className="text-xs text-muted-foreground">Ngày streak</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Hoạt động gần đây</h3>
            <div className="space-y-3">
              {[
                { action: "Hoàn thành bài học", time: "2 giờ trước" },
                { action: "Đạt 90% bài kiểm tra", time: "1 ngày trước" },
                { action: "Học 15 từ mới", time: "2 ngày trước" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Button variant="hero" className="w-full">
            Bắt đầu học ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HSKSection;