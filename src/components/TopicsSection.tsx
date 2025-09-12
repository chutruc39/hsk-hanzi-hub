import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Utensils, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Plane,
  ShoppingBag,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

const TopicsSection = () => {
  const [selectedTopic, setSelectedTopic] = useState('food');

  const topics = [
    {
      id: 'food',
      title: 'Ẩm thực',
      icon: Utensils,
      progress: 85,
      words: 45,
      color: 'bg-orange-500',
      description: 'Từ vựng về món ăn, nhà hàng, và nấu nướng'
    },
    {
      id: 'family',
      title: 'Gia đình',
      icon: Home,
      progress: 92,
      words: 38,
      color: 'bg-blue-500',
      description: 'Các thành viên trong gia đình và mối quan hệ'
    },
    {
      id: 'work',
      title: 'Công việc',
      icon: Briefcase,
      progress: 67,
      words: 52,
      color: 'bg-green-500',
      description: 'Nghề nghiệp, văn phòng, và môi trường làm việc'
    },
    {
      id: 'education',
      title: 'Giáo dục',
      icon: GraduationCap,
      progress: 73,
      words: 41,
      color: 'bg-purple-500',
      description: 'Trường học, học tập, và kiến thức'
    },
    {
      id: 'health',
      title: 'Sức khỏe',
      icon: Heart,
      progress: 56,
      words: 36,
      color: 'bg-red-500',
      description: 'Cơ thể, bệnh tật, và chăm sóc sức khỏe'
    },
    {
      id: 'travel',
      title: 'Du lịch',
      icon: Plane,
      progress: 34,
      words: 48,
      color: 'bg-cyan-500',
      description: 'Giao thông, khách sạn, và địa điểm du lịch'
    },
    {
      id: 'shopping',
      title: 'Mua sắm',
      icon: ShoppingBag,
      progress: 78,
      words: 35,
      color: 'bg-pink-500',
      description: 'Cửa hàng, tiền bạc, và mua bán'
    },
    {
      id: 'social',
      title: 'Xã hội',
      icon: Users,
      progress: 45,
      words: 44,
      color: 'bg-indigo-500',
      description: 'Bạn bè, cuộc sống xã hội, và giao tiếp'
    }
  ];

  const topicWords = {
    food: [
      { chinese: "米饭", pinyin: "mǐ fàn", vietnamese: "cơm", learned: true },
      { chinese: "面条", pinyin: "miàn tiáo", vietnamese: "mì", learned: true },
      { chinese: "饺子", pinyin: "jiǎo zi", vietnamese: "bánh bao", learned: true },
      { chinese: "茶", pinyin: "chá", vietnamese: "trà", learned: false },
      { chinese: "咖啡", pinyin: "kā fēi", vietnamese: "cà phê", learned: false },
      { chinese: "水果", pinyin: "shuǐ guǒ", vietnamese: "trái cây", learned: false }
    ],
    family: [
      { chinese: "爸爸", pinyin: "bà ba", vietnamese: "bố", learned: true },
      { chinese: "妈妈", pinyin: "mā ma", vietnamese: "mẹ", learned: true },
      { chinese: "哥哥", pinyin: "gē ge", vietnamese: "anh trai", learned: true },
      { chinese: "姐姐", pinyin: "jiě jie", vietnamese: "chị gái", learned: false },
      { chinese: "弟弟", pinyin: "dì di", vietnamese: "em trai", learned: false },
      { chinese: "妹妹", pinyin: "mèi mei", vietnamese: "em gái", learned: false }
    ]
  };

  const currentTopic = topics.find(t => t.id === selectedTopic) || topics[0];
  const currentWords = topicWords[selectedTopic as keyof typeof topicWords] || topicWords.food;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Học Theo Chủ Đề
        </h2>
        <p className="text-muted-foreground">
          Học từ vựng tiếng Trung theo các chủ đề thực tế hằng ngày
        </p>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const isSelected = selectedTopic === topic.id;
          
          return (
            <Card
              key={topic.id}
              className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-hover ${
                isSelected ? 'ring-2 ring-primary shadow-card' : ''
              }`}
              onClick={() => setSelectedTopic(topic.id)}
            >
              <div className="text-center space-y-3">
                <div className={`w-12 h-12 ${topic.color} rounded-xl flex items-center justify-center mx-auto`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{topic.title}</h3>
                  <div className="text-sm text-muted-foreground">{topic.words} từ</div>
                </div>
                <div className="space-y-1">
                  <Progress value={topic.progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{topic.progress}%</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Selected Topic Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 ${currentTopic.color} rounded-2xl flex items-center justify-center`}>
                <currentTopic.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{currentTopic.title}</h3>
                <p className="text-muted-foreground">{currentTopic.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary">{currentTopic.words} từ vựng</Badge>
                  <Badge variant="outline">{currentTopic.progress}% hoàn thành</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Từ vựng chủ đề</h4>
                <Button variant="outline" size="sm">
                  Học tất cả
                </Button>
              </div>
              
              <div className="grid gap-3">
                {currentWords.map((word, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-all ${
                      word.learned 
                        ? 'bg-success-soft border-success/20' 
                        : 'bg-card border-border hover:shadow-card'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-chinese font-bold text-primary">
                            {word.chinese}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            [{word.pinyin}]
                          </div>
                        </div>
                        <div className="text-lg">{word.vietnamese}</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {word.learned ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Button variant="outline" size="sm">
                            Học
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Practice Activities */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Hoạt động luyện tập</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Flashcard", desc: "Ôn từ vựng", time: "5 phút" },
                { name: "Ghép từ", desc: "Trò chơi ghép", time: "10 phút" },
                { name: "Nghe viết", desc: "Luyện nghe", time: "15 phút" },
                { name: "Kiểm tra", desc: "Đánh giá", time: "20 phút" }
              ].map((activity, index) => (
                <Card key={index} className="p-4 cursor-pointer hover:shadow-card transition-all">
                  <div className="text-center space-y-2">
                    <div className="font-medium">{activity.name}</div>
                    <div className="text-sm text-muted-foreground">{activity.desc}</div>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Progress Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Tiến độ tổng quan</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{currentTopic.progress}%</div>
                <div className="text-sm text-muted-foreground">Hoàn thành chủ đề</div>
              </div>
              
              <Progress value={currentTopic.progress} className="h-3" />
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-success">
                    {Math.floor(currentTopic.words * currentTopic.progress / 100)}
                  </div>
                  <div className="text-xs text-muted-foreground">Đã học</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">
                    {currentTopic.words - Math.floor(currentTopic.words * currentTopic.progress / 100)}
                  </div>
                  <div className="text-xs text-muted-foreground">Còn lại</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Thống kê học tập</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Từ học hôm nay</span>
                <span className="font-medium">8 từ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Thời gian học</span>
                <span className="font-medium">25 phút</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Độ chính xác</span>
                <span className="font-medium text-success">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Streak</span>
                <span className="font-medium">5 ngày</span>
              </div>
            </div>
          </Card>

          <Button variant="hero" className="w-full">
            Bắt đầu học
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopicsSection;