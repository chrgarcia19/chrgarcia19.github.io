type Props = {
    eventNumber: number,
    color: string,
    gradient: string,
    textSize: string,
    textColor: string,
};

const EventMarker = (props: Props) => {
    return (
        <>
            <div className={`absolute -left-1 top-0 bottom-0 w-1 ${props.gradient} rounded-l-lg`} />
            <div className={`absolute z-10 -top-3 -left-3 flex items-center justify-center w-8 h-8 ${props.color} rounded-full font-bold ${props.textSize} ${props.textColor}`}>
                {props.eventNumber}
            </div>
        </>
    );
}

export default EventMarker;