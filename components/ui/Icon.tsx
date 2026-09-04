import {
  Globe,
  Contact,
  Image as ImageIcon,
  Video,
  ThumbsUp,
  MessageCircle,
  Megaphone,
  LineChart,
  Clock,
  Users,
  IndianRupee,
  BarChart3,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/data/content';

const MAP: Record<IconName, LucideIcon> = {
  globe: Globe,
  id: Contact,
  image: ImageIcon,
  video: Video,
  thumbs: ThumbsUp,
  whatsapp: MessageCircle,
  megaphone: Megaphone,
  chart: LineChart,
  clock: Clock,
  users: Users,
  rupee: IndianRupee,
  bars: BarChart3,
  building: Building2,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name];
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
