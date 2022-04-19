import Database from "./Database/Database.js";
import persone from "./Database/model/Persone.js";
import persone from "./Database/model/Persone.js";

let db  = new Database();

//persone.name = 'kouadio konan ';
//persone.age = 33 ;
//persone.favoritFood[' foutou banane','garba ]

//persone.name = 'yolande yao ';
//persone.age = 23 ;
//persone.favoritFood[' foutou banane','garba']

//let persone = persone();

//persone.creat([
 //   {name : 'yolande yao ',
//age : 23 ,
//favoritFood:['foutou banane','garba']
//},

//{name : 'coco  ',
//age : 23 ,
//favoritFood:['foutou banane','garba']
//},
//])


//persone.save().then((persone) => {
//    console.log(persone);
//})

//persone.findOne({name: 'yolande yao'}).then ((persone)=> {console.log(persone);});

//persone.find().then((people)=> {
   // console.log(people);
//})
let id = "6258060b97ac2fe713f6c049";
persone.findById(id)
.then((persone)=> {
    console.log(persone);
})