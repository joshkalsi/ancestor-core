import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<React.ComponentProps<'a'>> & {};

const StyledLink = ({ children, href }: Props) => {
    return (
        <Link
            className={clsx(
                'inline-block w-fit rounded-lg border border-border bg-background px-3 py-1 transition-colors hover:bg-foreground hover:text-background',
            )}
            href={href}
        >
            {children}
        </Link>
    );
};

export default StyledLink;
