const Avatar = ({ src, alt, name } : {src?: string, alt?: string, name?: string}) => {
    return (
    <>
    <img className="w-10 h-10 rounded-full" src={src} alt={alt}></img>  
    <p className='text-cyan-900'>{name}</p>
    </>)
}

export default Avatar;