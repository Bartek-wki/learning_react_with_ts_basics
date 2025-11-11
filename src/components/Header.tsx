import { type ReactNode } from "react";

interface HeaderInterface {
    image: {src: string, alt: string};
    children: ReactNode;
}

export default function Header({image, children} : HeaderInterface) {
    return <header>
        <img {...image} />
        {children}
    </header>
}