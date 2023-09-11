let a = document.querySelector('footer a');//select tag a of footer
console.log(a.getAttribute('href'));//#

let link = 'https://www.horadecodar.com.br';
a.setAttribute('href', link)//setting link to href
console.log(a.getAttribute('href'));//debug