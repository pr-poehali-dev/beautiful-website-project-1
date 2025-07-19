import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SupportSection from '@/components/SupportSection';
import StoriesSection from '@/components/StoriesSection';
import ContactSection from '@/components/ContactSection';
import ChatModal from '@/components/ChatModal';

export default function Index() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation onChatOpen={handleChatOpen} />
      <HeroSection />
      <AboutSection />
      <SupportSection />
      <StoriesSection />
      <ContactSection />
      <ChatModal isOpen={isChatOpen} onClose={handleChatClose} />
    </div>
  );
}