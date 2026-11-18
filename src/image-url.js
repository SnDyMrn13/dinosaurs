
const imageUrl = ({ photo, width, height }) => 
    "https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&auto=format&fit=crop&q=60"

export default imageUrl