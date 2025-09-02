import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

const Courses = () => {
  const modules = [
    {
      title: 'Academic Records',
      instructor: 'Verified by Faculty',
      image: '/placeholder.svg',
      rating: 5,
      students: 0,
      duration: 'Continuous',
      price: 'Included',
      level: 'Beginner' as const,
      category: 'Academics'
    },
    {
      title: 'Certifications & Online Courses',
      instructor: 'MOOCs / External Platforms',
      image: '/placeholder.svg',
      rating: 5,
      students: 0,
      duration: 'Flexible',
      price: 'Included',
      level: 'Intermediate' as const,
      category: 'Certifications'
    },
    {
      title: 'Club Activities & Volunteering',
      instructor: 'Student Clubs / NGOs',
      image: '/placeholder.svg',
      rating: 5,
      students: 0,
      duration: 'Ongoing',
      price: 'Included',
      level: 'Beginner' as const,
      category: 'Extracurriculars'
    },
    {
      title: 'Internships & Leadership Roles',
      instructor: 'Verified by Institution',
      image: '/placeholder.svg',
      rating: 5,
      students: 0,
      duration: 'Varies',
      price: 'Included',
      level: 'Advanced' as const,
      category: 'Professional'
    },
    {
      title: 'Competitions & Academic Contests',
      instructor: 'College / University Events',
      image: '/placeholder.svg',
      rating: 5,
      students: 0,
      duration: 'Seasonal',
      price: 'Included',
      level: 'Intermediate' as const,
      category: 'Competitions'
    },
    {
      title: 'Community Service',
      instructor: 'Community / Govt Programs',
      image: '/placeholder.svg',
      rating: 5,
      students: 0,
      duration: 'Ongoing',
      price: 'Included',
      level: 'Beginner' as const,
      category: 'Service'
    }
  ];

  const categories = [
    'All Records',
    'Academics',
    'Certifications',
    'Extracurriculars',
    'Internships',
    'Competitions',
    'Community Service'
  ];

  return (
    <section id="modules" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Explore Student{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Activity Records
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive documentation of academic, co-curricular, and professional achievements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-gradient-primary hover:opacity-90" : "hover:bg-secondary/80"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <CourseCard key={module.title} {...module} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
