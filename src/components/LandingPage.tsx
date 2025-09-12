import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Languages, 
  BookOpen, 
  Target, 
  Users, 
  Award,
  Play,
  CheckCircle,
  Globe,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LandingPageProps {
  onStartLearning: () => void;
}

const LandingPage = ({ onStartLearning }: LandingPageProps) => {
  const [currentLang, setCurrentLang] = useState<'vi' | 'zh'>('vi');

  const content = {
    vi: {
      login: "Đăng nhập",
      signup: "Đăng ký", 
      title: "Panda Chinese",
      subtitle: "Học tiếng Trung thông minh với AI",
      description: "Phương pháp học hiệu quả nhất với công nghệ AI tiên tiến, giúp bạn thành thạo tiếng Trung từ cơ bản đến nâng cao",
      startLearning: "Bắt đầu học ngay",
      watchDemo: "Xem demo",
      features: {
        title: "Tại sao chọn Panda Chinese?",
        items: [
          {
            icon: Target,
            title: "Học theo HSK",
            description: "Lộ trình học từ HSK 1-6, phù hợp với tiêu chuẩn quốc tế"
          },
          {
            icon: Languages,
            title: "AI Phát âm",
            description: "Công nghệ AI chấm điểm phát âm và sửa lỗi tức thời"
          },
          {
            icon: BookOpen,
            title: "Viết chữ Hán",
            description: "Hướng dẫn viết chữ Hán theo nét, từng bước chi tiết"
          },
          {
            icon: Users,
            title: "Trò chơi tương tác",
            description: "Học qua trò chơi, tăng hứng thú và ghi nhớ lâu dài"
          }
        ]
      },
      stats: {
        users: "10,000+",
        usersLabel: "Học viên",
        lessons: "500+",
        lessonsLabel: "Bài học",
        success: "95%",
        successLabel: "Tỷ lệ thành công"
      }
    },
    zh: {
      login: "登录",
      signup: "注册",
      title: "熊猫中文",
      subtitle: "用AI智能学中文",
      description: "最有效的学习方法，采用先进AI技术，助您从基础到高级全面掌握中文",
      startLearning: "立即开始学习",
      watchDemo: "观看演示",
      features: {
        title: "为什么选择熊猫中文？",
        items: [
          {
            icon: Target,
            title: "HSK课程",
            description: "HSK 1-6级完整课程，符合国际标准"
          },
          {
            icon: Languages,
            title: "AI发音",
            description: "AI发音评分技术，即时纠正发音错误"
          },
          {
            icon: BookOpen,
            title: "汉字书写",
            description: "笔画顺序指导，详细步骤教学"
          },
          {
            icon: Users,
            title: "互动游戏",
            description: "通过游戏学习，提高兴趣和记忆效果"
          }
        ]
      },
      stats: {
        users: "10,000+",
        usersLabel: "学员",
        lessons: "500+", 
        lessonsLabel: "课程",
        success: "95%",
        successLabel: "成功率"
      }
    }
  };

  const t = content[currentLang];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-2xl">🐼</span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-chinese text-primary">
                  {t.title}
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    {currentLang === 'vi' ? 'Tiếng Việt' : '中文'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover border shadow-card">
                  <DropdownMenuItem onClick={() => setCurrentLang('vi')}>
                    🇻🇳 Tiếng Việt
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCurrentLang('zh')}>
                    🇨🇳 中文
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Auth Buttons */}
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                {t.login}
              </Button>
              <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                {t.signup}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-chinese">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              {t.subtitle}
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onStartLearning}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                {t.startLearning}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                {t.watchDemo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {t.stats.users}
              </div>
              <div className="text-muted-foreground">{t.stats.usersLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {t.stats.lessons}
              </div>
              <div className="text-muted-foreground">{t.stats.lessonsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {t.stats.success}
              </div>
              <div className="text-muted-foreground">{t.stats.successLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-chinese">
              {t.features.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-chinese">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-chinese">
            {currentLang === 'vi' ? 'Sẵn sàng bắt đầu hành trình học tiếng Trung?' : '准备开始中文学习之旅了吗？'}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {currentLang === 'vi' 
              ? 'Tham gia cùng hàng nghìn học viên đã thành công với Panda Chinese'
              : '加入数千名通过熊猫中文成功学习的学员'
            }
          </p>
          <Button 
            size="lg" 
            onClick={onStartLearning}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            {t.startLearning}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-lg">🐼</span>
            </div>
            <span className="text-xl font-bold font-chinese text-primary">
              {t.title}
            </span>
          </div>
          <p className="text-muted-foreground">
            {currentLang === 'vi' 
              ? 'Học tiếng Trung hiệu quả với công nghệ AI và phương pháp khoa học'
              : '用AI技术和科学方法高效学习中文'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;