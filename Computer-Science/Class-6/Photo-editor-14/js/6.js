function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var DragGameParent = document.querySelectorAll('.DragGame--Parent');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));


    for (const drag of mydrag) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
        DragGameChilds1.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        });
    })

    this.dragOver = (e) => {

        e.preventDefault();
    }
    this.dragStart = (e) => {
        
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }


    this.dragEnd = (e) => {
        
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
    }

    var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    var myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });

    var clone1;

    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if(e.target.children[0]){
            return;
        }
        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
        }
        
    }


    this.checkEveryElement = (element) => element.children[0]? element.children[0].getAttribute('data-place') == element.getAttribute('data-place'): console.log('no');


    this.successPage = () => {
        this.errorPage();
        if(myDragArray.every(this.checkEveryElement)){
            location.href = 'game-success-6.html';
        }
        

    }

    var count = 0;
    this.errorPage = () => {
        myDragArray.forEach(element => {
            if(element.children[0]){
                if((element.children[0].getAttribute('data-place') == element.getAttribute('data-place'))){
                    element.children[0].style.border = '5px solid #a1dd6f';
                    count++;
                }
                else{
                    element.children[0].style.border = '5px solid #dc6c85';
                }
            }
        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        count = 0;
        myArray.forEach(element => {

            element.style = '';
            
        });

        DragGameParent.forEach(element => {
            element.appendChild(document.getElementById(element.getAttribute('data-side')));
        });

        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}

const computergame = new computerGames();