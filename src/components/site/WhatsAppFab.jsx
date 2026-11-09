import { MessageCircle } from 'lucide-react';
import { WA_DEFAULT } from '@/data/site';

export default function WhatsAppFab() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Craftwave Digital on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_rgba(0,240,240,0.55)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="sonar-ring absolute inset-0 rounded-full" aria-hidden />
      <MessageCircle className="relative h-5 w-5" strokeWidth={1.75} />
    </a>
  );
}