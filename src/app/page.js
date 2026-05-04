import Banner from '@/Component/Banner/Banner';
import TopTiles from '@/Component/Top-Tiles/TopTiles';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div>
      <Banner/>
      <TopTiles/>
             <ToastContainer />
    </div>
  );
};

export default page;