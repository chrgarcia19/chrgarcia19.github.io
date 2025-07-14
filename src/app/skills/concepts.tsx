import ItemBox from "@/components/ItemBox";

const Concepts = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-start p-2 space-x-6">
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>                      
                            <p className="font-bold">Software Development Life Cycle (SDLC)</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>                      
                            <p className="font-bold">Agile Methodologies</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>                      
                            <p className="font-bold">Model-View-Controller (MVC)</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>                      
                            <p className="font-bold">Model-View-ViewModel (MVVM)</p>
                    </ItemBox>
                    <ItemBox color={"bg-cyan-400"} width={"w-fit"} boxType={"rounded-lg"} padding={"p-3"} other={"place-items-center"}>                      
                            <p className="font-bold">Unified Modeling Language (UML)</p>
                    </ItemBox>
                </div>
            </div>
        </>
    );
}

export default Concepts;