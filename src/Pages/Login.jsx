const Login =() =>
{
    const styl= "h-16 w-full pl-5 border border-[#c9c9c9] text-[#5c5c5c] text-lg "
    return(
        <div className="w-full h-4/5 bg-[#fce3fe] py-24 px-6">
            <div className="lg:w-[580px] h-[600px] bg-white lg:m-auto py-10 lg:px-16 px-8">
                <h1 className="font-bold text-2xl">Sign Up</h1>
                <div className="flex flex-col gap-4 mt-7 ">
                    <input type="text" placeholder="Your Name" className={styl}></input>
                    <input type="email" placeholder="Mail" className={styl}></input>
                    <input type="password" placeholder="Password" className={styl}></input>
                </div>
                <div className="flex justify-center"><button className="lg:w-[450px] h-16  text-white bg-red-400 mt-7 text-2xl font-semibold px-5 hover:bg-red-500">Continue</button></div>
                <p className="mt-5 text-[#5c5c5c] text-lg font-semibold">Already have an account? <span className="text-red-400 font-bold hover:underline cursor-pointer">Login Here</span></p>
                <div className="flex items-center mt-6 gap-4  font-semibold text-[#5c5c5c]">
                    <input type="checkbox" name='' id=""/>
                    <p>By Continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default Login