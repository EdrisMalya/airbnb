import Image from "next/image";
import {
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    GlobeAltIcon
} from "@heroicons/react/solid";

const Header = () => {
    return (
        <header className={'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'}>
            <div className={'relative flex items-center h-10 cursor-pointer my-auto'}>
                <Image
                    src={'https://links.papareact.com/qd3'}
                    layout={"fill"}
                    objectFit={"contain"}
                    objectPosition={"left"}
                />
            </div>
            <div className={'flex items-center px-2 md:border-2 rounded-full md:shadow-sm focus:shadow-lg'}>
                <input type="text" placeholder={'Start your search'} className={'flex-grow text-sm text-gray-600 placeholder-gray-400 border-none bg-transparent px-3 outline-none'}/>
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
        </header>
    );
};

export default Header;