function createCell(width , height){
let board = document.querySelector('#board')
let div = document.createElement('div');
div.innerHTML = '0';
div.classList.add('cell');
div.style.width = width + 'px';
div.style.height = height + 'px';
board.appendChild(div);

}


function addCells(w , h){
    let = document.querySelector('#board')
    board.style.width = w + 'px';
    board.style.height = h + 'px';
    let maximumCellsInBoard = (w / 100) * (h / 100);
    for(i = 0 ; i < maximumCellsInBoard ; i++){
         createCell(100 , 100);
    }
     addCounter();
}


  let startButton = document.querySelector('.button');
startButton.addEventListener('click', function() {
	 addCells(600 , 600);
    
});


function addCounter(){
    var cells = document.querySelectorAll('.cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            this.innerHTML = (this.innerHTML *1) +1;
            checkSum();
         });
       
    }
    
}