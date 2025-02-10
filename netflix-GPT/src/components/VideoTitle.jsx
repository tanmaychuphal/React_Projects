const VideoTitle = ({title,overview})=>{
    return(
        <div className="w-screen aspect-video pt-[9%] px-15 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold"> {title}  </h1>
            <p className="w-1/3 py-4 text-lg">  {overview} </p>
            <div className="">
                <button className="w-35 h-10 rounded bg-white text-black text-xl hover:opacity-70">
                PLAY
                </button>
                <button className="w-35 h-10 mx-3 rounded bg-gray-500 text-white text-xl opacity-80 ">Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
