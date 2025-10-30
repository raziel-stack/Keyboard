import React, { useState } from "react";
//import FontBig from "./features";

function TypeHebrew() {
const [fontSize, setFontSize] = useState("20px");
function Increasefontsize() {
setFontSize("50px");
}

const [color, setColor] = useState("black");
function ChangeColor() {
setColor("red");
}

// const [FontBig, setFontBig] = useState("20px");
// function IncreasefontsizeLeeter() {
// setFontBig("50px");
// }

const [letters, setLetters] = useState("");

const HebButtons = (event) => {
const buttonText = event.target.innerText;
console.log(buttonText);
setLetters((prev) => prev + buttonText);
};

console.log(letters);

return (
<div style={{ fontWeight: "bold" }}>
<div style={{ fontSize: fontSize, color: color }}>{letters}</div>{" "}
<div>
<button onClick={HebButtons}>ק</button>
<button onClick={HebButtons}>ר</button>
<button onClick={HebButtons}>א</button>
<button onClick={HebButtons}>ט</button>
<button onClick={HebButtons}>ו</button>
<button onClick={HebButtons}>ן</button>
<button onClick={HebButtons}>ם</button>
<button onClick={HebButtons}>פ</button>
</div>
<div>
<button onClick={HebButtons}>ש</button>
<button onClick={HebButtons}>ד</button>
<button onClick={HebButtons}>ג</button>
<button onClick={HebButtons}>כ</button>
<button onClick={HebButtons}>ע</button>
<button onClick={HebButtons}>י</button>
<button onClick={HebButtons}>ח</button>
<button onClick={HebButtons}>ל</button>
<button onClick={HebButtons}>ף</button>
</div>
<div>
<button onClick={HebButtons}>ז</button>
<button onClick={HebButtons}>ס</button>
<button onClick={HebButtons}>ב</button>
<button onClick={HebButtons}>ה</button>
<button onClick={HebButtons}>נ</button>
<button onClick={HebButtons}>מ</button>
<button onClick={HebButtons}>צ</button>
<button onClick={HebButtons} id="hi">
ת
</button>
<button onClick={HebButtons}>ץ</button>
</div>
<div>
<button onClick={HebButtons}>0</button>
<button onClick={HebButtons}>1</button>
<button onClick={HebButtons}>2</button>
<button onClick={HebButtons}>3</button>
<button onClick={HebButtons}>4</button>
<button onClick={HebButtons}>5</button>
<button onClick={HebButtons}>6</button>
<button onClick={HebButtons}>7</button>
<button onClick={HebButtons}>8</button>
<button onClick={HebButtons}>9</button>
</div>
<div>
<button onClick={HebButtons}> </button>
</div>
<button onClick={Increasefontsize}>הגדל גודל גופן </button>
<button onClick={ChangeColor}>שנה צבע </button>
<button onClick={() => setLetters((prev) => prev.slice(0, -1))}>
מחק
</button>
<button onClick={() => setLetters((prev) => prev + " ")}>
רווח
</button>
{/* <button onClick={{IncreasefontsizeLeeter}}>הגדל גופן גופן הנוכחי</button> */}
</div>
);
}

export default TypeHebrew;