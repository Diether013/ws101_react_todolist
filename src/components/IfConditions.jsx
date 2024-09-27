function MissedHello() {
    return <h3>Hello</h3>
}

function MadeHello() {
    return <h3>Hello</h3>
}

function Hello(props) {
    const isHello = props.isHello;

    // if (isHello) {
    //     return <MadeHello />
    //}
    // return <MissHello/>
    return (
        <>
            {isHello ? <MadeHello/> : <MissedHello/>}
        </>
    )
}

export default Hello;