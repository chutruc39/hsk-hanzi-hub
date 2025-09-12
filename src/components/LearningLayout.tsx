import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Languages, 
  Mic, 
  PenTool, 
  GraduationCap, 
  Gamepad2, 
  BookOpen,
  Home
} from "lucide-react";

interface LearningLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const LearningLayout = ({ children, activeSection, onSectionChange }: LearningLayoutProps) => {
  const menuItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'translate', label: 'Dịch thuật', icon: Languages },
    { id: 'pronunciation', label: 'Phát âm', icon: Mic },
    { id: 'writing', label: 'Viết chữ', icon: PenTool },
    { id: 'hsk', label: 'HSK', icon: GraduationCap },
    { id: 'games', label: 'Trò chơi', icon: Gamepad2 },
    { id: 'topics', label: 'Chủ đề', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="bg-gradient-hero text-white shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-ui">中文学习</h1>
                <p className="text-white/80 text-sm">Học tiếng Trung thông minh</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-sm text-white/80">Cấp độ</div>
                <div className="font-semibold">HSK 3</div>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">85</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-soft border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => onSectionChange(item.id)}
                  className="flex-shrink-0 gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            Học tiếng Trung hiệu quả với công nghệ AI và phương pháp khoa học
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearningLayout;