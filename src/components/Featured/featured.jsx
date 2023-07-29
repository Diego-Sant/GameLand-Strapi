import React from 'react'
import Card from '../Card/card'

const Featured = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            title: "The Legend of Zelda: Tears of the Kingdom",
            isNew: false,
            price: 100,
        },
        {
            id: 2,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            isNew: true,
            oldPrice: 200,
            price: 100,
        },
        {
            id: 3,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            isNew: true,
            oldPrice: 200,
            price: 100,
        },
        {
            id: 4,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            isNew: true,
            oldPrice: 200,
            price: 100,
        },
    ]

  return (
    <div className='bg-[#121212]'>
        <div className='px-[100px] py-[100px]'>
            <div className='flex font-bold text-xl sm:text-2xl lg:text-4xl items-center justify-center'>
                <h1 className='mb-10'>{type}</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center'>
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Featured