import React from 'react';
import { Header } from './components/Header';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { PathSection } from './components/sections/PathSection';
import { AboutChapadaSection } from './components/sections/AboutChapadaSection';
import { DestinationsSection } from './components/sections/DestinationsSection';
import { TransportsSection } from './components/sections/TransportsSection';
import { SchedulesSection } from './components/sections/SchedulesSection';
import { AttractionsSection } from './components/sections/AttractionsSection';
import { MysticSection } from './components/sections/MysticSection';
import { GroupsSection } from './components/sections/GroupsSection';
import { SupportSection } from './components/sections/SupportSection';
import { BoardingSection } from './components/sections/BoardingSection';
import { WhyDestinaSection } from './components/sections/WhyDestinaSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { RoundTripSection } from './components/sections/RoundTripSection';
import { FaqSection } from './components/sections/FaqSection';
import { CtaHorizonSection } from './components/sections/CtaHorizonSection';

export const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-clay selection:text-white">
      <Header />
      <WhatsAppFloating />
      <main>
        <HeroSection />
        <PathSection />
        <AboutChapadaSection />
        <DestinationsSection />
        <TransportsSection />
        <SchedulesSection />
        <AttractionsSection />
        <MysticSection />
        <GroupsSection />
        <SupportSection />
        <BoardingSection />
        <WhyDestinaSection />
        <HowItWorksSection />
        <RoundTripSection />
        <FaqSection />
        <CtaHorizonSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
