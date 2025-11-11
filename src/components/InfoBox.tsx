import { type ReactNode } from "react";

interface HintBoxInterface {
    mode: 'hint';
    children: ReactNode;
}

interface WarningBoxInterface {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high'
    children: ReactNode;
}

type InfoBoxInterface  = HintBoxInterface | WarningBoxInterface;

export default function InfoBox(props: InfoBoxInterface) {
    const {mode, children} = props;

    if(mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        ) 
    }

    const {severity} = props

    return (
        <aside className={`infobos infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}