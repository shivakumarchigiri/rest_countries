let btn=document.getElementById('btn');
let holder=document.getElementById('place');
btn.addEventListener('click',LoadData);

function LoadData(){

    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/india',true);

    xhr.send();

    xhr.onload=function(){
        if(xhr.status==200){
            
            let result=xhr.responseText;
            result=JSON.parse(result);

            let [country]=result

            holder.innerHTML=`<img src=${country.flags.png}>`
        }
        else{

        holder.innerHTML="Invalid request"


        }
        xhr.onprogress=function(){
            holder.innerHTML="Getting.."
        }
    }

}