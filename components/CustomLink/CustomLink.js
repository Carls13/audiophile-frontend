import { Option } from "./CustomLink.styles";

import { useRouter } from 'next/router';

import Link from 'next/link';

export const CustomLink = ({ children, route, headerLink }) => {
    const router = useRouter();

    console.log( router.pathname, route)

    return (
        <Option headerLink={headerLink} active={router.pathname === route}>
            <Link href={route}>
                <span>
                    {children}
                </span>
            </Link>
        </Option>
    );
}