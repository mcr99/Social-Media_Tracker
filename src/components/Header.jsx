function Header(){
    return(
        <header className="my-5">
            <div>
                <h1 className="font-bold text-xl">Social Media Dashboard</h1>
                <p className="text-[#63687e] font-bold">Total Followers: 23,004</p>
            </div>
            <div className="flex justify-between">
                <p className="text-[#63687e] font-bold">Dark Mode</p>
                <div className="rounded-2xl w-10 flex items-center p-1 bg-[#aeb3cb]">
                    <label >
                        <input type="checkbox" className="sr-only peer"/>
                        <div className="w-4 rounded-full bg-white h-4 peer-checked:translate-x-4 duration-500"></div>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default Header;