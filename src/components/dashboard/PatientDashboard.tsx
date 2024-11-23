import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

export function PatientDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Patient Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Tests</CardTitle>
            <Icon name="Vial" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Test Results</CardTitle>
            <Icon name="FileText" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Blood Test', date: '2024-02-15', status: 'Completed' },
                { name: 'X-Ray', date: '2024-02-10', status: 'Completed' },
                { name: 'MRI Scan', date: '2024-02-05', status: 'Pending' },
              ].map((test, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{test.name}</div>
                    <div className="text-sm text-muted-foreground">{test.date}</div>
                  </div>
                  <div className={`text-sm ${
                    test.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {test.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  doctor: 'Dr. Sarah Johnson',
                  department: 'Cardiology',
                  date: '2024-02-20',
                  time: '10:00 AM'
                },
                {
                  doctor: 'Dr. Michael Chen',
                  department: 'Neurology',
                  date: '2024-02-25',
                  time: '2:30 PM'
                },
              ].map((appointment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{appointment.doctor}</div>
                    <div className="text-sm text-muted-foreground">
                      {appointment.department}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{appointment.date}</div>
                    <div className="text-sm text-muted-foreground">
                      {appointment.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}