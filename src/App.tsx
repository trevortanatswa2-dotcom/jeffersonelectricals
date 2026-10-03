/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Electrical Installations');
  const [contactPreFill, setContactPreFill] = useState<{ service?: string; notes?: string }>({});

  const handleOpenRequestService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleOpenEstimator = () => {
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillContact = (service: string, notes: string) => {
    setContactPreFill({ service, notes });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950 pb-14 sm:pb-0">
      {/* Navigation Header adhering to 3-zone contract */}
      <Header onRequestService={() => handleOpenRequestService()} />

      <main className="flex-1">
        {/* Hero Section with exact required headline, supporting text, 3 prominent buttons & hero image */}
        <Hero
          onRequestService={() => handleOpenRequestService()}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* Trust Metrics Bar */}
        <TrustStats />

        {/* 6 Required Service Cards with detailed sub-bullets & category filtering */}
        <ServicesSection
          onSelectService={(serviceTitle) => {
            setContactPreFill({ service: serviceTitle });
            handleScrollToContact();
          }}
        />

        {/* Interactive Free Quote Estimator Tool */}
        <QuoteEstimator onPreFillContact={handlePreFillContact} />

        {/* Why Choose Us Section with all 7 prompt-mandated highlights */}
        <WhyChooseUs />

        {/* About Us Section with exact company mission statement */}
        <AboutSection />

        {/* Projects / Our Work Gallery with Before-and-After case study */}
        <ProjectsGallery />

        {/* Call to Action Section with exact prompt copy and buttons */}
        <CallToAction
          onRequestQuote={handleOpenEstimator}
          onContactUs={handleScrollToContact}
        />

        {/* Contact Section with full form, phone, WhatsApp, email, address, hours */}
        <ContactSection
          preFilledService={contactPreFill.service}
          preFilledNotes={contactPreFill.notes}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Quick Service Dispatch Modal */}
      <ServiceRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Sticky Mobile Bar under 15% mobile viewport height */}
      <MobileQuickBar onRequestService={() => handleOpenRequestService()} />
    </div>
  );
}
