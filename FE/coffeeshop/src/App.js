import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import coffee from './assets/Coffee.jpg';
import ig from './assets/ig.png';
import fb from './assets/fb.png';
import a1 from './assets/1.png';
import a2 from './assets/2.png';
import a3 from './assets/3.png';
import a4 from './assets/4.png';
import a5 from './assets/5.png';
import a6 from './assets/6.png';
import promo from './assets/promo.jpg';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

function App() {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className='bg-[#08143D] w-full h-full text-white'>
      {/* nav bar */}
      <div className='flex justify-between w-[100%]'>
        <div className='flex items-center ml-10'>
          <div className='font-Inter text-white text-[20px] md:text-[26px] font-[700] mt-5'>KoffeeBean</div>
        </div>

        <div className='flex items-center flex-col md:flex-row md:bg-transparent md:static absolute md:z-auto z-[1]  left-0 w-full md:w-auto transition-all duration-700 ease-in'>
          <a href="#about" className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>About Us</a>
          <a href="#menu" className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Our Specials</a>
          <a href="#order" className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Order Now</a>
          <a href="#promo" className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Promotions</a>
          <div className='px-5 hover:scale-10 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1 pb-3 '><Button variant="contained" classname="text-[13px] sm:text-[20px]" size="small" sx={{ paddingX: 3, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Register/Login</Button></div>
        </div>
      </div>

      {/* About Us */}
      <div className='mt-10 flex' id="about">
        {/* picture taken from https://verileet.com/coffeeshop-aesthetic-vs-coffee-taste/ */}
        <img class="ml-10 w-[45%]" src={coffee}></img>
        <div className='flex flex-col px-5 w-[60%]'>
          <a class="font-Inter text-white text-[52px] font-[700]">Brewing Now...</a>
          <p class="mt-3 break-normal tracking-normal font-Inter text-white text-[20px] font-[500]">Location: Jl. Sakit Hati Barat No.99</p>
          <p class="break-normal tracking-normal font-Inter text-white text-[20px] font-[500]">Open Hour: 08:00-23:00 WIB</p>
          <p class="break-normal tracking-normal font-Inter text-white text-[20px] font-[500]">Contact: +62 813 0983 478</p>
          <p class="break-normal tracking-normal font-Inter text-white text-[20px] font-[500]">Check Us Out!</p>
          <div class="flex">
            <a href="https://www.facebook.com/"><img class="w-[30%]" src={fb}></img></a>
            <a href="https://www.instagram.com/"><img class="w-[30%]" src={ig}></img></a>
          </div>
          <div className=' text-black mt-10 hover:scale-20 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1 pb-3 '><Button variant="contained" classname="h-12 px-6 m-2 text-[13px] sm:text-[20px] text-black" size="large" sx={{ paddingX: 3, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Get Started</Button></div>
        </div>
      </div>

      {/* Menu */}
      {/* all pictures taken from https://unsplash.com/s/photos/latte */}
      <div className='flex' id="menu">
        <div className=' mx-auto text-white relative'>
          <div className='py-2'>
            <h3 className='font-Inter text-white text-[20px] font-[700] text-5xl font-bold text-5xl font-bold py-6 text-center'>Our Specials</h3>
          </div>

          <div className='grid grid-cols-3 relative gap-x-10 gap-y-16 pt-12 sm:pt-10 text-white'>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-center'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]" src={a1}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] md:text-[24px] font-[700]'>HeartWarming Cafe Latte</div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-center'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]" src={a2}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] md:text-[24px] font-[700]'>Creamy Cold Brew</div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-center'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]" src={a3}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] md:text-[24px] font-[700]'>Matcha Latte</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Order Now */}
      <div className='flex' id="order">
        <div className=' mt-10 mx-auto text-white relative'>
          <div className='py-2'>
            <h3 className='font-Inter text-white text-[20px] font-[700] text-5xl font-bold text-5xl font-bold py-6 text-center'>Order Now!</h3>
          </div>

          <div className='grid grid-cols-3 relative gap-x-10 gap-y-16 pt-12 sm:pt-10 text-white'>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-left'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px]" src={a1}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] font-[500]'>Cafe Latte</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Hot Warming Coffee Made with Love</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Rp. 35.000</div>
                <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Buy Now</Button></div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-left'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px]" src={a2}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] font-[500]'>Cold Brew</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Ice Shaken Cold Creamy Coffee</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Rp. 45.000</div>
                <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Buy Now</Button></div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-left'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px]" src={a3}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] font-[500]'>Matcha Latte</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Hot Warming Matcha</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Rp. 35.000</div>
                <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Buy Now</Button></div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-left'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px]" src={a4}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] font-[500]'>Ice Choco</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Ice Blended Chocolate</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Rp. 45.000</div>
                <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Buy Now</Button></div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-left'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px]" src={a5}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] font-[500]'>Infused Ice Tea</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Fresh Lime Ice Tea</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Rp. 25.000</div>
                <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Buy Now</Button></div>
              </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
              <div className='p-6 text-left'>
                <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[200px] h-[230px]" src={a6}></img>
                <div className='pl-2 font-bold font-Inter text-white text-[20px] font-[500]'>Ice Oreo</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Ice Blended Oreo</div>
                <div className='pl-2 font-bold font-Inter text-white text-[18px] font-[300]'>Rp. 45.000</div>
                <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Buy Now</Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Promotions */}
    {/* image from https://in.pinterest.com/pin/511510470179703276/ */}
    <div className='ml-10 text-center'>
    <h1 class="font-Inter text-white text-[20px] font-[700] text-5xl font-bold text-5xl font-bold py-6">SEPCIAL PROMOTION</h1>
    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-5 flex w-[500px]" src={promo}></img>
  
    </div>


    {/* feedback form */}
    <div className=''>
    <h1 class="font-Inter text-white text-[20px] font-[700] text-5xl font-bold text-center text-5xl font-bold py-6">Any Feedback?</h1>
    <form className='ml-10'>
      <div className='flex my-1'>
        <p className='ml-3 text-[20px]'>Name:</p>
        <input type="text" className='ml-3 text-[20px]'></input>
      </div>
      <div className='flex my-1'>
        <p className='ml-3 text-[20px]'>Shop:</p>
        <input type="text" className='ml-3 text-[20px]'></input>
      </div>
      <div className='flex my-1'>
        <p className='ml-3 text-[20px]'>Feedback:</p>
        <input type="text" className='ml-3 text-[20px]'></input>
      </div>
      <div className='mt-2 ml-2'><Button variant="contained" size="medium" sx={{ paddingX: 2, fontFamily: 'Inter', color: '#000', fontWeight: 600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)' }}>Submit</Button></div>
        
    </form>
    </div>
    <div className='h-40'>

    </div>
    </div>
  );
}

export default App;
