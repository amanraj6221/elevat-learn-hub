import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Stakeholders from '@/components/Stakeholders'; // renamed from Instructors
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Users, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Courses />
      <Stakeholders />
      
      {/* Background / Problem Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Background &{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Problem
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Despite increasing digitization, student achievements remain scattered across departments or lost in paper-based records. 
              Lack of a centralized platform hampers efficiency, limits verified portfolios, and complicates processes like NAAC accreditation.
            </p>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                🚀 Proposed Solution
              </Badge>
              <h2 className="text-4xl font-bold">
                Introducing the{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smart Student Hub
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A centralized mobile + web platform that digitally catalogs and manages every student’s academic and non-academic achievements throughout their journey in higher education.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span>Builds a verified student profile from Day 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span>Empowers faculty with real-time mentoring data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <span>Reduces paperwork and aids accreditation</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => window.open("https://youtu.be/-MhXozNPOeg?si=GYJ28nWtzOHYf-x8", "_blank")}
              >
                Watch Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Expected Outcomes</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Reduced paperwork and improved transparency</li>
                    <li>✅ Enhanced placement and higher studies readiness</li>
                    <li>✅ Data-driven decision-making for institutions</li>
                    <li>✅ Streamlined NAAC, AICTE, and NIRF reporting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Impact &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Empower students with holistic digital profiles, simplify faculty tasks, and modernize institutional operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary/50 transition-colors"
              onClick={() => window.open("https://youtu.be/-MhXozNPOeg?si=GYJ28nWtzOHYf-x8", "_blank")}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary/50 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Higher Education Department
              </span>
            </div>
            <p className="text-muted-foreground">
              Government of Jammu & Kashmir • Smart Education Initiative
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 Smart Student Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
