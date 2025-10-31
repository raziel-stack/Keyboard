import React, { useState, cloneElement, use } from "react";
import './assets/style.css'

const ButtonsPanel = ({ html, setHtml }) => {

    const [mode, setMode] = useState('Heb');
    const [style, setStyle] = useState({
        color: '#000000',
        fontSize: '18px',
        fontWeight: 'normal',

    });
    const [isNewStyle, setIsNewStyle] = useState(false);

    const hebrewLetters = [
        'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י',
        'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר',
        'ש', 'ת',
        'ך', 'ם', 'ן', 'ף', 'ץ'
    ];


    const enLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const numLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const setChar = (char) => {

        if (isNewStyle) {
            html = React.cloneElement(html, {}, html.props.children, <span style={style}></span>)
            setIsNewStyle(false);
        }

        let childrenArray = React.Children.toArray(html.props.children);
        let lastChildren = childrenArray[childrenArray.length - 1];
        let newLastChildren  = cloneElement(lastChildren, {}, lastChildren.props.children, char);

        const newChildren = [...childrenArray.slice(0, -1), newLastChildren];

        const newHtml = React.cloneElement(html, {}, ...newChildren);

        setHtml(newHtml)

    }



    const renderLetters = () => {
        switch (mode) {
            case 'Heb':
                return (
                    hebrewLetters.map(l => {
                        return (<button onClick={() => { setChar(l) }}>{l}</button>)
                    })
                )
            case 'EN':
                return (
                    enLetters.map(l => {
                        return (<button onClick={() => { setChar(l) }}>{l}</button>)
                    })
                )
            case 'Num':
                return (
                    numLetters.map(l => {
                        return (<button onClick={() => { setChar(l) }}>{l}</button>)
                    })
                )

        }
    }




    return (

        <>

            <div>

                {renderLetters()}

            </div>

            <div>
                <button onClick={() => { setMode(mode == 'Heb' ? 'EN' : 'Heb') }}>{(mode == 'Heb' ? 'EN' : 'Heb')}</button>
                <button onClick={() => { setMode('Num') }}>{'1,2,3'}</button>

                <input type="color" 
                value={style.color}
                onChange={(e)=>{
                    setStyle({ ...style, color: e.target.value });
                    setIsNewStyle(true);
                }}
                />

                <button  onClick={() => {
                    if (style.fontWeight == 'normal') {
                    setStyle({ ...style, fontWeight: 'bold' });
                    }else{
                    setStyle({ ...style, fontWeight: 'normal' });
                    }
                    setIsNewStyle(true);
                }}><strong>Bold</strong></button>
            </div>





        </>

    )


}


export default ButtonsPanel;

