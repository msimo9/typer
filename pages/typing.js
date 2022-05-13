import { useRouter } from "next/router";
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link';
import react, {useEffect, useState} from "react";
import VirtualKeyboard from "../components/Keyboard";
import useEventListener from '@use-it/event-listener';

const TypingPractice = () => {
    const router = useRouter();
    const data = router.query;
    const numberOfWords = data.numberOfWords;
    const customText = data.customText;
    const keyboardVis = data.keyboardVis;
    const typingCharacters = !customText ? Object.values(data.data) : data.data;
    const [words, setWords] = useState([]);
    const [wordsReady, setWordsReady] = useState(false);
    const [changesMade, setChangesMade] = useState(false);
    const [typedCharacters, setTypedCharacters] = useState([]);
    const [correctFlag, setCorrectFlag] = useState(true);
    const [lineFlag, setLineFlag] = useState(false);
    const [timer, setTimer] = useState(0);
    const [numberOfErrors, setNumberOfErrors] = useState(0);

    const generateWords = () => {
        let uneditedText = "";
        let tempArr = [];
        console.log("custom text: ", customText)
        console.log("custom text type: ", typeof customText)
        if(customText === "false"){
            console.log("pridem sem?")
            for(let i=0; i<numberOfWords; i++){
                tempArr.push(typingCharacters[
                    Math.floor(Math.random()*typingCharacters.length)
                ])
                if(i!==numberOfWords-1)tempArr.push("␣");
            }
        }else if(customText === "true"){
            uneditedText = typingCharacters;
            uneditedText = uneditedText.replace(/[^a-z0-9čšžć]+|\s+/gmi, " ");
            const splitText = uneditedText.split(" ");
            for(let i=0; i<splitText.length; i++){
                if(splitText[i].includes("\n")){
                    let splitString = splitText[i].split("\n");
                    tempArr.push(splitString[0]);
                    tempArr.push("␣");
                    tempArr.push(splitString[1]);
                }else{
                    tempArr.push(splitText[i]);
                }
                if(i!==splitText.length-1)tempArr.push("␣");
            }
        }
        console.log("tempArr: ",tempArr);
        setWords(tempArr);
        setWordsReady(true);
    }

    useEffect(() => {
        if(typingCharacters.length !== 0) generateWords();
    }, [])

    function removeWord () {
        setTypedCharacters(typedCharacters => [
            ...typedCharacters,
            {
                value: "new_line",
                correct: true,
            }
        ])
        let tempArr = words;
        tempArr.shift();
        if(tempArr.length === 0){
            router.push('/')
        }else{
            setWords(tempArr);
            setChangesMade(!changesMade);
        }
    }

    function handler({ key }) {
       if(wordsReady){
           if(key.toLowerCase() === words[0].charAt(0).toLowerCase() || key.toLowerCase() === " " && words[0].charAt(0).toLowerCase() === "␣"){
                let tempArr = words;
                let tempChar = tempArr[0].charAt(0);
                setTypedCharacters(typedCharacters => [
                    ...typedCharacters,
                    {
                        value: tempChar,
                        correct: correctFlag ? true : false,
                    }
                ])
                tempArr[0] = tempArr[0].substring(1);
                if(tempArr[0] === "") removeWord();
                setCorrectFlag(true);
                setWords(tempArr);
                setChangesMade(!changesMade);
           }else{
               console.log("erros should work?")
               setNumberOfErrors(numberOfErrors => numberOfErrors+1)
               setCorrectFlag(false);
           }
       }
    }
    useEventListener('keydown', handler);

    useEffect(() => {
    }, [wordsReady, changesMade, numberOfErrors])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLineFlag(!lineFlag);
        }, 600)
        return () => clearInterval(intervalId);
    }, [lineFlag])

    return(
        <div className="w-screen h-screen bg-white flex flex-col pt-10 justify-center items-center space-y-8">
            <div className="w-full justify-center items-center flex flex-row pb-12">
                <div className="flex flex-row space-x-[1px] text-3xl w-1/2 h-16 justify-end items-center text-transparent opacity-40 overflow-hidden pr-[1px]">
                    {   
                        typedCharacters.length !== 0 ?
                        typedCharacters.slice(-40).map((item, index) => {
                            if(item.value !== "new_line"){
                                return(
                                    <span style={item.correct ? {color: "green"} : {color: "red"} } key={index}>{item.value}</span>
                                )
                            }else{
                                return(
                                    <div key={index} className="mx-2 w-2"></div>
                                )
                            }
                        })
                        : null
                    }
                </div>
                {
                    words.length === 0 ?
                    <div className="flex flex-row space-x-4 text-3xl0 w-1/2 h-16 justify-start items-center text-transparent bg-clip-text bg-gradient-to-r from-black"></div>
                    :
                    <div className="flex flex-row space-x-4 text-3xl w-1/2 h-16 justify-start items-center text-transparent bg-clip-text bg-gradient-to-r from-black overflow-hidden">
                        {
                            lineFlag && <div className="absolute w-3 border-r-[1px] border-r-black h-10"></div>
                        }
                        {
                            !lineFlag && <div className="absolute w-[1px] h-10"></div>
                        }
                        {
                            words.map((item, index) => {
                                return(
                                    <span className="tracking-wide" key={index}>{item}</span>
                                )
                            })
                        }
                    </div>
                }
            </div>
            {
                keyboardVis === "true" ? <VirtualKeyboard /> : null
            }
            <div className="absolute bottom-2 left-2 h-12 w-24 rounded-md bg-sixth flex justify-center items-center text-2xl text-white">
                <Link href="/">
                    <a>
                        <IoArrowBack />
                    </a>
                </Link>
            </div>
            <div className="absolute bottom-2 right-2 h-12 w-36 rounded-md bg-first flex flex-row justify-center items-center text-sm text-white space-x-1">
                <span>ŠTEVILO NAPAK:</span>
                <span className="font-bold">{numberOfErrors}</span>
            </div>
        </div>
    )

}

export default TypingPractice;