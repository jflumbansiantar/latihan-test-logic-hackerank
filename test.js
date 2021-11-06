function climb(ranked, player) {
    let score = ranked.map(Number)
    let cRank = player.map(Number)
    let temp = score[0]
    let value = [temp]
    
    for (let i = 0; i < score.length; i++) {
        if(score[i] != temp) {
            temp = score[i]
            value.push(temp)
        }
    }

    let j = value.length - 1;
    for ( let i = 0; i < cRank.length; i++ ) {
        while ( value[j] <= cRank[i] ) {
            j--
        }
        console.log(j+2)
    }
}

let ranked = [100, 100, 50, 40, 40, 20, 10]
let player = [5, 25, 50, 120]

climb(ranked, player)