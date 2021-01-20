for (var a=[],i=0;i<=13;++i) a[i]=i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function hide(){
    var y = document.getElementsByClassName("member-detail");
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
}


function abc(){
    b=[];
    k=0;
    for(n=0; n<a.length; n= n+4){
        b[k] = a.slice(n, n+4);
        console.log(b[k]);
        k = k+1; 
    }
}

function showmem(){     
    for(x= 0; x<4; x++){
        document.getElementById("mem" + b[z][x]).style.display = 'block';  
    }
}

function outerfunction(){
    counter = 0;
    return innerfunction;
    function innerfunction(){
        counter = counter + 1;
    }
}

function showmem(){
    hide();
    for(x= 0; x<4; x++){
        if( b[counter][x] ){
            document.getElementById("mem" + b[counter][x]).style.display = 'block';
        }
        if (b[counter][x] == 0) {
            document.getElementById("mem" + b[counter][x]).style.display = 'block';
        }
        if (b[counter].length<=3){
            if (b[counter].length == 1){
                document.getElementById("mem" + b[counter][0]).style.display = 'block';
                document.getElementById("mem" + b[0][1]).style.display = 'block';
                document.getElementById("mem" + b[0][2]).style.display = 'block';
                document.getElementById("mem" + b[0][3]).style.display = 'block';    
            }
            if (b[counter].length == 2){
                document.getElementById("mem" + b[counter][0]).style.display = 'block';
                document.getElementById("mem" + b[counter][1]).style.display = 'block';
                document.getElementById("mem" + b[0][0]).style.display = 'block';
                document.getElementById("mem" + b[0][1]).style.display = 'block';    
            }
            if (b[counter].length == 3){
                document.getElementById("mem" + b[counter][0]).style.display = 'block';
                document.getElementById("mem" + b[counter][1]).style.display = 'block';
                document.getElementById("mem" + b[counter][2]).style.display = 'block';
                document.getElementById("mem" + b[0][0]).style.display = 'block';    
            }
        } 
    }
    count();
    console.log(b);
}

var count = new outerfunction();

jQuery( document ).ready(function() {
    shuffle(a);
    abc();
    setInterval(() => {
        if (counter<(a.length/4)){
            showmem();
        }
        else{
            counter = 0;
        }
    }, 5000);
});