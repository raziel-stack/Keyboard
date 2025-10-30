import {useState} from "react";

import ButtonsPanel from "./Components/ButtonsPanel/ButtonsPanel";
import Display from "./Components/Display/Display";

const Keyboard = () => {


const [html,setHtml] = useState(<span><span></span></span>);

return (
    <>

<div>
    <Display html={html}/>
</div>


<div>
    <ButtonsPanel html={html} setHtml={setHtml}/>
</div>


    </>
    

)


}


export default Keyboard;