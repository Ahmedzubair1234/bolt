import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DOCTORS } from '@/lib/constants';
import { useState } from 'react';

export function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = DOCTORS.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="doctors" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Doctors</h2>
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search doctors by name, department, or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xl mx-auto"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id}>
              <CardHeader>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-48 w-full object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{doctor.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-1">
                  {doctor.department}
                </p>
                <p className="text-sm text-muted-foreground">
                  {doctor.specialization}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}