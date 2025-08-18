import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Instructors from '@/components/Instructors';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, MessageCircle, Zap, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Courses />
      <Instructors />
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful learners who've transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Thompson',
                role: 'Software Engineer at Google',
                content: 'The AI tutor feature is incredible! It feels like having a personal mentor available 24/7. Landed my dream job thanks to ElevatLearn.',
                rating: 5,
                course: 'React Bootcamp'
              },
              {
                name: 'Maria Santos',
                role: 'UX Designer at Spotify',
                content: 'The interactive quizzes and project-based learning approach made complex concepts easy to grasp. Highly recommend!',
                rating: 5,
                course: 'UX Design Fundamentals'
              },
              {
                name: 'James Wilson',
                role: 'Data Scientist at Netflix',
                content: 'Outstanding quality and depth. The instructors are world-class, and the community support is amazing.',
                rating: 5,
                course: 'ML Bootcamp'
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {testimonial.course}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tutor Highlight */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                🤖 AI-Powered Learning
              </Badge>
              <h2 className="text-4xl font-bold">
                Meet Your Personal{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Study Buddy
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our advanced AI tutor adapts to your learning style, answers questions instantly, 
                and provides personalized guidance throughout your journey.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span>24/7 instant answers to your questions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span>Personalized learning paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span>Study group recommendations</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Try AI Tutor Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">AI Tutor</span>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="bg-primary-foreground/10 rounded-lg p-3">
                        "Can you explain how neural networks work?"
                      </div>
                      <div className="bg-primary-foreground/20 rounded-lg p-3">
                        Great question! Neural networks are computing systems inspired by biological neural networks. Let me break it down with a simple analogy...
                      </div>
                      <div className="text-xs opacity-70">
                        Typing...
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Elevate Your Learning?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join over 50,000 students already learning with ElevatLearn. 
            Start your journey today with our free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary/50 transition-colors"
            >
              View Pricing
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ElevatLearn
              </span>
            </div>
            <p className="text-muted-foreground">
              Empowering learners worldwide with AI-powered education
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 ElevatLearn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;