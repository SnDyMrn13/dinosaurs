
import heroPhoto from './hero-photo.js'
import './hero.css'



function Hero() {
    const [src, alt] = heroPhoto("photo-1786536151133-752e080997c4" , 300, auto, "Big mouth T-rex")

    return (
        <div className="hero">
            <img src={src}  alt={alt} />
        </div>
    )
}


export default Hero