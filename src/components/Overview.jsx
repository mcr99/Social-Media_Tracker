function Overview (props) {
    return(
        <article className="bg-[#f0f2fa] p-5 rounded-lg flex flex-col gap-5">
            <div className="flex justify-between">
                <p className="text-[#63687e] font-bold">{props.metric}</p>
                <img src={props.icon} alt={`${props.platform} icon`} />
            </div>
            <div className="flex justify-between">
                <p className="text-4xl font-bold">{props.value}</p>
                <div className="flex items-center gap-2">
                    <img src={props.impact}  alt={props.alt}  className="h-2"/>
                    <p className={props.color}>{`${props.percentage}%`}</p>
                </div>
            </div>
        </article>
    )
} 

export default Overview;