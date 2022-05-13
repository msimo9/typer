import { IoEarth, IoFlower, IoMedal, IoTrophy, IoAirplane, IoRocket, IoWalk, IoBicycle, IoBed, IoCar, IoTrain, IoKeypad, IoBusiness} from 'react-icons/io5'
import slovenianWords from './slovenianWords';

const exercises = [
    {
      icon: <IoBed />,
      title: "Vaja 1",
      subtitle: "Orientacijski tipki (2 znaka)",
      action: () => {console.log("1 deluje")},
      data: ["fff", "jjj"],
    },
    {
      icon: <IoWalk />,
      title: "Vaja 2",
      subtitle: "Leva roka - domača vrstica (4 znaki)",
      action: () => {console.log("2 deluje")},
      data: ["aaa", "sss", "ddd", "fff"],
    },
    {
      icon: <IoBicycle />,
      title: "Vaja 3",
      subtitle: "Desna roka - domača vrstica (4 znaki)",
      action: () => {console.log("3 deluje")},
      data: ["jjj", "kkk", "lll", "ččč"],
    },
    {
      icon: <IoMedal />,
      title: "Vaja 4",
      subtitle: "Domača vrstica (10 znakov)",
      action: () => {console.log("3 deluje")},
      data: ["aaa", "sss", "ddd", "fff", "jjj", "kkk", "lll", "ččč", "ggg", "hhh"],
    },
    {
      icon: <IoCar />,
      title: "Vaja 5",
      subtitle: "Domača (10 znakov) in zgornja vrstica ( leva roka - 5 znakov)",
      action: () => {console.log("3 deluje")},
      data: ["aaa", "sss", "ddd", "fff", "jjj", "kkk", "lll", "ččč", "ggg", "hhh", "qqq", "www", "eee", "rrr", "ttt"],
    },
    {
      icon: <IoTrain />,
      title: "Vaja 6",
      subtitle: "Domača (10 znakov) in zgornja vrstica (desna roka - 6 znakov)",
      action: () => {console.log("3 deluje")},
      data: ["aaa", "sss", "ddd", "fff", "jjj", "kkk", "lll", "ččč", "ggg", "hhh", "zzz", "uuu", "iii", "ooo", "ppp", "ššš"],
    },
    {
      icon: <IoAirplane />,
      title: "Vaja 7",
      subtitle: "Domača (10 znakov) in zgornja vrstica (11 znakov)",
      action: () => {console.log("3 deluje")},
      data: ["aaa", "sss", "ddd", "fff", "jjj", "kkk", "lll", "ččč", "ggg", "hhh", "zzz", "uuu", "iii", "ooo", "ppp", "ššš", "qqq", "www", "eee", "rrr", "ttt"],
    },
    {
      icon: <IoRocket />,
      title: "Vaja 8",
      subtitle: "Domača (10 znakov) in spodnja vrstica (7 znakov)",
      action: () => {console.log("3 deluje")},
      data: ["aaa", "sss", "ddd", "fff", "jjj", "kkk", "lll", "ččč", "ggg", "hhh", "yyy", "xxx", "ccc", "vvv", "bbb", "nnn", "mmm"],
    },
    {
      icon: <IoTrophy />,
      title: "Vaja 9",
      subtitle: "Vse vrstice (28 znakov)",
      action: () => {console.log("3 deluje")},
      data: ["aaa", "sss", "ddd", "fff", "jjj", "kkk", "lll", "ččč", "ggg", "hhh", "zzz", "uuu", "iii", "ooo", "ppp", "ššš", "qqq", "www", "eee", "rrr", "ttt", "yyy", "xxx", "ccc", "vvv", "bbb", "nnn", "mmm"],
    },
    {
      icon: <IoBusiness />,
      title: "Prosta vaja",
      subtitle: "Vse vrstice (28 znakov)",
      action: () => {console.log("3 deluje")},
      data: slovenianWords,
    },
  ]

  export default exercises;