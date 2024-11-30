import { User } from "./User"
import { UserClass } from "./UserClass"

export const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>Hey this is about page</h2>

            <User name={"kartikey (function)"} />


            <UserClass name={"Kartikey (class)"} location={"Bhopal class"} />
        </div>
    )
}