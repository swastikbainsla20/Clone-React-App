import React from 'react';
import './NavBarBanner.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const NavBarBanner = () => {
    return (
        <div className='NavBarBanner'>
            <div className='NavBarBannerOptionsLeft'>
                <div className='OptionsNavBarBanner'>
                    <MenuOutlinedIcon sx={{fontSize: '24px'}} />
                    <div className='AllOptionsNavBarBanner'>All</div>
                </div>

                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Fresh</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Amazon MiniTV</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Sell</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Best Sellers</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Todays Deals</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Mobiles</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Electronics</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Prime</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Customer Service</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Fashion</div></div>
                <div className='OptionsNavBarBanner'>
                <div className='AllOptionsNavBarBanner'>Home and Kitchen</div></div>

            </div>

            <div className='NavBarBannerRightSide'>
                <img src='' alt='Amazon Minitv'></img>
                
            </div>



        </div>
    );
};

export default NavBarBanner;