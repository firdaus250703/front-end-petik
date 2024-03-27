import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <div>
            <div className="container">
                <section className="hero">
                    <div className="hero-left">
                        <h2 className="hero-title">Title</h2>
                        <h3 className="hero-genre">Genre : </h3>
                        <p className="hero-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Hic ipsum placeat ut atque soluta ratione voluptates eum!
                            Ea, aliquam debitis.
                        </p>
                        <p className='hero-button'>Watch</p>
                    </div>
                    <div className="hero-right">
                        <img src="https://picsum.photos/id/237/200/300" alt="hero-img" className='hero-image'/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero;