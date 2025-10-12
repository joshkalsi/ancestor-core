import { Head, Link } from '@inertiajs/react';

import StyledLink from '@/components/ui/StyledLink';
import AppLayout from '@/layouts/app-layout';
import { create, index, show } from '@/routes/units';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Units',
    href: index().url,
  },
];

interface Props {
  units: App.Data.UnitData[];
}

export default function UnitIndex({ units }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Units" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <StyledLink href={create().url}>Add unit</StyledLink>
        <ul>
          {units.map((unit) => (
            <li key={unit.id}>
              <Link href={show(unit.id)}>{unit.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}
