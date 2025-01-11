import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className='flex justify-center'>
        <div className="absolute -top-5">
          <div className="p-3 rounded-full bg-white shadow-sm border border-gray-100">
            <Icon className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
