export interface NoteData {
    majScale: string[];
    minScale: string[];
    majTriad: string[];
    minTriad: string[];
    dimTriad: string[];
    augTriad: string[];
}

export interface NoteName {
    [key:string]: NoteData;
}

export const noteLib: NoteName = {
    'C': { 
        'majScale': ['C','D','E','F','G','A','B'],
        'minScale': ['C','D','Eb','F','G','Ab','Bb'],
        'majTriad': ['C','E','G'],
        'minTriad': ['C','Eb','G'],
        'dimTriad': ['C','Eb','Gb'],
        'augTriad': ['C','E','G#'] },
    'C# / Db': { 
        'majScale': ['Db','Eb','F','Gb','Ab','Bb','C'],
        'minScale': ['Db','Eb','E','Gb','Ab','A','B'],
        'majTriad': ['Db','F','Ab'],
        'minTriad': ['Db','E','Ab'],
        'dimTriad': ['Db','E','G'],
        'augTriad': ['Db','F','A'] },
    'D': { 
        'majScale': ['D','E','F#','G','A','B','C#'],
        'minScale': ['D','E','F','G','A','Bb','C'],
        'majTriad': ['D','F#','A'],
        'minTriad': ['D','F','A'],
        'dimTriad': ['D','F','Ab'],
        'augTriad': ['D','F#','A#'] },
    'D# / Eb': { 
        'majScale': ['Eb','F','G','Ab','Bb','C','D'],
        'minScale': ['Eb','E','Gb','Ab','Bb','B','Db'],
        'majTriad': ['Eb','G','Bb'],
        'minTriad': ['Eb','Gb','Bb'],
        'dimTriad': ['Eb','Gb','A'],
        'augTriad': ['Eb','G','B'] },
    'E': { 
        'majScale': ['E','F#','G#','A','B','C#','D#'],
        'minScale': ['E','F#','G','A','B','C','D'],
        'majTriad': ['E','G#','B'],
        'minTriad': ['E','G','B'],
        'dimTriad': ['E','G','Bb'],
        'augTriad': ['E','G#','B#'] },
    'F': { 
        'majScale': ['F','G','A','Bb','C','D','E'],
        'minScale': ['F','G','Ab','Bb','C','Db','Eb'],
        'majTriad': ['F','A','C'],
        'minTriad': ['F','Ab','C'],
        'dimTriad': ['F','Ab','B'],
        'augTriad': ['F','A','C#'] },
    'F# / Gb': { 
        'majScale': ['Gb','Ab','Bb','B','Db','Eb','F'],
        'minScale': ['Gb','Ab','A','B','Db','D','E'],
        'majTriad': ['Gb','Bb','Db'],
        'minTriad': ['Gb','A','Db'],
        'dimTriad': ['Gb','A','C'],
        'augTriad': ['Gb','Bb','D'] },
    'G': { 
        'majScale': ['G','A','B','C','D','E','F#'],
        'minScale': ['G','A','Bb','C','D','Eb','F'],
        'majTriad': ['G','B','D'],
        'minTriad': ['G','Bb','D'],
        'dimTriad': ['G','Bb','Db'],
        'augTriad': ['G','B','D#'] },
    'G# / Ab': { 
        'majScale': ['Ab','Bb','C','Db','Eb','F','G'],
        'minScale': ['Ab','Bb','B','Db','Eb','E','Gb'],
        'majTriad': ['Ab','C','Eb'],
        'minTriad': ['Ab','B','Eb'],
        'dimTriad': ['Ab','B','D'],
        'augTriad': ['Ab','C','E'] },
    'A': { 
        'majScale': ['A','B','C#','D','E','F#','G#'],
        'minScale': ['A','B','C','D','E','F','G'],
        'majTriad': ['A','C#','E'],
        'minTriad': ['A','C','E'],
        'dimTriad': ['A','C','Eb'],
        'augTriad': ['A','C#','F'] },
    'A# / Bb': { 
        'majScale': ['Bb','C','D','Eb','F','G','A'],
        'minScale': ['Bb','C','Db','Eb','F','Gb','Ab'],
        'majTriad': ['Bb','D','F'],
        'minTriad': ['Bb','Db','F'],
        'dimTriad': ['Bb','Db','E'],
        'augTriad': ['Bb','D','F#'] },
    'B': { 
        'majScale': ['B','C#','D#','E','F#','G#','A#'],
        'minScale': ['B','C#','D','E','F#','G','A'],
        'majTriad': ['B','D#','F#'],
        'minTriad': ['B','D','F#'],
        'dimTriad': ['B','D','F'],
        'augTriad': ['B','D#','G'] },
}