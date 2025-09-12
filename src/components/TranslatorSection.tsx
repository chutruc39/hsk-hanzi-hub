import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightLeft, Copy, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TranslatorSection = () => {
  const [vietnameseText, setVietnameseText] = useState("");
  const [chineseText, setChineseText] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);
  const { toast } = useToast();

  const handleTranslate = () => {
    if (!vietnameseText.trim() && !chineseText.trim()) return;

    // Simulate translation (in real app, this would call an API)
    if (!isSwapped) {
      // Vietnamese to Chinese
      if (vietnameseText.trim()) {
        const translations = {
          "xin chào": "你好 (nǐ hǎo)",
          "cảm ơn": "谢谢 (xiè xiè)",
          "tạm biệt": "再见 (zài jiàn)",
          "tôi yêu bạn": "我爱你 (wǒ ài nǐ)",
          "học tập": "学习 (xué xí)"
        };
        
        const result = translations[vietnameseText.toLowerCase() as keyof typeof translations] 
          || `${vietnameseText} 的中文翻译 (Bản dịch tiếng Trung)`;
        setChineseText(result);
      }
    } else {
      // Chinese to Vietnamese
      if (chineseText.trim()) {
        const translations = {
          "你好": "xin chào",
          "谢谢": "cảm ơn", 
          "再见": "tạm biệt",
          "我爱你": "tôi yêu bạn",
          "学习": "học tập"
        };
        
        const result = translations[chineseText as keyof typeof translations] 
          || `Bản dịch tiếng Việt của: ${chineseText}`;
        setVietnameseText(result);
      }
    }
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    const temp = vietnameseText;
    setVietnameseText(chineseText);
    setChineseText(temp);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Đã sao chép!",
      description: "Văn bản đã được sao chép vào clipboard",
    });
  };

  const handleSpeak = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'vi' ? 'vi-VN' : 'zh-CN';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Dịch Việt ↔ Trung
        </h2>
        <p className="text-muted-foreground">
          Dịch thuật chính xác giữa tiếng Việt và tiếng Trung
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vietnamese Input */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">
              {isSwapped ? "中文 (Tiếng Trung)" : "Tiếng Việt"}
            </h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSpeak(vietnameseText, isSwapped ? 'zh' : 'vi')}
                disabled={!vietnameseText}
              >
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(vietnameseText)}
                disabled={!vietnameseText}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Textarea
            placeholder={isSwapped ? "Nhập tiếng Trung..." : "Nhập tiếng Việt..."}
            value={vietnameseText}
            onChange={(e) => setVietnameseText(e.target.value)}
            className={`min-h-[200px] text-lg resize-none ${isSwapped ? 'font-chinese' : 'font-ui'}`}
          />
        </Card>

        {/* Swap Button */}
        <div className="lg:hidden flex justify-center">
          <Button
            variant="outline"
            onClick={handleSwap}
            className="bg-gradient-secondary hover:bg-gradient-secondary/90 text-white border-0"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </Button>
        </div>

        {/* Chinese Output */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">
              {isSwapped ? "Tiếng Việt" : "中文 (Tiếng Trung)"}
            </h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSpeak(chineseText, isSwapped ? 'vi' : 'zh')}
                disabled={!chineseText}
              >
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(chineseText)}
                disabled={!chineseText}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Textarea
            placeholder={isSwapped ? "Bản dịch tiếng Việt..." : "Bản dịch tiếng Trung..."}
            value={chineseText}
            onChange={(e) => setChineseText(e.target.value)}
            className={`min-h-[200px] text-lg resize-none ${isSwapped ? 'font-ui' : 'font-chinese'}`}
          />
        </Card>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={handleSwap}
          variant="outline"
          className="hidden lg:flex gap-2"
        >
          <ArrowRightLeft className="w-4 h-4" />
          Đổi ngôn ngữ
        </Button>
        <Button
          onClick={handleTranslate}
          className="bg-gradient-primary hover:bg-gradient-primary/90 text-white border-0 px-8"
          disabled={!vietnameseText.trim() && !chineseText.trim()}
        >
          Dịch ngay
        </Button>
      </div>

      {/* Quick Phrases */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Cụm từ thông dụng</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { vi: "Xin chào", zh: "你好" },
            { vi: "Cảm ơn", zh: "谢谢" },
            { vi: "Tạm biệt", zh: "再见" },
            { vi: "Học tập", zh: "学习" },
          ].map((phrase, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => {
                setVietnameseText(phrase.vi);
                setChineseText(`${phrase.zh} (${phrase.vi})`);
              }}
              className="text-left flex-col h-auto py-3"
            >
              <div className="font-chinese text-lg">{phrase.zh}</div>
              <div className="text-sm text-muted-foreground">{phrase.vi}</div>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TranslatorSection;