function Hero({ name, image }) {
  return (
    <div>
        <h2>{name}</h2>
        <div><img src={image} alt="superhero-img" /></div>
    </div>
  )
}

export default Hero;