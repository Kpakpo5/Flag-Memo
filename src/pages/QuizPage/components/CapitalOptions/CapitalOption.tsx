
const CapitalOption: React.FC<{capital:string}> = ({capital}) => {
    return (
        <button className="w-80 text-lg font-bold h-12 m-4 rounded bg-white">
            {capital}
        </button>
    )
}


export default CapitalOption;