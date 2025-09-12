import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Languages, 
  Mic, 
  PenTool, 
  GraduationCap, 
  Gamepad2, 
  BookOpen,
  TrendingUp,
  Calendar,
  Award,
  Clock
} from "lucide-react";

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
  const quickActions = [
    {
      id: 'translate',
      title: 'Dịch Thuật',
      description: 'Dịch nhanh Việt ↔ Trung',
      icon: Languages,
      color: 'bg-primary',
      gradient: 'bg-gradient-primary'
    },
    {
      id: 'pronunciation',
      title: 'Luyện Phát Âm',
      description: 'AI chấm điểm phát âm',
      icon: Mic,
      color: 'bg-secondary',
      gradient: 'bg-gradient-secondary'
    },
    {
      id: 'writing',
      title: 'Viết Chữ Hán',
      description: 'Học thứ tự nét viết',
      icon: PenTool,
      color: 'bg-success',
      gradient: 'bg-gradient-success'
    },
    {
      id: 'games',
      title: 'Trò Chơi',
      description: 'Học qua trò chơi vui',
      icon: Gamepad2,
      color: 'bg-secondary',
      gradient: 'bg-gradient-secondary'
    }
  ];

  const todayStats = {
    wordsLearned: 12,
    pronunciationScore: 87,
    charactersWritten: 8,
    studyTime: 45
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Hero */}
      <Card className="p-8 bg-gradient-hero text-white shadow-hover">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Chào bạn! 👋</h1>
              <p className="text-white/90 text-lg">
                Hôm nay học tiếng Trung thôi nào!
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onSectionChange('hsk')}
                className="gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Tiếp tục học HSK 3
              </Button>
              <div className="text-white/80">
                <div className="text-sm">Chuỗi học tập</div>
                <div className="text-2xl font-bold">12 ngày</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-6xl">🎯</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Bắt đầu học ngay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className="p-6 cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-105"
                onClick={() => onSectionChange(action.id)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 ${action.gradient} rounded-2xl flex items-center justify-center shadow-soft`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                    <p className="text-muted-foreground text-sm">{action.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Today's Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Tiến độ hôm nay</h3>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary-soft rounded-lg">
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{todayStats.wordsLearned}</div>
                <div className="text-sm text-muted-foreground">Từ mới</div>
              </div>
              <div className="text-center p-4 bg-secondary-soft rounded-lg">
                <Mic className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-secondary">{todayStats.pronunciationScore}%</div>
                <div className="text-sm text-muted-foreground">Phát âm</div>
              </div>
              <div className="text-center p-4 bg-success-soft rounded-lg">
                <PenTool className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">{todayStats.charactersWritten}</div>
                <div className="text-sm text-muted-foreground">Chữ Hán</div>
              </div>
              <div className="text-center p-4 bg-primary-soft rounded-lg">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{todayStats.studyTime}p</div>
                <div className="text-sm text-muted-foreground">Thời gian</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Kế hoạch học tập</h3>
            <div className="space-y-4">
              {[
                { task: "Học 10 từ mới HSK 3", completed: true, time: "15 phút" },
                { task: "Luyện phát âm 5 câu", completed: true, time: "20 phút" },
                { task: "Viết 3 chữ Hán mới", completed: false, time: "15 phút" },
                { task: "Chơi game ghép từ", completed: false, time: "10 phút" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                    item.completed 
                      ? 'bg-success-soft border border-success/20' 
                      : 'bg-muted/50 hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      item.completed 
                        ? 'bg-success border-success' 
                        : 'border-muted-foreground'
                    }`}>
                      {item.completed && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className={item.completed ? 'line-through text-muted-foreground' : 'font-medium'}>
                      {item.task}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Cấp độ HSK</h3>
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-primary">HSK 3</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tiến độ</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="text-sm text-muted-foreground">
                270/600 từ vựng đã học
              </div>
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => onSectionChange('hsk')}
              >
                Tiếp tục học
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Thành tích</h3>
            <div className="space-y-3">
              {[
                { icon: Award, title: "Học giỏi", desc: "7 ngày liên tiếp", color: "text-success" },
                { icon: TrendingUp, title: "Tiến bộ", desc: "Tăng 20% tuần này", color: "text-primary" },
                { icon: Gamepad2, title: "Game thủ", desc: "50 trận thắng", color: "text-secondary" }
              ].map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <Icon className={`w-5 h-5 ${achievement.color}`} />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Từ của ngày</h3>
            <div className="text-center space-y-3">
              <div className="text-4xl font-chinese font-bold text-primary">学习</div>
              <div className="text-lg text-muted-foreground">[xué xí]</div>
              <div className="text-base">học tập, học hỏi</div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onSectionChange('pronunciation')}
              >
                Luyện phát âm
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;