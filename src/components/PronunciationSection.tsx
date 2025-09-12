import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Square, Play, Award, Target, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PronunciationSection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [currentSentence, setCurrentSentence] = useState(0);
  const { toast } = useToast();

  const sentences = [
    {
      chinese: "你好，很高兴见到你。",
      pinyin: "nǐ hǎo, hěn gāo xìng jiàn dào nǐ",
      vietnamese: "Xin chào, rất vui được gặp bạn.",
      difficulty: "Dễ"
    },
    {
      chinese: "我正在学习中文。",
      pinyin: "wǒ zhèng zài xué xí zhōng wén", 
      vietnamese: "Tôi đang học tiếng Trung.",
      difficulty: "Trung bình"
    },
    {
      chinese: "这个地方的风景非常美丽。",
      pinyin: "zhè gè dì fāng de fēng jǐng fēi cháng měi lì",
      vietnamese: "Phong cảnh nơi này rất đẹp.",
      difficulty: "Khó"
    }
  ];

  const current = sentences[currentSentence];

  const startRecording = () => {
    setIsRecording(true);
    // Simulate recording for demo
    setTimeout(() => {
      setIsRecording(false);
      // Simulate AI scoring
      const randomScore = Math.floor(Math.random() * 30) + 70; // 70-100
      setScore(randomScore);
      
      let feedbackText = "";
      if (randomScore >= 90) {
        feedbackText = "Xuất sắc! Phát âm rất chuẩn xác.";
      } else if (randomScore >= 80) {
        feedbackText = "Tốt! Một số âm cần chú ý thêm.";
      } else {
        feedbackText = "Cần luyện tập thêm. Tập trung vào thanh điệu.";
      }
      
      setFeedback(feedbackText);
      
      toast({
        title: `Điểm số: ${randomScore}/100`,
        description: feedbackText,
      });
    }, 3000);
  };

  const playExample = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(current.chinese);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  const nextSentence = () => {
    setCurrentSentence((prev) => (prev + 1) % sentences.length);
    setScore(0);
    setFeedback("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Luyện Phát Âm
        </h2>
        <p className="text-muted-foreground">
          Chấm điểm phát âm AI và phản hồi chi tiết
        </p>
      </div>

      {/* Current Sentence */}
      <Card className="p-8 shadow-card text-center">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            {current.difficulty}
          </span>
        </div>
        
        <div className="space-y-4">
          <div className="text-4xl font-chinese font-bold text-primary">
            {current.chinese}
          </div>
          
          <div className="text-xl text-muted-foreground">
            [{current.pinyin}]
          </div>
          
          <div className="text-lg">
            {current.vietnamese}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={playExample}
            className="gap-2"
          >
            <Volume2 className="w-4 h-4" />
            Nghe mẫu
          </Button>
        </div>
      </Card>

      {/* Recording Controls */}
      <Card className="p-6 shadow-card">
        <div className="text-center space-y-6">
          {isRecording ? (
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-destructive rounded-full flex items-center justify-center animate-pulse-soft">
                <Square className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-medium">Đang ghi âm...</p>
              <div className="w-64 mx-auto">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Button
                onClick={startRecording}
                variant="hero"
                size="lg"
                className="w-24 h-24 rounded-full text-lg"
              >
                <Mic className="w-8 h-8" />
              </Button>
              <p className="text-lg">Nhấn để bắt đầu phát âm</p>
            </div>
          )}
        </div>
      </Card>

      {/* Score Display */}
      {score > 0 && (
        <Card className="p-6 shadow-card">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-success" />
              <h3 className="text-xl font-bold">Kết quả đánh giá</h3>
            </div>
            
            <div className="space-y-3">
              <div className="text-4xl font-bold text-primary">{score}/100</div>
              <Progress 
                value={score} 
                className="h-3 w-64 mx-auto"
              />
              <p className="text-muted-foreground">{feedback}</p>
            </div>

            {score >= 80 && (
              <div className="flex justify-center">
                <Button
                  onClick={nextSentence}
                  variant="success"
                  className="gap-2"
                >
                  <Target className="w-4 h-4" />
                  Câu tiếp theo
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Progress Tracking */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Tiến độ học tập</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">15</div>
            <div className="text-sm text-muted-foreground">Câu hoàn thành</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-secondary">87</div>
            <div className="text-sm text-muted-foreground">Điểm trung bình</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-success">5</div>
            <div className="text-sm text-muted-foreground">Ngày liên tiếp</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PronunciationSection;