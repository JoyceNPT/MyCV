import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export function Link({ href, children, className, onClick, ...props }: LinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) onClick(e);
        if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
            e.preventDefault();
            window.history.pushState({}, '', href);
            window.dispatchEvent(new Event('pushstate'));
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className} {...props}>
            {children}
        </a>
    );
}
