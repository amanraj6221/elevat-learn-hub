import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-learning.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                🚀 AI-Powered Learning Experience
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Learn Without{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Limits
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of learners on ElevatLearn - where AI tutors guide your journey, 
                expert instructors inspire growth, and every lesson brings you closer to your dreams.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-success" />
                </div>
                <span className="text-sm text-muted-foreground">50K+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-warning" />
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">500+ Courses</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              >
                Start Learning Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary/50 transition-colors group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by learners from:</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                {/* Placeholder for company logos */}
                <div className="text-xs font-medium px-3 py-1 bg-secondary rounded">Google</div>
                <div className="text-xs font-medium px-3 py-1 bg-secondary rounded">Microsoft</div>
                <div className="text-xs font-medium px-3 py-1 bg-secondary rounded">Meta</div>
                <div className="text-xs font-medium px-3 py-1 bg-secondary rounded">Apple</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Students learning together with AI-powered tools"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-medium">AI Tutor Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="text-xs text-muted-foreground">Progress</div>
                <div className="text-sm font-semibold">73% Complete</div>
                <div className="w-16 h-1 bg-secondary rounded-full mt-1">
                  <div className="w-3/4 h-1 bg-gradient-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;