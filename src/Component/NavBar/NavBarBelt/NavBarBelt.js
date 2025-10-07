import React from 'react';
import './NavBarBelt.css'
import amazonlogo from '../../../Assets/amazonlogo.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import indiaflag from '../../../Assets/indiaflag.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBarBelt = () => {
  return (
    <div className="NavBarBelt">
        <div className='LeftNavBarBelt'>
            <div className='LeftNavBeltLogo'>
                <img className='AmazonLogoNavBar' src={amazonlogo} alt = 'amazonlogo' />
                <span className='NavBar_inLogo'>.in</span>   
            </div>

            <div className='NavBarBeltLocation'>
                <div className='NavBarBeltLocationImg'>
                    <LocationOnOutlinedIcon className='NavBarBeltLocationIcon' sx={{fontSize: "22px"}}/>
                    </div>
                    <div className='NavBarBeltLocationPlace'>
                        <div className='NavBarVBeltLocationTop'>Delivering to Faridabad 121001</div>
                        <div className='NavBarVBeltLocationButton'>Update Location</div>
                    </div>
            </div>
        </div>

        <div className='NavBarBeltSearchBox'>
            <div className='NavBarBeltSearchDiv'>
                <div className='NavBarBeltSearchBoxAll'>
                    <div className='NavBarBeltSearchBoxAllText'>All</div>
                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }}/>
                </div>
                <input className='NavBarBeltSearchBoxInput' type="text" placeholder='Search Amazon.in'/>

                <div className='SearchIconNavBarBelt'>
                    <SearchIcon sx={{ fontSize: "26px" }} className='SearchIconNavBarBeltIcon'/>     
                </div>          
            </div>
        </div>


        <div className='RightNavBarBelt'>
            <div className='IndiaFlagCode'>
                <img src = {indiaflag} className='IndiaFlag' />
                <div className='IndiaCodeNvBarBelt'>IN <ArrowDropDownOutlinedIcon sx={{ fontSize: "16px", marginTop: 1, marginLeft: -0.4}} 
                className='IndiaCodeNavBarBeltDrop'/></div>
            </div>

            <div className='HelloSignInNavBarBelt'>
                <div className='HelloTopNvBarBelt'>Hello, User</div>
                <div className='IndiaCodeNvBarBelt'>Accounts & Lists</div>
            </div>

            <div className='HelloSignInNavBarBelt'>
                <div className='HelloTopNvBarBelt'>Returns</div>
                <div className='IndiaCodeNvBarBelt'>Orders</div>
            </div>

            <div className='HelloSignInNavBarBelt'>
                <span className='CartItemNumberNavBarBelt'>0</span>
                <div className='IndiaCodeNvBarBelt'>
                    <ShoppingCartOutlinedIcon /> <span className='CartTitle'>CART</span>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default NavBarBelt
