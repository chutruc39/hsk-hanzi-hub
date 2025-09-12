import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, CheckCircle, ArrowRight, BookOpen } from "lucide-react";

const WritingSection = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [showStrokes, setShowStrokes] = useState(false);
  const [completedStrokes, setCompletedStrokes] = useState(0);

  const characters = [
    {
      character: "你",
      pinyin: "nǐ",
      meaning: "bạn",
      strokes: 7,
      radicals: ["人", "尔"],
      strokeOrder: [
        "Nét 1: | (thẳng đứng)",
        "Nét 2: 丿 (phẩy trái)",
        "Nét 3: 一 (ngang)",
        "Nét 4: 丿 (phẩy trái)", 
        "Nét 5: ㇏ (phẩy phải)",
        "Nét 6: 一 (ngang)",
        "Nét 7: | (thẳng đứng)"
      ]
    },
    {
      character: "好",
      pinyin: "hǎo", 
      meaning: "tốt, hay",
      strokes: 6,
      radicals: ["女", "子"],
      strokeOrder: [
        "Nét 1: ㇛ (phẩy dọc trái)",
        "Nét 2: 一 (ngang)",
        "Nét 3: 丿 (phẩy)",
        "Nét 4: 一 (ngang)",
        "Nét 5: 丨 (thẳng đứng)",
        "Nét 6: ㇇ (nét móc)"
      ]
    },
    {
      character: "学",
      pinyin: "xué",
      meaning: "học",
      strokes: 8,
      radicals: ["学", "子"],
      strokeOrder: [
        "Nét 1: ㇀ (nét cắt)",
        "Nét 2: ㇀ (nét cắt)",
        "Nét 3: 一 (ngang)",
        "Nét 4: ㇛ (phẩy dọc trái)",
        "Nét 5: 一 (ngang)",
        "Nét 6: 丿 (phẩy)",
        "Nét 7: 丨 (thẳng đứng)",
        "Nét 8: ㇇ (nét móc)"
      ]
    }
  ];

  const current = characters[currentCharacter];

  const handleStrokeComplete = () => {
    if (completedStrokes < current.strokes) {
      setCompletedStrokes(prev => prev + 1);
    }
  };

  const resetWriting = () => {
    setCompletedStrokes(0);
    setShowStrokes(false);
  };

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
    resetWriting();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Luyện Viết Chữ Hán
        </h2>
        <p className="text-muted-foreground">
          Học thứ tự nét và kỹ thuật viết chữ Hán chuẩn xác
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Character Display */}
        <Card className="p-8 shadow-card">
          <div className="text-center space-y-6">
            <div className="text-8xl font-chinese font-bold text-primary">
              {current.character}
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl text-muted-foreground">
                [{current.pinyin}]
              </div>
              <div className="text-lg">
                Nghĩa: {current.meaning}
              </div>
              <div className="text-sm text-muted-foreground">
                {current.strokes} nét • Bộ thủ: {current.radicals.join(", ")}
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowStrokes(!showStrokes)}
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                {showStrokes ? "Ẩn" : "Hiện"} thứ tự nét
              </Button>
              <Button
                variant="outline"
                onClick={resetWriting}
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Viết lại
              </Button>
            </div>
          </div>
        </Card>

        {/* Writing Practice Area */}
        <Card className="p-8 shadow-card">
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold">Khu vực luyện viết</h3>
            
            {/* Practice Grid */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center bg-muted/10">
                <div className="text-6xl font-chinese text-muted-foreground/50 select-none">
                  {current.character}
                </div>
                
                {/* Stroke Progress Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-chinese text-primary/60">
                    {completedStrokes > 0 && (
                      <span className="character-stroke animate-pulse">
                        {current.character}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Tiến độ: {completedStrokes}/{current.strokes} nét
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(completedStrokes / current.strokes) * 100}%` }}
                ></div>
              </div>

              {completedStrokes < current.strokes ? (
                <Button
                  onClick={handleStrokeComplete}
                  variant="game"
                  className="w-full"
                >
                  Hoàn thành nét {completedStrokes + 1}
                </Button>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Hoàn thành!</span>
                  </div>
                  <Button
                    onClick={nextCharacter}
                    variant="success"
                    className="w-full gap-2"
                  >
                    Ký tự tiếp theo <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Stroke Order Guide */}
      {showStrokes && (
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Thứ tự nét viết</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.strokeOrder.map((stroke, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border transition-all ${
                  index < completedStrokes
                    ? 'bg-success-soft border-success text-success-foreground'
                    : index === completedStrokes
                    ? 'bg-secondary-soft border-secondary'
                    : 'bg-muted/50 border-muted'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm">{stroke}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Progress Statistics */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Thống kê luyện tập</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Ký tự đã học</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-secondary">156</div>
            <div className="text-sm text-muted-foreground">Nét đã viết</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-success">92%</div>
            <div className="text-sm text-muted-foreground">Độ chính xác</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">7</div>
            <div className="text-sm text-muted-foreground">Ngày liên tiếp</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WritingSection;