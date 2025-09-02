import { Card, CardContent } from '@/components/ui/card';
import { LayoutDashboard, ClipboardCheck, CheckCircle, FileText, BarChart2, Link2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: 'Dynamic Student Dashboard',
      description: 'Real-time updates on academic performance, attendance, and credit-based activities.',
    },
    {
      icon: ClipboardCheck,
      title: 'Activity Tracker',
      description: 'Upload and validate participation in seminars, workshops, online courses, internships, and more.',
    },
    {
      icon: CheckCircle,
      title: 'Faculty Approval Panel',
      description: 'Faculty or admins can approve uploaded records to ensure verified and credible achievements.',
    },
    {
      icon: FileText,
      title: 'Auto-Generated Digital Portfolio',
      description: 'Downloadable & shareable verified student portfolio in PDF or web link format.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Reporting',
      description: 'Generate consolidated reports for NAAC, AICTE, NIRF, or internal evaluations with one click.',
    },
    {
      icon: Link2,
      title: 'Integration Support',
      description: 'Seamless integration with LMS, ERP, and digital university platforms.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Key{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering students, simplifying faculty tasks, and modernizing institutional operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
