const visitCount = localStorage.getItem('visitCount');

if(visitCount){
    localStorage.setItem('visitCount', Number(visitCount) +1);
}
else{
    localStorage.setItem('visitCount', 1);
}
console.log(document.querySelector('.visits'));
document.querySelector('.visits').innerHTML = visitCount;