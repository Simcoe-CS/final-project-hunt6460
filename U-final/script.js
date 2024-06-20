/** @type {HTMLCanvasElement} */
let can =document.getElementById("canvas");
let c = can.getContext("2d");
let img = new Image();

let hair = new Image();
let shirt = new Image();
let pant = new Image();
let accessory = new Image();


//make background always load
img.onload = function() { //load and draw right away
    c.drawImage(img, 0, 0, 1040, 680);
    }
    img.src = "image.png"
    
    
    function show() {
        //finds the emlements of the items to select
        let h =
        document.getElementsByName("hair");
        let s =
        document.getElementsByName("shirt");
        let p =
        document.getElementsByName("pant");
        let a =
        document.getElementsByName("accessory");

        //starts to check if they are selected
        if(h[0].checked){
            hair.onload = function(){
                c.drawImage(hair,500,0,80,80)
            }
            hair.src= "hair1.png"
        }

        else if(h[1].checked){
            hair.onload = function(){
                c.drawImage(hair,420,0,250,180)
            }
            hair.src="hair2.png"
        }

        else if(h[2].checked){
            hair.onload = function(){
                c.drawImage(hair,500,10,80,80)
            }
            hair.src= "hair3.png"
        }

        else if(h[3].checked){
            hair.onload = function(){
                c.drawImage(hair,450,0,180,180)
            }
            hair.src= "hair4.png"
        }

        else if(h[4].checked){
            hair.onload = function(){
                c.drawImage(hair,480,10,130,80)
            }
            hair.src= "hair5.png"
        }

        else if(h[5].checked){
            hair.onload = function(){
                c.drawImage(hair,430,0,220,160)
            }
            hair.src= "hair6.png"
        }


        if(s[0].checked){
            shirt.onload = function(){
                c.drawImage(shirt,430,140,210,240)
            }
            shirt.src= "shirt1.png"
        }

        else if(s[1].checked){
            shirt.onload = function(){
                c.drawImage(shirt,430,120,210,280)
            }
            shirt.src= "shirt2.png"
        }

        else if(s[2].checked){
            shirt.onload = function(){
                c.drawImage(shirt,430,130,210,220)
            }
            shirt.src= "shirt3.png"
        }


        else if(s[3].checked){
            shirt.onload = function(){
                c.drawImage(shirt,430,130,210,260)
            }
            shirt.src= "shirt4.png"
        }

        else if(s[4].checked){
            shirt.onload = function(){
                c.drawImage(shirt,430,130,210,260)
            }
            shirt.src= "shirt5.png"
        }


        else if(s[5].checked){
            shirt.onload = function(){
                c.drawImage(shirt,405,130,260,280)
            }
            shirt.src= "shirt6.png"
        }




        if(p[0].checked){
            pant.onload = function(){
                c.drawImage(pant,405,340,260,330)
            }
            pant.src= "pant1.png"
        }

        else if(p[1].checked){
            pant.onload = function(){
                c.drawImage(pant,290,220,560,530)
            }
            pant.src= "pant2.png"
        }

        else if(p[2].checked){
            pant.onload = function(){
                c.drawImage(pant,440,340,140,230)
            }
            pant.src= "pant3.png"
        }


        else if(p[3].checked){
            pant.onload = function(){
                c.drawImage(pant,425,330,210,310)
            }
            pant.src= "pant4.png"
        }

        else if(p[4].checked){
            pant.onload = function(){
                c.drawImage(pant,390,340,290,290)
            }
            pant.src= "pant5.png"
        }

        else if(p[5].checked){
            pant.onload = function(){
                c.drawImage(pant,460,345,140,140)
                }
                pant.src= "pant6.png"
                }        

        if(a[0].checked){
            accessory.onload = function(){
                c.drawImage(accessory,500,45,80,80)
            }
            accessory.src= "glasses.png"
        }

         if(a[1].checked){
            accessory.onload = function(){
                c.drawImage(accessory,510,45,70,80)
            }
            accessory.src="sunglasses.png"
        }

         if(a[2].checked){
            accessory.onload = function(){
                c.drawImage(accessory,420,360,30,30)
            }
            accessory.src= "bracelet.png"
        }

         if(a[3].checked){
            accessory.onload = function(){
                c.drawImage(accessory,415,355,50,50)
            }
            accessory.src= "watch.png"
        }

        if(a[4].checked){
            accessory.onload = function(){
                c.drawImage(accessory,500,120,70,70)
            }
            accessory.src= "necklace.png"
        }

        if(a[5].checked){
            accessory.onload = function(){
                c.drawImage(accessory,380,400,110,110)
            }
            accessory.src= "purse.png"
        }



        //refreshes all images and checks which are sleected and display only those
        else{
            c.clearRect(0, 0, 1040, 680);//clears the whole canvas
            img.onload = function() { //load and draw right away
                c.drawImage(img, 0, 0, 1040, 680);
            }
            img.src = "image.png"
            if(h[0].checked){
                hair.onload = function(){
                    c.drawImage(hair,500,0,80,80)
                }
                hair.src= "hair1.png"
            }
    
            else if(h[1].checked){
                hair.onload = function(){
                    c.drawImage(hair,420,0,250,180)
                }
                hair.src="hair2.png"
            }
    
            else if(h[2].checked){
                hair.onload = function(){
                    c.drawImage(hair,500,10,80,80)
                }
                hair.src= "hair3.png"
            }
    
            else if(h[3].checked){
                hair.onload = function(){
                    c.drawImage(hair,450,0,180,180)
                }
                hair.src= "hair4.png"
            }
    
            else if(h[4].checked){
                hair.onload = function(){
                    c.drawImage(hair,480,10,130,80)
                }
                hair.src= "hair5.png"
            }
    
            else if(h[5].checked){
                hair.onload = function(){
                    c.drawImage(hair,430,0,220,160)
                }
                hair.src= "hair6.png"
            }
    
    
            if(s[0].checked){
                shirt.onload = function(){
                    c.drawImage(shirt,430,140,210,240)
                }
                shirt.src= "shirt1.png"
            }
    
            else if(s[1].checked){
                shirt.onload = function(){
                    c.drawImage(shirt,430,120,210,280)
                }
                shirt.src= "shirt2.png"
            }
    
            else if(s[2].checked){
                shirt.onload = function(){
                    c.drawImage(shirt,430,130,210,220)
                }
                shirt.src= "shirt3.png"
            }
    
    
            else if(s[3].checked){
                shirt.onload = function(){
                    c.drawImage(shirt,430,130,210,260)
                }
                shirt.src= "shirt4.png"
            }
    
            else if(s[4].checked){
                shirt.onload = function(){
                    c.drawImage(shirt,430,130,210,260)
                }
                shirt.src= "shirt5.png"
            }
    
    
            else if(s[5].checked){
                shirt.onload = function(){
                    c.drawImage(shirt,405,130,260,280)
                }
                shirt.src= "shirt6.png"
            }
    
    
    
    
            if(p[0].checked){
                pant.onload = function(){
                    c.drawImage(pant,405,340,260,330)
                }
                pant.src= "pant1.png"
            }
    
            else if(p[1].checked){
                pant.onload = function(){
                    c.drawImage(pant,290,220,560,530)
                }
                pant.src= "pant2.png"
            }
    
            else if(p[2].checked){
                pant.onload = function(){
                    c.drawImage(pant,440,340,140,230)
                }
                pant.src= "pant3.png"
            }
    
    
            else if(p[3].checked){
                pant.onload = function(){
                    c.drawImage(pant,425,330,210,310)
                }
                pant.src= "pant4.png"
            }
    
            else if(p[4].checked){
                pant.onload = function(){
                    c.drawImage(pant,390,340,290,290)
                }
                pant.src= "pant5.png"
            }
    
            else if(p[5].checked){
                pant.onload = function(){
                    c.drawImage(pant,460,345,140,140)
                    }
                    pant.src= "pant6.png"
                    }        
    
            if(a[0].checked){
                accessory.onload = function(){
                    c.drawImage(accessory,500,45,80,80)
                }
                accessory.src= "glasses.png"
            }
    
             if(a[1].checked){
                accessory.onload = function(){
                    c.drawImage(accessory,510,45,70,80)
                }
                accessory.src="sunglasses.png"
            }
    
             if(a[2].checked){
                accessory.onload = function(){
                    c.drawImage(accessory,420,360,30,30)
                }
                accessory.src= "bracelet.png"
            }
    
             if(a[3].checked){
                accessory.onload = function(){
                    c.drawImage(accessory,415,355,50,50)
                }
                accessory.src= "watch.png"
            }
    
            if(a[4].checked){
                accessory.onload = function(){
                    c.drawImage(accessory,500,120,70,70)
                }
                accessory.src= "necklace.png"
            }
    
            if(a[5].checked){
                accessory.onload = function(){
                    c.drawImage(accessory,380,400,110,110)
                }
                accessory.src= "purse.png"
            }
        }

    }

    function reset(){
        c.clearRect(0, 0, 1040, 680); //clears the whole canvas
        img.onload = function() { //load and draw right away
            c.drawImage(img, 0, 0, 1040, 680);
        }
        img.src = "image.png"
        
        for (let i =0; i = i; i+1000){
            out.innerHTML="You finished in" + i + "seconds"
        }
        //https://stackoverflow.com/questions/15784554/how-to-uncheck-radio-button-javascript
        //resets the radio buttons
        let elements = document.getElementsByTagName("input");

        for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            elements[i].checked = false;
        }
    }
    }
    
















/*c.fillStyle = "red";
c.fillRect (200,200,120,120);*/

/*c.beginPath();
c.fillStyle="orange";
c.moveTo(199,200)
c.lineTo(320,200)
c.lineTo(260,110)
c.fill();*/

/*c.beginPath();
c.fillStyle = "yellow";
c.arc(500, 90, 80, 0, 2*Math.PI);
c.stroke()
c.fill()*/