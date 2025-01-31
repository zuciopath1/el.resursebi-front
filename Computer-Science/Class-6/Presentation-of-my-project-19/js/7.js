createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}




document.querySelectorAll('.listen--btn').forEach(w => {
    w.addEventListener('click', (e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })
})


function game(){
    var error = true;
    var error2 = true;
    var error3 = true;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement1).on('dragstart', (e) => this.dragStart(e));
    $(dragElement1).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of dragElement2) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    var dragElement2MyArray = [];
    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }


    var dragElement1MyArray = [];
    for(var i = 0; i < dragElement1.length; i++ ){
        dragElement1MyArray.push(dragElement1[i])
    }



    document.addEventListener('DOMContentLoaded', () => {
        dragElement1MyArray.forEach((w, i) => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })
    


    // Drag Functions    
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.parentElement.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.parentElement.getAttribute('data-class');
        e.target.parentElement.className = elClassName;
    }


    this.dragDrop = e => { 
        e.preventDefault();

        e.target.querySelector('.appendDiv').appendChild(document.querySelector('.draggedElement'));

        this.checkFirstLine(e)
    }


    this.checkFirstLine = (e) => {

        let parent = $('.DragGame—childs2');

        $(parent).each(function(i) {
            if($(this).children().hasClass('appendDiv--1')){
                let childrens = $(this).children('.appendDiv--1').children('div')
                let parentIndex = $(this).children('.appendDiv--1');

                $(childrens).each(function( index ) {
                    if($(this).attr('data-index') == $(parentIndex).attr('data-index')) {
                        if(index == 1) {
                            error = false
                        }
                    } else {
                        error = true;
                        return false
                    }
                });
    
            } else if($(this).children().hasClass('appendDiv--2')){
                let childrens = $(this).children('.appendDiv--2').children('div')
                let parentIndex = $(this).children('.appendDiv--2');
    
                $(childrens).each(function( index ) {
                    if($(this).attr('data-index') == $(parentIndex).attr('data-index')) {
                        if(index == 2) {
                            error2 = false
                        }
                    } else {
                        error2 = true
                        return false
                    }
                });
    
    
            } else if($(this).children().hasClass('appendDiv--3')){
                let childrens = $(this).children('.appendDiv--3').children('div')
                let parentIndex = $(this).children('.appendDiv--3');


                $(childrens).each(function( index ) {
                    if($(this).attr('data-index') == $(parentIndex).attr('data-index')) {
                        if(index == 1) {
                            error3 = false
                        }
                    } else {
                        error3 = true
                    }
                });
    
            }
        })
    }



    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }

    
 
    this.successPage  = () => {
		if(!error && !error2 && !error3){
            location.href = "game-success-7.html"
        } else {
            this.errorPage()
        }
    }


    this.errorPage = () => {
        if(error){
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.remove('success')
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.add('success')
        }

        if(error2){
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.remove('success')
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.add('success')
        }

        if(error3){
            document.querySelector('.DragGame—childs2--3').querySelector('.sign-description-btn').classList.remove('success')
            document.querySelector('.DragGame—childs2--3').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--3').querySelector('.sign-description-btn').classList.add('success')
        }
    }
    
 


    this.resetGame = () => {
        dragElement1MyArray.forEach(w => {
            $('.dropParent').append(w)
        });


        $('.sign-description-btn').removeClass('error')
        $('.sign-description-btn').removeClass('success')

        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();