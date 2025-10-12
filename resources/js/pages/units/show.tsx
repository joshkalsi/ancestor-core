import { Head, router } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import StyledLink from '@/components/ui/StyledLink';
import AppLayout from '@/layouts/app-layout';
import { destroy, edit, index, show } from '@/routes/units';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Units',
    href: index().url,
  },
];

interface Props {
  unit: App.Data.UnitData;
}

export default function UnitShow({ unit }: Props) {
  const handleDelete = () => {
    const route = destroy(unit.id);
    router.visit(route.url, {
      method: route.method,
    });
  };
  return (
    <AppLayout
      breadcrumbs={[
        ...breadcrumbs,
        {
          title: unit.name,
          href: show(unit.id).url,
        },
      ]}
    >
      <Head title={unit.name} />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <h1>{unit.name}</h1>
        <StyledLink href={edit(unit.id).url}>Edit</StyledLink>
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </AppLayout>
  );
}
