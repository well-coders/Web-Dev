let fol = document.querySelector(".follow1");
let newfol = "yes" ;

fol.addEventListener("click" , () => {
    if(newfol==="yes") {
    newfol="no";
    fol.innerText="Following";
    document.querySelector(".follow1").style.color="white" ;
    } else {
        newfol="yes"
        fol.innerText="Follow"
        document.querySelector(".follow1").style.color="rgb(0, 140, 255)" ;
    }
    console.log(newfol);
});

let fol1 = document.querySelector(".follow2");
let newfol1 = "yes" ;

fol1.addEventListener("click" , () => {
    if(newfol1==="yes") {
    newfol1="no";
    fol1.innerText="Following";
    document.querySelector(".follow2").style.color="white" ;
    } else {
        newfol1="yes"
        fol1.innerText="Follow"
        document.querySelector(".follow2").style.color="rgb(0, 140, 255)" ;
    }
    console.log(newfol1);
});

                            //  t h r e e  d o ts 


let bye = document.querySelector("#hi");
let newbye = "yes";

bye.addEventListener("click" , () => {
    if(newbye==="yes") {
        newbye="no";
        document.querySelector(".bye").style.display="flex";
    } else {
        newbye="yes";
         document.querySelector(".bye").style.display="none";
    }
})

            // S e a r c h 

let search = document.querySelector(".search");
let newsearch = "yes";

search.addEventListener("click" , () => {
    if (newsearch==="yes") {
        newsearch="no";
        document.querySelector(".search-bar").style.display="inline";
        document.querySelector("#search").style.color="rgb(0, 140, 255)";
    } else {
        newsearch="yes";
        document.querySelector(".search-bar").style.display="none";
    }
})



                //    p r o f i l e 

let profile = document.querySelector(".pro");
let newpro = "yes";

profile.addEventListener("click" , () => {
    if (newpro==="yes") {
        newpro="no";
        document.querySelector(".Profilemy").style.display="inline";
        document.querySelector(".pro-photo").style.border="2px solid rgb(0, 140, 255)";
    } else {
        newpro="yes";
        document.querySelector(".Profilemy").style.display="none";
        document.querySelector(".pro-photo").style.border="2px solid transparent";
    }
})