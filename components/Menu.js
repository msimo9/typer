import exercises from "./menuItems";
import Link from 'next/link';
import Image from "next/dist/client/image";
import { IoSettings, IoCloseCircle, IoText } from 'react-icons/io5'
import react, {useEffect, useState} from "react";
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

const Menu = () => {
    const [modalVis, setModalVis] = useState(false);
    const toggleModalVis = () => {setModalVis(!modalVis)}
    const [keyboardVis, setKeyboardVis] = useState(true);
    const [textAreaVis, setTextAreaVis] = useState(false);
    const [textAreaText, setTextAreaText] = useState("");
    const [numberOfWords, setNumberOfWords] = useState(20);
    return(
        <div className="w-full h-full flex justify-start items-center flex-col">
            {
                exercises.map((item, index) => {
                    let dataObj = {
                        data: item.data,
                        customText: false,
                        numberOfWords: numberOfWords,
                    }
                    return(
                        <Link key={index} href={{
                            pathname: "/typing",
                            query: dataObj,
                        }}>
                            <a className="w-1/4 h-16 py-2 my-4">
                                <div onClick={item.action} className='bg-sixth h-16 rounded-md pl-2 space-x-2 flex-row flex justify-start items-center hover:cursor-pointer hover:rounded-xl transition-all duration-300'>
                                    <div className='w-10 h-10 rounded-full bg-fourth justify-center items-center flex text-xl text-black'>
                                    {item.icon}
                                    </div>
                                    <div className='flex flex-col items-start justify-center border-red-100 text-black font-thin'>
                                    <div className='font-semibold'>
                                        {item.title}
                                    </div>
                                    <div className='text-sm'>
                                        {item.subtitle}
                                    </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                )
                })
            }
            <div onClick={() => {setTextAreaVis(!textAreaVis);window.scrollTo(0, document.querySelector("#scrollingContainer").scrollHeight);}} className='bg-sixth w-1/4 py-2 my-4 h-16 rounded-md pl-2 space-x-2 flex-row flex justify-start items-center hover:cursor-pointer hover:rounded-xl transition-all duration-300'>
                <div className='w-10 h-10 rounded-full bg-fourth justify-center items-center flex text-xl text-black'>
                    <IoText />
                </div>
                <div className='flex flex-col items-start justify-center border-red-100 text-black font-thin'>
                <div className='font-semibold'>
                    <span>Poljubni tekst</span>
                </div>
                <div className='text-sm'>
                    <span>Vnos lastnega besedila</span>
                </div>
                </div>
            </div>
            {textAreaVis &&
                <div className="bg-sixth w-1/4 py-2 my-4 h-32 rounded-md hover:rounded-xl duration-300 transition-all flex flex-col px-2">
                    <textarea placeholder="Vnesi besedilo sem..." defaultValue={textAreaText} onChange={(e) => setTextAreaText(e.target.value.toLocaleLowerCase())} className="border-white border-2 bg-sixth w-full h-full px-2 py-2 resize-none rounded-md"></textarea>
                    <div className="w-full justify-end flex pt-4 pl-4">
                        <Link href={{
                                pathname: "/typing",
                                query: {
                                    data: textAreaText,
                                    customText: true,
                                    numberOfWords: numberOfWords,
                                },
                            }}>
                                <a>
                                    <div className="bg-second px-4 h-8 flex justify-center items-center text-white font-semibold rounded-md">
                                        <span>ZAČNI</span>
                                    </div>
                                </a>
                        </Link>
                    </div>
                </div>
            }

                        
            <div className="absolute right-16 w-64 h-full items-end flex flex-col pt-6">
                <div onClick={() => {toggleModalVis();}} className=" bg-sixth rounded-md justify-center items-center flex w-16 h-16 text-2xl text-white hover:cursor-pointer">
                    <IoSettings />
                </div>
                {
                    modalVis &&
                    <div style={modalVis ? {scale: 100} : {scale: 0}} className="bg-sixth w-full mt-4 py-2 rounded-md px-2 pb-12">
                        <div className="w-full flex justify-end items-center mb-4 text-white text-2xl">
                            <IoCloseCircle onClick={()=> toggleModalVis()} className="hover:cursor-pointer"/>
                        </div>
                        <div className="w-full flex justify-center items-center mb-4">
                            <span className="font-semibold text-lg">NASTAVITVE</span>
                        </div>
                        <span className="font-semibold text-sm">ŠTEVILO BESED</span>
                        <Slider
                            size="small"
                            defaultValue={numberOfWords}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            min={10}
                            max={100}
                            step={10}
                            onChange={(e) => setNumberOfWords(e.target.value)}
                        />
                        <div className="mt-8"></div>
                        <span className="font-semibold text-sm">VIRTUALNA TIPKOVNICA</span>
                        <div className="flex justify-center items-center w-full flex-row">
                            {!keyboardVis && <span className="absolute left-20 text-sm align-middle text-white">OFF</span>}
                            <Switch onChange={() => setKeyboardVis(!keyboardVis)} defaultChecked />
                            {keyboardVis && <span className="absolute right-20 text-sm align-middle text-white">ON</span>}
                        </div>
                        <div>
                            {keyboardVis && <Image alt="" src={require('../assets/keyboard.png')} />}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Menu;