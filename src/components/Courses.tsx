import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    {
      title: 'Complete Machine Learning Bootcamp with Python',
      instructor: 'Dr. Sarah Chen',
      image: '/placeholder.svg',
      rating: 4.9,
      students: 12500,
      duration: '42h',
      price: '$89.99',
      originalPrice: '$199.99',
      level: 'Intermediate' as const,
      category: 'Data Science'
    },
    {
      title: 'Modern React Development with TypeScript',
      instructor: 'Marcus Rodriguez',
      image: '/placeholder.svg',
      rating: 4.8,
      students: 8900,
      duration: '36h',
      price: '$79.99',
      originalPrice: '$159.99',
      level: 'Intermediate' as const,
      category: 'Web Development'
    },
    {
      title: 'UX Design Fundamentals: From Wireframes to Prototypes',
      instructor: 'Emily Johnson',
      image: '/placeholder.svg',
      rating: 4.9,
      students: 6700,
      duration: '28h',
      price: '$69.99',
      originalPrice: '$129.99',
      level: 'Beginner' as const,
      category: 'Design'
    },
    {
      title: 'Advanced Data Analytics with Python & R',
      instructor: 'David Park',
      image: '/placeholder.svg',
      rating: 4.8,
      students: 5400,
      duration: '48h',
      price: '$99.99',
      originalPrice: '$219.99',
      level: 'Advanced' as const,
      category: 'Data Science'
    },
    {
      title: 'iOS App Development with Swift',
      instructor: 'Lisa Wang',
      image: '/placeholder.svg',
      rating: 4.7,
      students: 4200,
      duration: '52h',
      price: '$94.99',
      originalPrice: '$189.99',
      level: 'Intermediate' as const,
      category: 'Mobile Dev'
    },
    {
      title: 'Digital Marketing Mastery: SEO, PPC & Analytics',
      instructor: 'Tom Jackson',
      image: '/placeholder.svg',
      rating: 4.8,
      students: 7800,
      duration: '32h',
      price: '$74.99',
      originalPrice: '$149.99',
      level: 'Beginner' as const,
      category: 'Marketing'
    }
  ];

  const categories = [
    'All Courses',
    'Data Science',
    'Web Development',
    'Design',
    'Mobile Dev',
    'Marketing',
    'Business'
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Explore Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Course Catalog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover courses designed by industry experts to accelerate your career growth
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

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Load More Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;