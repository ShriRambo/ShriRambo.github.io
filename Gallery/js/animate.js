//Movement animation
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


function addAnimListner(card){
    cont = card.parentElement
    let rec = cont.getBoundingClientRect();
    let ccent = {x: rec.left + 0.5*rec.width, y: rec.top + 0.5*rec.height};
    addAnimationActions(cont , card, ccent)

}

// function setCurrentCard(){

//     // for (let cont of document.querySelectorAll(".container")){
        
//     //     let rec = cont.getBoundingClientRect();
//     //     let ccent = {x: rec.left + 0.5*rec.width, y: rec.top + 0.5*rec.height};
//     //     let card = cont.children[0]

//     //     addAnimationActions(cont , card, ccent)
//     // }
    

// }


function addAnimationActions(container, card, ccent){

    container.style.transform = `rotateZ(${Math.random()*10  - 5}deg)`

    //MOving aniumation event
    container.addEventListener('mousemove', (e) => {
        
        let xAxis = -(ccent.x - e.pageX)/20;
        let yAxis = (ccent.y - e.pageY)/20;

        // console.log(xAxis, yAxis)

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    });
    // in ab
    container.addEventListener('mouseenter', e =>{

        card.style.transition = "none"
    })

    //out animation
    container.addEventListener('mouseleave', (e) =>{
        card.style.transition = "all 0.5s ease"
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });

}


// Todo, add event listner on image load