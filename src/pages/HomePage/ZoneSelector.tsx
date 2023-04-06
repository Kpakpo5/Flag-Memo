import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Zone from "./Zone";
import worldMap from "../../assets/images/world.png";
import africaMap from "../../assets/images/africa.png";
import americasMap from "../../assets/images/americas.png";
import asiaMap from "../../assets/images/asia.png";
import europeMap from "../../assets/images/europe.png";
import oceaniaMap from "../../assets/images/oceania.png";

import { useAppSelector } from "../../redux/hooks";

const zoneOptions = [
    {
        name: "Monde",
        zone: "all",
        map: worldMap
    },
    {
        name: "Afrique",
        zone: "region/africa",
        map: africaMap
    },
    {
        name: "Amériques",
        zone: "region/americas",
        map: americasMap
    },
    {
        name: "Asie",
        zone: "region/asia",
        map: asiaMap
    },
    {
        name: "Europe",
        zone: "region/europe",
        map: europeMap
    },
    {
        name: "Océanie",
        zone: "region/oceania",
        map: oceaniaMap
    },
]

const ZoneSelector: React.FC<{isFetching:boolean}> = ({isFetching}) => {

    const currentZone = useAppSelector((state) => state.countries.currentZone);
    const currentOption = zoneOptions.find(option => option.zone === currentZone);

    return (
        <div className="flex flex-col items-center justify-center mt-7">
            <div>
                <ul className="flex items-center justify-center flex-wrap">
                    {
                        zoneOptions.map(option => 
                        <Zone
                            key={option.name}
                            name={option.name}
                            zone={option.zone}
                            currentZone={currentOption.zone}
                            isFetching={isFetching}
                        />
                        )
                    }
                </ul>
            </div>
            { isFetching
                ? 
                <div className="flex justify-center items-center mt-16">
                    <FontAwesomeIcon 
                        className=" text-amber-500 text-8xl animate-spin"
                        icon={faCircleNotch}
                    />
                </div>
                :
                <div className="relative mt-10 w-full h-[30vh]">
                    { currentOption &&
                    <div className="absolute inset-0 flex flex-col justify-between p-1 h-[30vh] bg-white animate-spread">
                        <div className="h-4/5">
                            <img className="w-full h-full object-contain" src={currentOption.map}/>
                        </div>  
                        <p className="text-lg text-gray-600 font-bold italic">
                            {currentOption.name} &#8658; 
                            {currentOption.zone === "all"
                                ? " Quiz de 10 drapeaux"
                                : " Quiz de 7 drapeaux"
                            }
                        </p>
                    </div> 
                    }
                </div>
            }
        </div>
    )
}



export default ZoneSelector;