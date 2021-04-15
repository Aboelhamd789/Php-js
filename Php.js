//Php.js By Abdelrahman
export default class Php{
  constructor(name, owner, help){
    this.name = "php language";
    this.owner = "Abdelrahman Aboelhamd";
    this.help = "1-php.echo() for print   2-php.print_r() for print array";
  }
  echo(print){
    this.print = print;
    const text = document.createTextNode(this.print);
    document.body.appendChild(text);
  }print_r(array){
    this.array = array;
    if(this.array [0] != null){
    let arr = document.createTextNode("[0] =>" + this.array[0])
    if( this.array[1] != null){
    console.log("nothing in array [0]")
    }
    else if(this.array[1] == null){
      document.body.appendChild(arr)
    }
    if(this.array [1] != null){
    let arr = document.createTextNode("[0] =>" + this.array[0] + "[1] => " + this.array[1])
    if( this.array[2] != null){
    console.log("nothing in array [1]")
    }
    else if(this.array[2] == null){
      document.body.appendChild(arr)
    }
    if(this.array [2] != null){
      let arr = document.createTextNode("[0] =>" + this.array[0] +" "+ "[1] => " + this.array[1] +" " +  "[2] => " + this.array[2])
          if(this.array[3] != null){
            console.log("nothing in array [2]")
          }
          else if(this.array[3] == null){
            document.body.appendChild(arr)
          }
    }
        if(this.array [3] != null){
      let arr = document.createTextNode("[0] =>" + this.array[0] +" "+ "[1] => " + this.array[1] +" " +  "[2] => " + this.array[2] +" "+ "[3] => " + this.array[3])
          if(this.array[4] != null){
            console.log("nothing in array [3]")
          }
          else if(this.array[4] == null){
            document.body.appendChild(arr)
          }
    }
    if(this.array [4] != null){
      let arr = document.createTextNode("[0] =>" + this.array[0] +" "+ "[1] => " + this.array[1] +" " +  "[2] => " + this.array[2] +" "+ "[3] => " + this.array[3] +" " + "[4] => " + this.array[4])
          if(this.array[5] != null){
            console.log("nothing in array [4]")
          }
          else if(this.array[5] == null){
            document.body.appendChild(arr)
          }
    }
    if(this.array [5] != null){
      let arr = document.createTextNode( "[0] =>" + this.array[0] +" "+"[1] => " + this.array[1] +" " +  "[2] => " + this.array[2] +" "+ "[3] => " + this.array[3] +" "+"[4] => " + this.array[4] +" "+ "[5] => " + this.array[5])
          if(this.array[6] != null){
            console.log("nothing in array [5]")
          }
          else if(this.array[6] == null){
            document.body.appendChild(arr)
          }
    }
        if(this.array [6] != null){
      let arr = document.createTextNode("[0] =>" + this.array[0] +" "+  "[1] => " + this.array[1] +" " +  "[2] => " + this.array[2] +" "+ "[3] => " + this.array[3] +" "+ "[4] => " + this.array[4] +" "+  "[5] => " + this.array[5] + " " + "[6] => " + this.array[6])
          if(this.array[7] != null){
            console.log("nothing in array [6]")
          }
          else if(this.array[7] == null){
            document.body.appendChild(arr)
          }
    }
    if(this.array [7] != null){
      let arr = document.createTextNode("[0] =>" + this.array[0] +" "+ "[1] => " + this.array[1] +" " +  "[2] => " + this.array[2] +" "+  "[3] => " + this.array[3] +" "+ "[4] => " + this.array[4] +" "+  "[5] => " + this.array[5] + " " +  "[6] => " + this.array[6] +" "+"[7] => " + this.array[7])
          if(this.array[8] != null){
            console.log("nothing in array [7]")
          }
          else if(this.array[8] == null){
            document.body.appendChild(arr)
          }
    }
    if(this.array [8] != null){
      let arr = document.createTextNode( "[0] =>" + this.array[0] +" "+  "[1] => " + this.array[1] +" " +  "[2] => " + this.array[2] +" "+  "[3] => " + this.array[3] +" "+ "[4] => " + this.array[4] +" " + "[5] => " + this.array[5] + " " +  "[6] => " + this.array[6] +" "+  "[7] => " + this.array[7]+" "+  "[8] => " + this.array[8])
          if(this.array[9] != null){
            console.log("nothing in array [9]")
          }
          else if(this.array[9] == null){
            document.body.appendChild(arr)
          }
    }
     if(this.array [9] != null){
      let arr = document.createTextNode("[0] =>" + this.array[0] +" "+  "[1] => " + this.array[1] +" " + "[2] => " + this.array[2] +" "+ "[3] => " + this.array[3] +" "+ "[4] => " + this.array[4] +" "+ "[5] => " + this.array[5] + " " +  "[6] => " + this.array[6] +" "+  "[7] => " + this.array[7]+" "+ "[8] => " + this.array[8] + " " + "[9] => " + this.array[9])
          if(this.array[10] != null){
            console.log("nothing in array [10]")
          }
          else if(this.array[10] == null){
            document.body.appendChild(arr)
          }
    }
  }
  }
}
}
