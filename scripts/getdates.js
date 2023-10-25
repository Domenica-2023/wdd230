const visitCount = localStorage.getItem('visitCount');

if(visitCount){
    localStorage.setItem('visitCount', Number(visitCount) +1);
}
else{
    localStorage.setItem('visitCount', 1);
}
console.log(document.querySelector('.visits'));
document.querySelector('.visits').innerHTML = visitCount;

/*last modified code*/
let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;


/*year code*/ 
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();