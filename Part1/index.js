const array=[]

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        array[clickedId] = 'X';
    }
    else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        array[clickedId] = 'O;'
    }
    console.log(array)

    const topLeft = array[0]
    const topCenter = array[1]
    const topRight = array[2]
    const middleLeft = array[3]
    const middleCenter = array[4]
    const middleRight = array[5]
    const bottomLeft = array[6]
    const bottomCenter = array[7]
    const bottomRight = array[8]

    if(topLeft===topCenter&&topCenter===topRight&&topLeft!==undefined){
        window.alert(`${topLeft} is the winner`);
        return;
    }if(middleLeft===middleCenter&&middleCenter===middleRight&&middleLeft!==undefined){
        window.alert(`congratulations player ${middleLeft}`);
        return
    }if(bottomLeft===bottomCenter&&bottomCenter===bottomRight&&bottomLeft!==undefined){window.alert(`you win ma dood playa ${bottomRight}`);
        return
    }if(topLeft=== middleLeft&& middleLeft=== bottomLeft && topLeft!==undefined){
        window.alert(`you da best player ${topLeft}`)
        return
    }if(topCenter===middleCenter&&middleCenter===bottomCenter&&topCenter!==undefined){
        window.alert(`playa ${bottomCenter}is da best!`)
        return
    }if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
      }
      if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
      }
      let boardFull=true;
      for (let i = 0; i <=8; i++){
          if (array[i]===undefined){
              boardFull=false
          }
      } if (boardFull=== true){
          window.alert("cat's game")
      }
}

