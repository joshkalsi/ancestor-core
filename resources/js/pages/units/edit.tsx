import { Transition } from '@headlessui/react';
import { Form, Head } from '@inertiajs/react';

import UnitController from '@/actions/App/Http/Controllers/UnitController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { edit, index } from '@/routes/units';
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

export default function UnitEdit({ unit }: Props) {
    return (
        <AppLayout
            breadcrumbs={[
                ...breadcrumbs,
                {
                    title: `Edit ${unit.name}`,
                    href: edit(unit.id).url,
                },
            ]}
        >
            <Head title={`Edit ${unit.name}`} />
            <div className="max-w-xl p-4">
                <Form
                    {...UnitController.update.form(unit.id)}
                    options={{
                        preserveScroll: true,
                    }}
                    disableWhileProcessing
                    className="space-y-6"
                >
                    {({ processing, recentlySuccessful, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Unit name</Label>

                                <Input
                                    id="name"
                                    className="mt-1"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    defaultValue={unit.name}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.name}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <Button
                                    disabled={processing}
                                    data-test="update-profile-button"
                                >
                                    Save
                                </Button>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-neutral-600">
                                        Saved
                                    </p>
                                </Transition>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
