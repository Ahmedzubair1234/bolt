import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
  onRegister: () => void;
}

export function LoginForm({ onRegister }: LoginFormProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button className="w-full">{t('common.login')}</Button>
      <div className="text-center text-sm">
        <span className="text-muted-foreground">Don't have an account? </span>
        <Button variant="link" className="p-0" onClick={onRegister}>
          Register
        </Button>
      </div>
    </div>
  );
}