import React, { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';
export function Effects(props: { sourceId: string }) {
    const [data, setData] = useState<number>(-1);
    useEffect(() => {
        const fnc = (data: number) => setData(data);
        subscribe(props.sourceId, fnc);
        return () => {
            unsubscribe(props.sourceId, fnc);
            setData(-1);
        };
    }, [props.sourceId]);
    return <div>{`${props.sourceId}: ${data}`}</div>;
}
