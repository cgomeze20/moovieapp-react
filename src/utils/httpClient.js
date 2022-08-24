const API = 'https://api.themoviedb.org/3'

export function get(path){
    return fetch(API + path,{
        headers:{
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTkwN2RhZWQwYmRmYjlhODRiNDk2ODc3ODlkOGYzNyIsInN1YiI6IjVmMWRjOWM2MDdhODA4MDAzNTgxY2JhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mEApSVqoP5pzoW4xk-ieNXM6lfcAe7KiuE3B1Euy-zQ',
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      .then(result => result.json())
}