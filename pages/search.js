import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({searchResults}) => {
    const router = useRouter();
    const {
        location, startDate, endDate, numberOfGuests
    } = router.query;

    const FormattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const FormattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${FormattedStartDate} - ${FormattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
            <main className={'flex'}>
                <section className={'flex-grow pt-14 px-6'}>
                    <p className={'text-xs'}>300+ Stays - {range} - for {numberOfGuests} guests</p>
                    <h1 className={'text-3xl font-semibold mt-2 mb-6'}>Stays {location}</h1>
                    <div className={'hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-normal'}>
                        <p className={'button'}>Cancellation Flexibility</p>
                        <p className={'button'}>Type of Place</p>
                        <p className={'button'}>Price</p>
                        <p className={'button'}>Rooms and Beds</p>
                        <p className={'button'}>More and Filters</p>
                    </div>
                    <div className={'flex flex-col'}>
                        {searchResults.map(item=>(
                            <InfoCard
                                key={item.img}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>
                <section className={'hidden xl:inline-flex xl:min-w-[600px]'}>
                    <Map searchResult={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    const searchResults = await fetch('https://links.papareact.com/isz')
        .then(result => result.json());
    return {
        props: {
            searchResults
        }
    }
}