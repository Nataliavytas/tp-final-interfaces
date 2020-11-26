export interface MusicElement {
    image:string;
    type: string;
    title: string;
    artist: string; 
    about: string;
    comments: Comment[];
    elements: string[]; //Serian los capitulos o canciones si es un album
}