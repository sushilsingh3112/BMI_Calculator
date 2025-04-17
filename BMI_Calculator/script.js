//form h yha isliye click event nhi h submit h
//form ya to post type submit hta h ya get type submit hota h
//jb bhi submit hota h to uski value url me chli ati h  
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault() //jo bhi deafault value h usko ek min ke liye roko
    
   const height= parseInt(document.querySelector('#height').value)//ParseInt convert into string to int
   const weight=parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')

   if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`give a vaild height ${height}`;

   }

   else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Give a vaild weight ${weight}`;
   } else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    //show the result
    results.innerHTML=`<span>${bmi}</span>`;
   }


})