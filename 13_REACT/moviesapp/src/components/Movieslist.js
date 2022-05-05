import React, { Component } from 'react'

import { movies } from '../Moviesdata'
export class Movieslist extends Component {
  constructor() {
    super()
    this.state = {
      hover: " ",
      pArr : [1]
    }
  }
  render() {

    let moviesArr = movies.results
    console.log(moviesArr)
    return (
      <React.Fragment>
        <div>
          <h3><strong>Trending</strong></h3>

        </div>
        <div className='movies-list'>
          {
            moviesArr.map((moviesElem) => (
              <div className="card movie-card" onMouseEnter={() => this.setState({ hover: moviesElem.id })} onMouseLeave={() => this.setState({ hover: " " })}>
                <img src={`https://image.tmdb.org/t/p/original${moviesElem.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />

                <h5 className="card-title movie-title">{moviesElem.title}</h5>



                <div className='button-wrapper'>
                  {
                    this.state.hover == moviesElem.id &&
                    <a href="#" class="btn btn-primary movies-button centre-text">Add to Favourites</a>
                  }


                </div>



              </div>

            ))
          }

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              {
                this.state.pArr.map((value)=>(
                  <li class="page-item"><a class="page-link" href="#">{value}</a></li>
                ))
              }
              
            
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>

      </React.Fragment>

    )
  }
}

export default Movieslist