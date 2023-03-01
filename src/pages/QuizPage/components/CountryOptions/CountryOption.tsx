
const CountryOption: React.FC<{country:string}> = ({country}) => {
    return (
        <button className="w-32 text-lg font-bold h-32 m-4 rounded bg-white">
            {country}
        </button>
    )
}


export default CountryOption;