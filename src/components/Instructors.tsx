import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Award } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      name: 'Dr. Sarah Chen',
      title: 'AI & Machine Learning Expert',
      image: '/placeholder.svg',
      rating: 4.9,
      students: 45000,
      courses: 12,
      specialty: 'Artificial Intelligence',
      bio: 'Former Google AI researcher with 10+ years of experience in machine learning and neural networks.'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Full-Stack Developer',
      image: '/placeholder.svg',
      rating: 4.8,
      students: 32000,
      courses: 8,
      specialty: 'Web Development',
      bio: 'Senior engineer at Meta, specializing in React, Node.js, and scalable web architectures.'
    },
    {
      name: 'Emily Johnson',
      title: 'UX Design Lead',
      image: '/placeholder.svg',
      rating: 4.9,
      students: 28000,
      courses: 15,
      specialty: 'Design Systems',
      bio: 'Design director with experience at Apple and Airbnb, passionate about user-centered design.'
    },
    {
      name: 'David Park',
      title: 'Data Science Director',
      image: '/placeholder.svg',
      rating: 4.8,
      students: 38000,
      courses: 10,
      specialty: 'Data Analytics',
      bio: 'Former Netflix data scientist, expert in Python, R, and advanced statistical modeling.'
    }
  ];

  return (
    <section id="instructors" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Learn from{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our instructors are seasoned professionals from top companies, bringing real-world experience to every lesson
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <Card 
              key={instructor.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-success/20 text-success border-success/30 text-xs">
                        Top Instructor
                      </Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{instructor.title}</p>
                    <Badge variant="outline" className="text-xs">
                      {instructor.specialty}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span>{instructor.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{instructor.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{instructor.courses} courses</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Become an Instructor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;