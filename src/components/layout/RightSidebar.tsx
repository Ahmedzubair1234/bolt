import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useTheme } from '@/components/theme-provider';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { useState } from 'react';

export function RightSidebar() {
  const { theme, setTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <div className="fixed right-0 top-0 z-40 h-screen w-16 bg-background">
      <div className="flex h-full flex-col items-center justify-between border-l py-4">
        <div className="flex flex-col gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon
                  name={theme === 'dark' ? 'Sun' : 'Moon'}
                  className="h-5 w-5"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                {t('common.theme.light')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                {t('common.theme.dark')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {i18n.language === 'bn' ? 'BN' : 'EN'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage('bn')}>
                বাংলা
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="User" className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {authMode === 'login' ? t('common.login') : t('common.register')}
                </DialogTitle>
                <DialogDescription>
                  {authMode === 'login'
                    ? 'Sign in to your account'
                    : 'Create a new account'}
                </DialogDescription>
              </DialogHeader>
              {authMode === 'login' ? (
                <LoginForm onRegister={() => setAuthMode('register')} />
              ) : (
                <RegisterForm onLogin={() => setAuthMode('login')} />
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="ghost" size="icon" className="text-red-500">
            <Icon name="PhoneCall" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}