import { ReactNode } from "react";
import type { PropsWithChildren } from "react";

type Props = {
    children: ReactNode;
    color: String | undefined;
    width: String | undefined;
    boxType: String | undefined;
    padding: String | undefined;
    other: String | undefined; //Additional TailwindCSS Inputs
}; 



const ItemBox = (props: Props) => {
    return (
        <>
            <div className={`${props.color} ${props.padding} ${props.boxType} ${props.width} h-fit ${props.other}`}>
                {props.children}
            </div>
        </>
    );
}

export default ItemBox;