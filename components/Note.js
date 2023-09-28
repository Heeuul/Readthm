export default class Note 
{
    // Alphabet: "A", "B", "C", "D", "E", "F" 
    // Octave: 0 ~ 8 
    // Pitch: "flat", "natural", "sharp" 
    // Clef: "bass", "treble" 
    // Image: URI 
    
    constructor(alphabet, octave, pitch, clef, image) 
    {
        this.alphabet = alphabet; 
        this.octave = octave; 
        this.pitch = pitch; 
        this.clef = clef; 
        this.image = image; 
    }
}