import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

const Home = () => {
  return(
    <div id="scrollingContainer" className='w-screen h-screen bg-white flex flex-col justify-start items-center'>
           <Menu />
    </div>
  )
}

export default Home;