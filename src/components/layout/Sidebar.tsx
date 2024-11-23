import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as LucideIcons from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-40 h-screen w-16 bg-background">
      <div className="flex h-full flex-col border-r">
        <div className="flex h-14 items-center justify-center border-b">
          <Icon name="Activity" className="h-6 w-6 text-purple-600" />
        </div>
        <nav className="flex-1 space-y-1 p-2">
          <TooltipProvider delayDuration={0}>
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className={cn(
                        'group flex h-10 w-full items-center justify-center rounded-md text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Icon
                        name={item.icon as keyof typeof LucideIcons}
                        className="h-4 w-4"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    {t(`nav.${item.name.toLowerCase().replace(' ', '')}`)}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </nav>
      </div>
    </div>
  );
}