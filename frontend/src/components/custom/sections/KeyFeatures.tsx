import { BarChart3, Folder, Truck, Mail, Printer, Zap } from 'lucide-react';
import { FeatureCard } from '@/components/custom/feature-card';

const features = [
  {
    title: 'HOW WE MARKET',
    description:
      'Create your campaigns in no time at all by shortening your marketing attempt with our extensive array of marketing templates and our years of experience on this field.',
    Icon: BarChart3,
  },
  {
    title: 'EDDM FULL SERVICE',
    description:
      'Easier and dominant advertising! With our EDDM full service rest assured that your message will land on the palm of your target audience!',
    Icon: Folder,
  },
  {
    title: 'FREE LOCAL DELIVERY',
    description:
      'Our free local delivery allows you to conserve energy, save time and money!',
    Icon: Truck,
  },
  {
    title: 'DIRECT MAILING',
    description:
      'Our Direct Mailing provides simplified and cost effective marketing for you. Provide the list and trust us to do the rest!',
    Icon: Mail,
  },
  {
    title: 'TOP QUALITY PRINT',
    description:
      'Utilizing modern production equipment and up-to-date approach with the current printing requirements, we provide an excellent quality print products.',
    Icon: Printer,
  },
  {
    title: 'FAST TURN AROUND',
    description:
      'We offer Same Day Delivery available for many locations. We value your time requirement so we provide a finger snap turnaround times.',
    Icon: Zap,
  },
];

export default function KeyFeatures() {
  return (
    <section>
      <div>
        <h2 className="section-header">KEY FEATURES</h2>
        <div className="section-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              Icon={feature.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
