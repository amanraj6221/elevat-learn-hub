import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, CheckCircle, BarChart2 } from 'lucide-react';

const Stakeholders = () => {
  const stakeholders = [
    {
      name: 'Students',
      title: 'Empowered Learners',
      icon: Users,
      specialty: 'Profiles & Achievements',
      bio: 'Students can build a verified, holistic digital portfolio showcasing academic and non-academic achievements.',
    },
    {
      name: 'Faculty',
      title: 'Mentors & Verifiers',
      icon: CheckCircle,
      specialty: 'Approvals & Tracking',
      bio: 'Faculty validate records, monitor progress, and provide guidance based on real-time student data.',
    },
    {
      name: 'Institutions',
      title: 'Administrators',
      icon: BarChart2,
      specialty: 'Reports & Accreditation',
      bio: 'Institutions can generate consolidated reports for NAAC, AICTE, NIRF, and streamline accreditation processes.',
    }
  ];

  return (
    <section id="stakeholders" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Key{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Stakeholders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing together students, faculty, and institutions on one unified digital platform.
          </p>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder) => {
            const Icon = stakeholder.icon;
            return (
              <Card 
                key={stakeholder.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="space-y-4 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Info */}
                    <h3 className="font-semibold text-lg">{stakeholder.name}</h3>
                    <p className="text-sm text-muted-foreground">{stakeholder.title}</p>
                    <Badge variant="outline" className="text-xs">{stakeholder.specialty}</Badge>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {stakeholder.bio}
                    </p>
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

export default Stakeholders;
