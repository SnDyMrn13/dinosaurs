
import heroPhoto from './hero-photo.js'
import './hero.css'



function Hero() {
    const [src, alt] = heroPhoto({ 
        photo: "photo-1786536151133-752e080997c4" ,
        width: 300,
        height: 250,
        description: "Big mouth T-rex",
    })

    return (
        <div className="hero">
            <img src={src}  alt={alt} />
        </div>
    )
}


export default Hero