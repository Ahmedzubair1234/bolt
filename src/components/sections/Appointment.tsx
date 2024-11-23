import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DEPARTMENTS } from '@/lib/constants';

export function Appointment() {
  return (
    <section id="book" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Book an Appointment
        </h2>
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>Schedule Your Visit</CardTitle>
            <CardDescription>
              Fill out the form below to book your appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept.id} value={dept.name.toLowerCase()}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input type="date" />
              <Button className="w-full">Book Appointment</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}