var index = 1;
function plusindex(n){
    index = index + n;
    showImages(index);
    
}    
function showImages(n){
    var i;
    var x=document.getElementsByClassName("Slides");
    if(n>x.length){index=1};
    if(n<1){index=x.length};
    
    for(i=0;i<x.length;i++)
        {
            x[i].style.display="none";
            
        }
      x[index-1].style.display="block";
    
    
}   
    autoslide()
    function autoslide(){
        var i;
        var x=document.getElementsByClassName("Slides");
    
    for(i=0;i<x.length;i++){
        
        x[i].style.display="none";
    }
    if(index>x.length){index=1}
    x[index-1].style.display="block";
    index++;
    setTimeout(autoslide,2000);
    
    }
  
