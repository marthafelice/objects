//     Question one
function InstagramPost(authorHandle, content, imageLink, views, likes) {
    return{
  authorHandle :authorHandle,
  content :content,
  imageLink : imageLink,
  views :views,
  likes :likes,
    }
}

// Question two
const post1 = InstagramPost('mary_katsha', 'trying to relax!', 'https://images.unsplash.com/photo-1677443844012-7927843ad989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80', 9000, 1000);
const post2 =  InstagramPost('assimwe_donah', 'goals!', 'https://images.unsplash.com/photo-1677506455248-fcdcbbd004a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 300, 90);

console.log(post1.authorHandle); // "mary_katsha"
console.log(post1.content); // "trying to relax!"
console.log(post1.imageLink); // "katsha's image"
console.log(post1.views); // "9000 views"
console.log(post2.likes); // "1000 likes"


//     Question three a)
function createPerson(name, age , location){
    return{
  name: name,
  age: age,
  location: location,
    }
}

const Musa = createPerson('Musa', '19', 'Lekki, Lagos State');
console.log(Musa.name); // "Musa"
console.log(Musa.age); // "19"
console.log(Musa.location); // "Lekki, Lagos State"


// //     Question three b)
function createJambScores(eng, govt, lit ,crk){
    return{
   ENG: eng,
   GOVT: govt,
   LIT:lit,
   CRK:crk,

    };
}

musa.jambScores = createJambScores(70, 85, 82, 94);

console.log(musa.jambScores.ENG); 
console.log(musa.jambScores.GOVT);
console.log(musa.jambScores.LIT); 
console.log(musa.jambScores.CRK);


//Question 4
//object.assign method
// const anotherObject = Object.assign({color: ‘yellow’}, circle);
//using the spread operator
const another = {...circle};




//Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };
 
 for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
 }
 