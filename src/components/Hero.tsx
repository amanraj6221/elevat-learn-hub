import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-learning.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex">
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                🎓 Centralised Student Activity Records
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smart Student{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Hub
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A centralized digital platform for Higher Education Institutions to document, track, 
                and showcase every student’s academic and non-academic achievements — from conferences 
                and certifications to volunteering and internships.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-success" />
                </div>
                <span className="text-sm text-muted-foreground">Empowers Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-warning" />
                </div>
                <span className="text-sm text-muted-foreground">Supports Accreditation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary/50 transition-colors group"
                onClick={() => window.open("https://youtu.be/-MhXozNPOeg?si=GYJ28nWtzOHYf-x8", "_blank")}
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Centralised student hub illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
