type Props = {
    title: string;
}

const SectionHeader = (props: Props) => {
    return (
        <> 
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-3xl p-6">{props.title}</h2>
            </div>
        </>
    )
}

export default SectionHeader;