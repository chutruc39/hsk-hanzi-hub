import { useState } from "react";
import { Button } from "@/components/ui/button";
import AIChatBox from "./AIChatBox";
import pandaMascot from "@/assets/panda-mascot.png";

const PandaChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 p-0 overflow-hidden bg-white border-2 border-primary"
        style={{
          backgroundImage: `url(${pandaMascot})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        aria-label="Mở trợ lý AI"
      >
        <span className="sr-only">Trợ lý AI Panda</span>
      </Button>

      {isChatOpen && <AIChatBox onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default PandaChatButton;
