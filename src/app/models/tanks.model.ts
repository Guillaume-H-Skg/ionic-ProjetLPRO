//  export class Tank {
//      id?: string;
//      country: string;
//      music: string;
//      onAir: boolean;
//      pictureLink: string;
//      productor: string;
//      realisator: string;
//      releaseDate: string;
//      scenario: string;
//      synopsis: string;
//      time: string;
//      title: string;

//   constructor() {
//     this.country = '';
//     this.music = '';
//     this.onAir = false;
//     this.pictureLink = '';
//     this.productor = '';
//     this.realisator = '';
//     this.releaseDate = '';
//     this.scenario = '';
//     this.synopsis = '';
//     this.time = '';
//     this.title = '';
//   }
// }

export class Tank {
  id?: string;
  name: string;
  available: boolean;
  pictureLink: string;
  country: string;
  gun: string;
  manufacturer: string;
  amount: string;
  releaseDate: string;
  role: string;
  history: string;
  time: string;
  constructor() {
    this.name ='';
    this.available = false;
    this.pictureLink = '';
    this.country = '';
    this.gun ='';
    this.manufacturer='';
    this.amount='';
    this.releaseDate = '';
    this.role='';
    this.history='';
    this.time = '';
  }
}
