function FollowersSection (props) {
    return(
        <article className="bg-[#f0f2fa] flex flex-col items-center rounded-lg overflow-hidden">
            <div className={`bg-[${props.accentColor}] w-full py-0.5`}></div> {/*Falta linea*/ }
            <div className="flex m-4 gap-2">
                <img src={props.icon} alt={`${props.platform} icon`} loading="lazy" />
                <p className="font-bold text-sm text-[#63687e]">{props.username}</p>
            </div>
            <p className="font-bold text-6xl m-2">{props.count}</p>
            <p className="text-[#63687e] tracking-widest">{props.label.toUpperCase()}</p>
            <div className="flex justify-center items-center mx-2 my-5 gap-2">
                <img src={props.impact} alt={props.alt}  className="h-2"/>
                <p className={props.color}><span>{props.value}</span> Today</p>
            </div>
        </article>
    )
}

export default FollowersSection;