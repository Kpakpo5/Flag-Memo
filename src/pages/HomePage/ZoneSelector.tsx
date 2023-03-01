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
        label: "Monde",
        zone: "all",
        map: worldMap
    },
    {
        label: "Afrique",
        zone: "region/africa",
        map: africaMap
    },
    {
        label: "Amériques",
        zone: "region/americas",
        map: americasMap
    },
    {
        label: "Asie",
        zone: "region/asia",
        map: asiaMap
    },
    {
        label: "Europe",
        zone: "region/europe",
        map: europeMap
    },
    {
        label: "Océanie",
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
                            key={option.label}
                            label={option.label}
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
                <div className="flex flex-col justify-between mt-10 w-full p-1 h-[30vh] bg-white">
                    <div className="h-4/5">
                        <img className="w-full h-full object-contain" src={currentOption.map}/>
                    </div>  
                    <p className="text-lg text-gray-600 font-bold italic">
                        {currentOption.label} &#8658; 
                        {currentOption.zone === "all"
                            ? " 10 pays à trouver"
                            : " 7 pays à trouver"
                        }
                    </p>
                </div>
            }
        </div>
    )
}



export default ZoneSelector;