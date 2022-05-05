import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        let backdrop_path="/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
        return (
            <div>
                <div className="card banner-card">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..." />
                    
                        <h5 className="card-title banner-title"><strong>BLACK WIDOW</strong></h5>
                        <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    
                </div>
            </div>
        )
    }
}

export default Banner