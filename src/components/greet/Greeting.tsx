type GreetingProps = {
    name? : string
}

function Greeting(props : GreetingProps) : JSX.Element
{
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

export default Greeting;