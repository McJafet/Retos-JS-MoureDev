const whoIsTheRoot = [{id: 1, parentId: 2}, {id: 2, parentId: null}]; //  == {id: 2, parentId: null}
const whoIsTheRoot1 = [{id: 3, parentId: 7}, {id: 5, parentId: 7}, {id: 7, parentId: null}]; // == {id: 7, parentId: null}

whoIsTheRoot.forEach((e, index) => {
    if (e.parentId === null) {
        let i = index;
        console.log(whoIsTheRoot[i])
    }
    
})

const buscarNull = (array) => {
    for (let obj of array) {
        if (obj.parentId === null) return obj;
    }
}
console.log(buscarNull(whoIsTheRoot1))



const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]
// for (let i = 0; i < matrix.length; i++) { // {1}
//   for (let j = 0; j < matrix[i].length; j++) { // {2}
//     let matriz = []
//     if (matrix[i][j] === 'JavaScript') {
//       console.log( matriz = [i, j])
//     }
//     else {console.log(matriz = [-1, -1])}
//   }
// }

function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++) { 
    for (let j = 0; j < matrix[i].length; j++) { 
      let matriz = []
      if (matrix[i][j] === 'JavaScript') {
        return matriz = [i, j]
      }
    }
  }
  return matriz = [-1, -1]
}

let words = [2, 1, 3, 4, 5, 6, 7, 8, 9]

function minAndMaxWord(words) {
  let min = words[0];
  let max = words[0];
  let indices = []
  for (let i = 0; i < words.length; i++) {
    if (words[i] < min) min = words[i]
    else if(words[i] > max) max = words[i]
  }
  indices = [words.indexOf(min) , words.indexOf(max)]
  console.log(min, max);
  return indices
}


// function createObject(name, subs) {
//   const obj = {
//     name: name,
//     subscribers: subs,
//     hash: name.length*subs,
//     getStatus: function() {
//       return `El canal de ${name} tiene ${subs} suscriptores.`
//       }
//     }
//     return obj
//   }

// const spiderman = {
//     name: 'Spidey',
//     universe: 42,
//     powers: ['web', 'invisibility', 'spider-sense']
//   }
//   console.log(typeof())
// const entries = Object.entries(spiderman)

// entries.forEach(entry => {
//   const property = entry[0]
//   const value = entry[1]

//   console.log(`${property}: ${value}`)
// })

// const oceano = {{ deep: { treasure: "oro" }}, "deep", "treasure"}

// const entries = Object.entries(spiderman)

// const entries = Object.entries(spiderman)

entries.forEach(entry => {
  console.log(entry)
})


mapeoo = document.getElementById('mapeo');
mapeoo.innerHTML = minAndMaxWord(words);