import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { selected } from './features/selector/selector-slice'
import './App.css'

function App() {

    const note = useAppSelector((state) => state.selector.value);  //Currently selected note
    const dispatch = useAppDispatch();
  
    function handleClick(e: string) {
        dispatch(selected(e))
    }

    return (
        <div className='display'>
            <div className='keyboard'>
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
            <Content note={note} />
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
}

function Content ({ note }: Content) {
    
    interface NoteData {
        scale: string[];
    }

    interface NoteName {
        [key:string]: NoteData;
    }

    const noteLib: NoteName = {
        'C': { 
            'scale': ['C','D','E','F','G','A','B'] },
        'C# / Db': { 
            'scale': ['Db','Eb','F','Gb','Ab','Bb','C'] },
        'D': { 
            'scale': ['D','E','F#','G','A','B','C#'] },
        'D# / Eb': { 
            'scale': ['Eb','F','G','Ab','Bb','C','D'] },
        'E': { 
            'scale': ['E','F#','G#','A','B','C#','D#'] },
        'F': { 
            'scale': ['F','G','A','Bb','C','D','E'] },
        'F# / Gb': { 
            'scale': ['Gb','Ab','Bb','Cb','Db','Eb','F'] },
        'G': { 
            'scale': ['G','A','B','C','D','E','F#'] },
        'G# / Ab': { 
            'scale': ['Ab','Bb','C','Db','Eb','F','G'] },
        'A': { 
            'scale': ['A','B','C#','D','E','F#','G#'] },
        'A# / Bb': { 
            'scale': ['Bb','C','D','Eb','F','G','A'] },
        'B': { 
            'scale': ['B','C#','D#','E','F#','G#','A#'] },
    }
    
    return (
        <div className='content'>
            <h1 className='note'>{note}</h1>
                <h2 className='majScale'> 
                    {noteLib[note].scale.map((n) => { return (
                        <p className='scaleNote' key={n}>{n}</p>
                    )})}
                </h2>
        </div>
    )
}

export default App
