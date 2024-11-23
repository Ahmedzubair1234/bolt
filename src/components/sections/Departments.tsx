import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { DEPARTMENTS } from '@/lib/constants';

export function Departments() {
  return (
    <section id="departments" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Departments</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((dept) => (
            <Card key={dept.id}>
              <CardHeader className="flex flex-row items-center space-y-0">
                <Icon name={dept.icon} className="mr-2 h-6 w-6" />
                <CardTitle>{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{dept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}