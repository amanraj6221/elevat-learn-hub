import { Card, CardContent } from '@/components/ui/card';
import { Brain, Video, Trophy, MessageSquare, Users, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Study Companion',
      description: 'Get personalized help from our AI tutor that understands your learning style and adapts to your pace.',
      color: 'text-primary'
    },
    {
      icon: Video,
      title: 'HD Video Streaming',
      description: 'Crystal clear video lessons with adaptive quality that works seamlessly on any device.',
      color: 'text-accent'
    },
    {
      icon: Trophy,
      title: 'Earn Certificates',
      description: 'Showcase your achievements with beautiful certificates that validate your newfound skills.',
      color: 'text-warning'
    },
    {
      icon: MessageSquare,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with engaging quizzes that make learning fun and effective.',
      color: 'text-success'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Connect with fellow learners, share insights, and grow together in collaborative groups.',
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics and personalized recommendations.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ElevatLearn?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the most comprehensive learning platform that puts your success first
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;