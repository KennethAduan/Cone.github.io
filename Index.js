var radius;
var height;
var volume;
var surface;
var pi = 3.141592653589793;

function showFormula () {
        var volAnswer = document.getElementById("selectSolution").value;
        if(volAnswer == "Select"){
                document.getElementById("SelectPic").style.display='block'
                document.getElementById("volumePic").style.display='none'
                document.getElementById("surfacePic").style.display='none'
          }
        if(volAnswer == "VOLUME"){
          document.getElementById("volumePic").style.display='block'
          document.getElementById("surfacePic").style.display='none' 
          document.getElementById("SelectPic").style.display='none'
        }
        if(volAnswer == "SURFACE"){
        document.getElementById("surfacePic").style.display='block'
        document.getElementById("volumePic").style.display='none'
        document.getElementById("SelectPic").style.display='none'    
        }
      
    }

document.getElementById("enterBtn").onclick = function(){
     

        var volAnswer = document.getElementById("selectSolution").value;
        radius = document.getElementById("radius").value;
        radius = Number(radius);
        
        height = document.getElementById("height").value;
        height = Number(height);
        

        if(volAnswer == "VOLUME"){
        volume = pi *  Math.pow(radius, 2) * height/3;
        document.getElementById("solution").value ="VOLUME = "+ pi+" * ("+radius+" ^ 2 ) "+"* "+height+" / "+3;
        document.getElementById("answer").value = volume + " = "+Math.round(volume);;     
        }

        if(volAnswer == "SURFACE"){
        surface = pi*radius*(radius+Math.sqrt(Math.pow(height,2)+Math.pow(radius,2)));
        document.getElementById("solution").value ="SURFACE = "+ pi+" * "+radius+" * ("+radius+" + sqrt"+height+" ^ 2 + "+radius+"^2)";
        document.getElementById("answer").value = surface + " = "+Math.round(surface);
        }

        document.getElementById("clearBtn").onclick = function(){
                document.getElementById("radius").value = "";
                document.getElementById("height").value = "";
                document.getElementById("solution").value = "";
                document.getElementById("answer").value = "";
        }
         
 }



