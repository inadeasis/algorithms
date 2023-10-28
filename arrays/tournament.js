const tournamentWinner = (competitions, results) => {
  const scoreBoard = {}
  for (let i = 0; i < competitions.length; i++) {
    const [winnerTeamIndex, loserTeamIndex] = 
      results[i] === 1 ? [0, 1] : [1, 0]
    const winnerTeam = competitions[i][winnerTeamIndex]
    const loserTeam = competitions[i][loserTeamIndex]
    
    if (scoreBoard[winnerTeam]) {
      scoreBoard[winnerTeam] += 3
    } else {
      scoreBoard[winnerTeam] = 3
    }

    if (!scoreBoard[loserTeam]) {
      scoreBoard[loserTeam] = 0
    } 
  }

  const valArr = Object.values(scoreBoard)
  const maxScore = Math.max(...valArr)

  const objArr = Object.entries(scoreBoard)
  return objArr.find(ele => ele[1] === maxScore)[0]
  
}

// tests
console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],[0, 0, 1]))

  console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ],[0, 1, 1]))

  console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
  ],[0, 1, 1, 1, 0, 1]
))