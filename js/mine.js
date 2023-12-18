const quotes=[
    {
    quote:'"Resentment is like drinking poison and waiting for your enemies to die."',
    writer:'--Nelson Mandela--'
},
{quote:'"The best revenge is massive success."',
 writer:'--Frank Sinatra--'
},
{
    quote:'"Do not take life too seriously. You will not get out alive."',
    writer:'--Elbert Hubbard--'
},
{
    quote: '"Its not what happens to you, but how you react to it that matters."',
    writer:'--Epictetus--'
},
{
    quote:'"You miss 100% of the shots you dont take."',
    writer:'--Wayne Gretzy--'
},
]

let btn= document.querySelector("#qbtn");
let quote= document.querySelector(".quote");
let writer= document.querySelector(".writer");


btn.addEventListener("click",function(){

 let random = Math.floor(Math.random() * quotes.length);

 quote.innerHTML = quotes[random] .quote;

 writer.innerHTML= quotes[random] .writer;
})