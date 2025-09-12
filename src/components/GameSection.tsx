import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shuffle, RotateCcw, Trophy, Timer, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GameSection = () => {
  const [gameType, setGameType] = useState('matching');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const { toast } = useToast();

  const wordPairs = [
    { chinese: "你好", vietnamese: "xin chào", id: 1 },
    { chinese: "谢谢", vietnamese: "cảm ơn", id: 2 },
    { chinese: "再见", vietnamese: "tạm biệt", id: 3 },
    { chinese: "学习", vietnamese: "học tập", id: 4 },
    { chinese: "朋友", vietnamese: "bạn bè", id: 5 },
    { chinese: "学生", vietnamese: "học sinh", id: 6 }
  ];

  // Create cards for matching game
  const cards = [
    ...wordPairs.map(pair => ({ ...pair, type: 'chinese', text: pair.chinese, matchId: pair.id })),
    ...wordPairs.map(pair => ({ ...pair, type: 'vietnamese', text: pair.vietnamese, matchId: pair.id }))
  ].sort(() => Math.random() - 0.5);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(60);
    setSelectedCards([]);
    setMatchedPairs([]);
    
    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameActive(false);
          toast({
            title: "Hết giờ!",
            description: `Bạn đã ghi được ${score} điểm`,
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleCardClick = (cardIndex: number) => {
    if (!gameActive || selectedCards.length >= 2 || selectedCards.includes(cardIndex) || matchedPairs.includes(cardIndex)) {
      return;
    }

    const newSelected = [...selectedCards, cardIndex];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      const firstCard = cards[first];
      const secondCard = cards[second];

      if (firstCard.matchId === secondCard.matchId && firstCard.type !== secondCard.type) {
        // Match found!
        setTimeout(() => {
          setMatchedPairs(prev => [...prev, first, second]);
          setScore(prev => prev + 10);
          setSelectedCards([]);
          
          toast({
            title: "Tuyệt vời! 🎉",
            description: "Bạn đã ghép đúng cặp từ!",
          });

          // Check if game is complete
          if (matchedPairs.length + 2 === cards.length) {
            setGameActive(false);
            toast({
              title: "Hoàn thành!",
              description: `Chúc mừng! Điểm số: ${score + 10}`,
            });
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setGameActive(false);
    setScore(0);
    setTimeLeft(60);
    setSelectedCards([]);
    setMatchedPairs([]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Trò Chơi Học Tập
        </h2>
        <p className="text-muted-foreground">
          Học tiếng Trung qua các trò chơi thú vị và tương tác
        </p>
      </div>

      {/* Game Selection */}
      <div className="flex justify-center gap-4">
        {[
          { id: 'matching', name: 'Ghép từ', icon: Shuffle },
          { id: 'quiz', name: 'Đố vui', icon: Trophy },
          { id: 'memory', name: 'Ghi nhớ', icon: Star }
        ].map(game => {
          const Icon = game.icon;
          return (
            <Button
              key={game.id}
              variant={gameType === game.id ? "default" : "outline"}
              onClick={() => setGameType(game.id)}
              className="gap-2"
            >
              <Icon className="w-4 h-4" />
              {game.name}
            </Button>
          );
        })}
      </div>

      {/* Game Stats */}
      <div className="flex justify-center gap-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">{score}</div>
          <div className="text-sm text-muted-foreground">Điểm</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-secondary">{timeLeft}s</div>
          <div className="text-sm text-muted-foreground">Thời gian</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-success">{matchedPairs.length / 2}</div>
          <div className="text-sm text-muted-foreground">Cặp đúng</div>
        </Card>
      </div>

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        {!gameActive ? (
          <Button
            onClick={startGame}
            variant="hero"
            size="lg"
            className="gap-2"
          >
            <Timer className="w-5 h-5" />
            Bắt đầu chơi
          </Button>
        ) : (
          <Button
            onClick={resetGame}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Chơi lại
          </Button>
        )}
      </div>

      {/* Matching Game */}
      {gameType === 'matching' && (
        <Card className="p-8 shadow-card">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Ghép từ tiếng Trung với nghĩa tiếng Việt</h3>
            <p className="text-muted-foreground">Nhấn vào hai thẻ để ghép cặp từ đúng</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cards.map((card, index) => {
              const isSelected = selectedCards.includes(index);
              const isMatched = matchedPairs.includes(index);
              const isClickable = gameActive && !isMatched && !isSelected && selectedCards.length < 2;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`
                    aspect-square p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                    flex items-center justify-center text-center
                    ${isMatched 
                      ? 'bg-success-soft border-success text-success-foreground' 
                      : isSelected 
                      ? 'bg-secondary-soft border-secondary scale-105 shadow-hover'
                      : isClickable
                      ? 'bg-card border-muted hover:border-primary hover:shadow-card hover:scale-105'
                      : 'bg-muted/50 border-muted cursor-not-allowed opacity-50'
                    }
                    ${card.type === 'chinese' ? 'font-chinese' : 'font-ui'}
                  `}
                >
                  <div className={`${card.type === 'chinese' ? 'text-lg font-bold' : 'text-sm'}`}>
                    {card.text}
                  </div>
                </div>
              );
            })}
          </div>

          {matchedPairs.length === cards.length && (
            <div className="text-center mt-8 space-y-4">
              <div className="text-4xl">🎉</div>
              <h3 className="text-2xl font-bold text-success">Xuất sắc!</h3>
              <p className="text-muted-foreground">Bạn đã hoàn thành trò chơi với {score} điểm</p>
              <Button onClick={resetGame} variant="hero">
                Chơi lại
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* Game History & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Kỷ lục cá nhân</h3>
          <div className="space-y-3">
            {[
              { game: "Ghép từ", score: 180, date: "Hôm nay" },
              { game: "Đố vui", score: 250, date: "Hôm qua" }, 
              { game: "Ghi nhớ", score: 320, date: "2 ngày trước" }
            ].map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium">{record.game}</div>
                  <div className="text-sm text-muted-foreground">{record.date}</div>
                </div>
                <Badge variant="secondary">{record.score} điểm</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Thành tích</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Trophy, label: "Tổng trận thắng", value: "47" },
              { icon: Star, label: "Điểm cao nhất", value: "420" },
              { icon: Timer, label: "Thời gian chơi", value: "12h" },
              { icon: Shuffle, label: "Từ đã học", value: "156" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-3 bg-primary-soft rounded-lg">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GameSection;