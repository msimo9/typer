const keyboardKeys = [
    [
        {key: "1", color: "#fbdea7"},//pinky-l
        {key: "2", color: "#fbdea7"},//pinky-l
        {key: "3", color: "#f4b1b1"},//ring-l
        {key: "4", color: "#c3e8b5"},//middle-l
        {key: "5", color: "#b6d5f0"},//point-l
        {key: "6", color: "#b6d5f0"},//point-l
        {key: "7", color: "#bdcaeb"},//point-r
        {key: "8", color: "#bdcaeb"},//point-r
        {key: "9", color: "#c3e8b5"},//middle-r
        {key: "0", color: "#f4b1b1"},//ring-r
        {key: "?", color: "#fbdea7"},//pinky-r
    ],
    [
        {key: "q", color: "#fbdea7"},//pinky-l
        {key: "w", color: "#f4b1b1"},//ring-l
        {key: "e", color: "#c3e8b5"},//middle-l
        {key: "r", color: "#b6d5f0"},//point-l
        {key: "t", color: "#b6d5f0"},//point-l
        {key: "z", color: "#bdcaeb"},//point-r
        {key: "u", color: "#bdcaeb"},//point-r
        {key: "i", color: "#c3e8b5"},//middle-r
        {key: "o", color: "#f4b1b1"},//ring-r
        {key: "p", color: "#fbdea7"},//pinky-r
        {key: "š", color: "#fbdea7"},//pinky-r
        {key: "đ", color: "#fbdea7"},//pinky-r
    ],
    [
        {key: "a", color: "#fbdea7"},//pinky-l
        {key: "s", color: "#f4b1b1"},//ring-l
        {key: "d", color: "#c3e8b5"},//middle-l
        {key: "f", color: "#b6d5f0"},//point-l
        {key: "g", color: "#b6d5f0"},//point-l
        {key: "h", color: "#bdcaeb"},//point-r
        {key: "j", color: "#bdcaeb"},//point-r
        {key: "k", color: "#c3e8b5"},//middle-r
        {key: "l", color: "#f4b1b1"},//ring-r
        {key: "č", color: "#fbdea7"},//pinky-r
        {key: "ć", color: "#fbdea7"},//pinky-r
        {key: "ž", color: "#fbdea7"},//pinky-r
    ],
    [
        {key: "y", color: "#fbdea7"},//pinky-l
        {key: "x", color: "#f4b1b1"},//ring-l
        {key: "c", color: "#c3e8b5"},//middle-l
        {key: "v", color: "#b6d5f0"},//point-l
        {key: "b", color: "#b6d5f0"},//point-l
        {key: "n", color: "#bdcaeb"},//point-r
        {key: "m", color: "#bdcaeb"},//point-r
        {key: ",", color: "#c3e8b5"},//middle-r
        {key: ".", color: "#f4b1b1"},//ring-r
        {key: ",", color: "#fbdea7"},//pinky-r
        {key: "-", color: "#fbdea7"},//pinky-r
    ],
]

const VirtualKeyboard = () => {
    return(
        <div className="space-y-2">
            {keyboardKeys.map((item, index) => {
            return(
              <div
                key={index}
                className='flex justify-center items-center flex-row space-x-2'
                style={
                  index === 0 ? {paddingLeft: 0}
                  : index === 1 ? {paddingLeft: 20}
                  : index === 2 ? {paddingLeft: 28}
                  : {paddingLeft: 48}
                }
              >
                {
                  item.map((subitem, index) => {
                    return(
                      <div key={index} style={{background: subitem.color}} className='w-10 h-10 text-white flex justify-center items-center rounded-md'>
                        <span style={subitem.key === "f" || subitem.key === "j" ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>{subitem.key.toUpperCase()}</span>
                      </div>
                    )
                  })
                }
              </div>
            )
          })}
        </div>
    )
}

export default VirtualKeyboard;