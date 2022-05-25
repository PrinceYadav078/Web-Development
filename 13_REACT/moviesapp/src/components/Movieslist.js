import React, { Component } from 'react'

// import { movies } from '../Moviesdata'
import axios from 'axios'
export class Movieslist extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      hover: " ",
      pArr: [1],
      movies:[],
      currpage :1,
      favourites :[],
    }
  }
  async componentDidMount() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=87278017aef2c8a20f252457882adb59&language=en-US&page=1`)
    let moviesData = res.data
    console.log(moviesData)

    this.setState({
      movies:[...moviesData.results]
    })
    console.log('mounting done by cdn link')
  }
  changeMovies= async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=87278017aef2c8a20f252457882adb59&language=en-US&page=${this.state.currpage}`)
    let moviesData = res.data
    console.log(moviesData)

    this.setState({
      movies:[...moviesData.results]
    })
  }

  habdlePrevious=()=>{
    if(this.state.currpage!=1){
      this.setState({
        currpage: this.state.currpage-1
      }, this.changeMovies)
    }
  }

  handlePageClick=(value)=>{
    if(value!=this.state.currpage){
      this.setState({
        currpage:value
      },this.changeMovies)
    }
  }

  handleNext=()=>{
    let temparr=[]

    for(let i=1;i<=this.state.pArr.length+1;i++){
      temparr.push(i)
    }

    this.setState({
      pArr:[...temparr],
      currpage:this.state.currpage + 1

    },this.changeMovies)
    
  }

  handleFavourites=(movieObj)=>{
    let oldData=JSON.parse(localStorage.getItem('movies-app') || '[]')

    if(this.state.favourites.includes(movieObj.id)){
      oldData=oldData.filter((movie)=> movie.id != movieObj.id)

    }else{
      oldData.push(movieObj)
    }
    localStorage.setItem('movies-app', JSON.stringify(oldData))
    this.handleFavouritesState()
  }

  handleFavouritesState=()=>{
    let oldData=JSON.parse(localStorage.getItem('movies-app')||'[]')
    let temp =oldData.map((movie)=>movie.id)
    this.setState({
      favourites : [...temp]
    })
  }

  render() {
    console.log('render')
    // let moviesArr = movies.results
    // console.log(moviesArr)
    return (
      <React.Fragment>
        <div>
          <h3><strong>Trending</strong></h3>

        </div>
        <div className='movies-list'>
          {
            this.state.movies.map((moviesElem) => (
              <div className="card movie-card" onMouseEnter={() => this.setState({ hover: moviesElem.id })} onMouseLeave={() => this.setState({ hover: " " })}>
                <img src={`https://image.tmdb.org/t/p/original${moviesElem.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />

                <h5 className="card-title movie-title">{moviesElem.title}</h5>



                <div className='button-wrapper'>
                  {
                    this.state.hover == moviesElem.id &&
                    <a  class="btn btn-primary movies-button centre-text"
                    onClick={()=> this.handleFavourites(moviesElem)}
                    >
                      
                      {this.state.favourites.includes(moviesElem.id)?"Remove from Favourites" : "Add to Favourites"}
                      </a>
                  }


                </div>



              </div>

            ))
          }

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a class="page-link" onClick={this.habdlePrevious}>Previous</a></li>
              {
                this.state.pArr.map((value) => (
                  <li className="page-item"><a class="page-link" onClick={()=>this.handlePageClick(value)}>{value}</a></li>
                ))
              }


              <li className="page-item"><a class="page-link" onClick={this.handleNext}>Next</a></li>
            </ul>
          </nav>
        </div>

      </React.Fragment>

    )
  }
}

export default Movieslist