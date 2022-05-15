input=document.querySelector('#text');
button1=document.querySelector('#bttn');
name1=document.querySelector('#name')
name1.style.color="white"
button1.addEventListener('click',function()
{
    let m=input.value;
    console.log(m)
    let newele=document.createElement('h1')
    newele.append(m)
    name1.append(newele)
})