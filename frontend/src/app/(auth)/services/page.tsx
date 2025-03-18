import Services from '@/app/components/Services'
import { IconDeviceMobile, IconDeviceLaptop, IconDeviceTablet } from "@tabler/icons-react";

export default function ServicesPage() {
  return (
    <main>
      <div className="flex flex-col gap-8">
        <Services 
          title="Mobile View"
          description="Check how your website looks on mobile devices"
          icon={<IconDeviceMobile className="w-8 h-8" />}
        />
        <Services 
          title="Tablet View"
          description="Preview your website on tablet devices"
          icon={<IconDeviceTablet className="w-8 h-8" />}
        />
        <Services 
          title="Desktop View"
          description="See how your website appears on desktop screens"
          icon={<IconDeviceLaptop className="w-8 h-8" />}
        />
      </div>
    </main>
  );
}