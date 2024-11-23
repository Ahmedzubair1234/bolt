import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

export function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Daily Tests</CardTitle>
            <Icon name="Activity" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+8% from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <Icon name="DollarSign" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$23,456</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">For today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Test Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { patient: 'John Doe', test: 'Blood Test', status: 'Completed', time: '2 hours ago' },
                { patient: 'Jane Smith', test: 'X-Ray', status: 'Pending', time: '3 hours ago' },
                { patient: 'Mike Johnson', test: 'MRI Scan', status: 'In Progress', time: '4 hours ago' },
                { patient: 'Sarah Wilson', test: 'CT Scan', status: 'Completed', time: '5 hours ago' },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{report.patient}</div>
                    <div className="text-sm text-muted-foreground">{report.test}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${
                      report.status === 'Completed' ? 'text-green-600' : 
                      report.status === 'Pending' ? 'text-yellow-600' : 'text-blue-600'
                    }`}>
                      {report.status}
                    </div>
                    <div className="text-sm text-muted-foreground">{report.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Cardiology', tests: 45, revenue: '$12,345' },
                { name: 'Neurology', tests: 32, revenue: '$9,876' },
                { name: 'Orthopedics', tests: 28, revenue: '$8,765' },
                { name: 'Radiology', tests: 56, revenue: '$15,678' },
              ].map((dept, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{dept.name}</div>
                    <div className="text-sm text-muted-foreground">{dept.tests} tests</div>
                  </div>
                  <div className="font-medium">{dept.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}