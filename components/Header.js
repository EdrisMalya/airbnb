import Image from "next/image";
import {
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    GlobeAltIcon
} from "@heroicons/react/solid";
import {useState} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from "next/router";


const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    }

    const resetInput = () => {
        setSearchInput("");
    }

    const router = useRouter();
    const search = () =>{
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests: numberOfGuests
            }
        })
    }

    return (
        <header className={'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'}>
            <div onClick={()=>router.push('/')} className={'relative flex items-center h-10 cursor-pointer my-auto'}>
                <Image
                    src={'https://links.papareact.com/qd3'}
                    layout={"fill"}
                    objectFit={"contain"}
                    objectPosition={"left"}
                />
            </div>
            <div className={'flex items-center px-2 md:border-2 rounded-full md:shadow-sm focus:shadow-lg'}>
                <input value={searchInput} onChange={(event)=>setSearchInput(event.target.value)} type="text" placeholder={placeholder || 'Start your search'} className={'flex-grow text-sm text-gray-600 placeholder-gray-400 border-none bg-transparent px-3 outline-none'}/>
                <SearchIcon
                    className={'h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer hover:shadow-lg hidden md:inline-flex md:mx-auto'} />
            </div>
            <div className={'flex space-x-4 items-center justify-end text-gray-500'}>
                <p className={'hidden md:inline cursor-pointer'}>Become a host</p>
                <GlobeAltIcon className={'h-6'} />
                <div className={'flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'}>
                    <MenuIcon className={'h-6'} />
                    <UserCircleIcon className={'h-6'} />
                </div>
            </div>
            {searchInput && (
                <div className={'flex flex-col col-span-3 mx-auto'}>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={[
                            '#FD5B61'
                        ]}
                        onChange={handleSelect}
                    />
                    <div className={'flex items-center border-b mb-4 pb-2'}>
                        <h2 className={'text-2xl flex-grow font-semibold'}>Number of Guest</h2>
                        <UsersIcon className={'h-5'} />
                        <input min={'1'} value={numberOfGuests} onChange={(event)=>{setNumberOfGuests(event.target.value)}} type="number" className={'w-12 pl-2 text-lg ml-2 outline-none text-red-400 border-b border-t border-r border-l'}/>
                    </div>
                    <div className={'flex'}>
                        <button onClick={resetInput} className={'flex-grow text-gray-500'}>Cancel</button>
                        <button className={'flex-grow text-red-400'} onClick={search}>Search</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;