    import React from "react";

export default class LoginSignup extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        page: "login"
    }   
    
    Field(field) {
        field = field.split("_").join(" ")
        let uppercased = field[0].toUpperCase() + field.substring(1);
        return (
        <div className="w-full relative" key={field}>
            <input type="text" name={field} id={field} placeholder={uppercased} className="placeholder:text-transparent peer rounded-xl bg-primary w-full h-16 px-4"/>
            <label htmlFor={field} className="peer-placeholder-shown:text-base peer-placeholder-shown:top-[18px] transition-all peer-placeholder-shown:text-neutral-50 absolute text-sm text-gray left-4 top-0.5">{uppercased}</label>
        </div>
        )
    }

    render() {
        let redirect
        let fields
        if (this.state.page == "login") {
            fields = [this.Field("username"), this.Field("password")]            
            redirect = <p className="mt-7">Don't have an account? <a onClick={() => this.setState({page: "signup"})} href="#" className="underline text-accent">Sign Up</a></p>
        } else {    
            fields = [this.Field("username"), this.Field("password"), this.Field("re-enter_password")]
            redirect = <p className="mt-7">Already have an account? <a onClick={() => this.setState({page: "login"})} href="#" className="underline text-accent">Login</a></p>
        }

        return (
            <section className="mt-28 mx-auto bg-primary-2nd flex flex-col items-center max-w-[35rem] p-5 rounded-lg">
                <h1 className="font-habibi text-4xl mb-8">{this.state.page[0].toUpperCase() + this.state.page.substring(1)}</h1>
                <form method="post" className="gap-10 flex flex-col w-full justify-center items-center">
                    {fields}
                    <button type="submit" className="bg-secondary rounded-full h-12 w-44">{this.state.page[0].toUpperCase() + this.state.page.substring(1)}</button>
                </form>
                {redirect}
            </section>
        )
    }
}