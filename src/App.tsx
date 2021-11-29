import React, { useEffect } from 'react'
import{ noteLib } from './globals'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { selected } from './features/selector/selector-slice'
import { toggled } from './features/toggler/toggle-slice'
import './App.css'

function App() {

    const note = useAppSelector((state) => state.selector.value);  //Currently selected note
    const toggle = useAppSelector((state) => state.toggle.value);
    const dispatch = useAppDispatch();
  
    function handleClick(e: string) {
        dispatch(selected(e))
    }
    function handleToggle() {
        dispatch(toggled(toggle))
    }

    return (
        <div className='display'>
            <div className='sidebar'>
                <Key className={'natural'} note={'C'} onClick={() => handleClick('C')} key={'C'}/>
                <Key className={'accidental'} note={'C# / Db'} onClick={() => handleClick('C# / Db')} key={'C# / Db'}/>
                <Key className={'natural'} note={'D'} onClick={() => handleClick('D')} key={'D'}/>
                <Key className={'accidental'} note={'D# / Eb'} onClick={() => handleClick('D# / Eb')} key={'D# / Eb'}/>
                <Key className={'natural'} note={'E'} onClick={() => handleClick('E')} key={'E'}/>
                <Key className={'natural'} note={'F'} onClick={() => handleClick('F')} key={'F'}/>
                <Key className={'accidental'} note={'F# / Gb'} onClick={() => handleClick('F# / Gb')} key={'F# / Gb'}/>
                <Key className={'natural'} note={'G'} onClick={() => handleClick('G')} key={'G'}/>
                <Key className={'accidental'} note={'G# / Ab'} onClick={() => handleClick('G# / Ab')} key={'G# / Ab'}/>
                <Key className={'natural'} note={'A'} onClick={() => handleClick('A')} key={'A'}/>
                <Key className={'accidental'} note={'A# / Bb'} onClick={() => handleClick('A# / Bb')} key={'A# / Bb'}/>
                <Key className={'natural'} note={'B'} onClick={() => handleClick('B')} key={'B'}/> 
            </div>
            <Content note={note} toggle={toggle} handleToggle={handleToggle}/>
        </div>
    )
}
interface Keys {
    className: string;
    note: string;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

function Key ({ className, note, onClick }: Keys)  {
    return (
        <div className={className} onClick={onClick}>
            <p>{note}</p>
        </div>
    )
}

interface Content {
    note: string;
    toggle: boolean;
    handleToggle: Function;
}

function Content ({ note, toggle, handleToggle }: Content) {
     
    return (
        <div className='content'>
            <ToggleButton toggle={toggle} onClick={() => handleToggle(toggle)}/>
            <h1 className='note'>{note}</h1>
                <div className='scale'>
                    <h3>{toggle == false ? 'Major' : 'Minor'} Scale</h3> 
                    {
                    toggle == false ?
                        noteLib[note].majScale.map((n) => { return (
                            <p className='scaleNote' key={n}>{n}</p>
                        )})
                        :
                        noteLib[note].minScale.map((n) => { return (
                            <p className='scaleNote' key={n}>{n}</p>
                        )})
                    } 
                </div>
            <TriadContainer type={'Major'} note={note} />
            <TriadContainer type={'Minor'} note={note} />
            <TriadContainer type={'Diminished'} note={note} />
            <TriadContainer type={'Augmented'} note={note} />
        </div>
    )
}

interface triadContainer {
    type: string,
    note: string,
}

function TriadContainer({ type, note }: triadContainer) {

    if(type == "Major") {
        return (
            <div className='majorTriad'>
                <h2 className='triadType'>{type} Triad</h2>
                    <div className='triad'>
                        {noteLib[note].majTriad.map((n) => { return (
                            <p className='triadNote' key={n}>{n}</p>
                        )})}
                </div>
            </div>
        )
    } else if(type == "Minor") {
        return (
            <div className='minorTriad'>
                <h1 className='triadType'>{type} Triad</h1>
                    <div className='triad'>
                        {noteLib[note].minTriad.map((n) => { return (
                            <p className='triadNote' key={n}>{n}</p>
                        )})}
                </div>
            </div>
        )
    } else if(type == "Diminished") {
        return (
            <div className='diminishedTriad'>
                <h1 className='triadType'>{type} Triad</h1>
                    <div className='triad'>
                        {noteLib[note].dimTriad.map((n) => { return (
                            <p className='triadNote' key={n}>{n}</p>
                        )})}
                    </div>
            </div>
        )
    } else if(type == "Augmented") {
        return (
            <div className='augmentedTriad'>
                <h1 className='triadType'>{type} Triad</h1>
                    <div className='triad'>
                        {noteLib[note].augTriad.map((n) => { return (
                            <p className='triadNote' key={n}>{n}</p>
                        )})}
                    </div>
            </div>
        )
    } else {
        return(null);
    }

}

/* interface nextButton {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function NextButton({ onClick }: nextButton) {

    return (
        <button onClick={onClick}>{'>>'}</button>
    )

} */
interface toggleButton {
    toggle: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

function ToggleButton({ toggle, onClick }: toggleButton) {

    return ( 
        <div className='toggleContainer'>
            <div className='toggleSwitch'>
                <div className={toggle == false ? 'toggleOn' : 'toggleOff'} onClick={onClick}></div>
            </div>
        </div>
    )

}

export default App
