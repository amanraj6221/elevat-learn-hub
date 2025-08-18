import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  originalPrice?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

const CourseCard = ({
  title,
  instructor,
  image,
  rating,
  students,
  duration,
  price,
  originalPrice,
  level,
  category
}: CourseCardProps) => {
  const levelColors = {
    Beginner: 'bg-success/20 text-success border-success/30',
    Intermediate: 'bg-warning/20 text-warning border-warning/30',
    Advanced: 'bg-accent/20 text-accent border-accent/30'
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={levelColors[level]}>
            {level}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-xs font-medium">{category}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title & Instructor */}
          <div>
            <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">by {instructor}</p>
          </div>

          {/* Rating & Stats */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground">({students.toLocaleString()})</span>
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>24 lessons</span>
              </div>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
            <Button 
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;