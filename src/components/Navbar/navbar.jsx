import React, { useEffect, useRef, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'

import { Search, PersonOutlineOutlined, FavoriteBorderOutlined, ShoppingCartOutlined, Menu as MenuIcon, Language, People, Person, ShowChart, NewReleases, House } from '@mui/icons-material'
import { BsPlaystation, BsXbox, BsNintendoSwitch } from 'react-icons/bs';
import Cart from '../Cart/cart';
import Favorite from '../Favorite/favorite';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 1200);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [favoriteOpen, setFavoriteOpen] = useState(false);

  const products = useSelector(state => state.cart.products);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setCartOpen(false);
        setFavoriteOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    setCartOpen(true);
    setFavoriteOpen(false);
    setCartOpen(!cartOpen);
  };

  const handleFavoriteClick = () => {
    setFavoriteOpen(true);
    setCartOpen(false);
    setFavoriteOpen(!favoriteOpen);
  };

  const categories = [
    { id: 9, icon: <House />, text: 'Menu inicial', link: '/' },
    { id: 1, icon: <NewReleases />, text: 'Novidades', link: '/produtos/1' },
    { id: 2, icon: <ShowChart />, text: 'Mais vendidos', link: '/produtos/2' },
    { id: 3, icon: <Person />, text: 'Um jogador', link: '/produtos/3' },
    { id: 4, icon: <People />, text: 'Multijogador', link: '/produtos/4' },
    { id: 5, icon: <Language />, text: 'Online', link: '/produtos/5' },
    { id: 6, icon: <BsPlaystation className='h-6 w-6' />, text: 'Playstation', link: '/produtos/6' },
    { id: 7, icon: <BsXbox className='h-6 w-6' />, text: 'Xbox', link: '/produtos/7' },
    { id: 8, icon: <BsNintendoSwitch className='h-6 w-6' />, text: 'Nintendo', link: '/produtos/8' },
  ];

  return (
    <div className='bg-[#1f1f1f] py-2' ref={containerRef}>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-4'>

          <div className='ml-2'>
            <Link to="/"><img className='w-14 h-14 sm:w-20 sm:h-20' src="images/logo.png" alt="Gameland" /></Link>
          </div>

          <div className='flex'>
            <img className='w-9 h-6' src="images/brasil.png" alt="Bandeira do Brasil" />
          </div>
          <div className='-ml-2 text-[12px]'>
            <span>BRL</span>
          </div>

          {isDesktop ? (
            <>
              <div className='hover:bg-[#2d2d2d] rounded-md -ml-3'>
                <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                    <MenuIcon className='text-white' />
                </Button>
              </div>
              <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                  <div className='bg-[#2d2d2d] text-white p-6'>
                    {categories.map((category) => (
                      <Link key={category.id} to={category.link}>
                        <MenuItem className='flex gap-x-3 w-full' onClick={handleClose}>
                            {category.icon}
                            {category.text}
                        </MenuItem>
                      </Link>
                    ))}
                  </div>
              </Menu>
            </>
          ) : (
            <>
              {categories.map((category) => (
                <div key={category.id}>
                  <Link to={category.link}>{category.text}</Link>
                </div>
              ))}
            </>
          )}

        </div>
        <div className='flex items-center mr-4'>
            <div className='flex gap-x-4 cursor-pointer'>
              <Search />
              <PersonOutlineOutlined />
              <div onClick={handleFavoriteClick}>
                <FavoriteBorderOutlined />
              </div>
              <div className='relative' onClick={handleCartClick}>
                <ShoppingCartOutlined />
                <span className='flex justify-center items-center absolute -right-[10px] -top-[10px] text-[16px] w-[20px] h-[20px] bg-[#8900ff] rounded-full'>{products.length}</span>
              </div>
            </div>
        </div>
      </div>
      {cartOpen && <Cart />}
      {favoriteOpen && <Favorite />}
    </div>
  )
}

export default Navbar