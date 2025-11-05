import { useState } from "react";
import LearningLayout from "@/components/LearningLayout";
import HomeSection from "@/components/HomeSection";
import TranslatorSection from "@/components/TranslatorSection";
import PronunciationSection from "@/components/PronunciationSection";
import WritingSection from "@/components/WritingSection";
import HSKSection from "@/components/HSKSection";
import GameSection from "@/components/GameSection";
import TopicsSection from "@/components/TopicsSection";
import PandaChatButton from "@/components/PandaChatButton";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onSectionChange={setActiveSection} />;
      case 'translate':
        return <TranslatorSection />;
      case 'pronunciation':
        return <PronunciationSection />;
      case 'writing':
        return <WritingSection />;
      case 'hsk':
        return <HSKSection />;
      case 'games':
        return <GameSection />;
      case 'topics':
        return <TopicsSection />;
      default:
        return <HomeSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <>
      <LearningLayout 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
      >
        {renderSection()}
      </LearningLayout>
      <PandaChatButton />
    </>
  );
};

export default Index;
