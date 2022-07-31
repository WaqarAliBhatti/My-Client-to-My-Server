document.querySelector('button').addEventListener('click',fetchfunc);
async function fetchfunc(){
    // const res= await fetch('http://localhost:8000/api/savage'); //requesting from savage code of server

    const rapname=document.querySelector('input').value;
    const res= await fetch(`http://localhost:8000/api/rappers/${rapname}`);   //requesting from rappers code of server
    const data=await res.json();

    document.querySelector('h2').innerText=data.age;
    document.querySelector('h3').innerText=data.birthname;

    document.querySelector('h4').innerText=data.birthplace;


    console.log(data);
    
}