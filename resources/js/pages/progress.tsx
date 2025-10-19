import { Head } from '@inertiajs/react';

import KanbanBoard from '@/components/KanbanBoard';
import AppLayout from '@/layouts/app-layout';
import { progress } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Progress Tracker',
    href: progress().url,
  },
];

interface Props {
  units: App.Data.UnitData[];
  stages: App.Data.StageData[];
}

export default function Progress({ units, stages }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Progress Tracker" />
      <section className="h-full p-4">
        <KanbanBoard columns={stages} units={units} />
      </section>
    </AppLayout>
  );
}
