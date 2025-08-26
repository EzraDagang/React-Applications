function ClickButton() {
    
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else{
            console.log(`${name} stop clicking me.`);            
        }
    }

    const handleClick2 = (name) => console.log(`You are ${name}.`);

    const handleClick3 = e => console.log(e.target.textContent="Sup");
    
    const handleClick4 = e => console.dir(e.target);

    return (
        <button onClick={(e) => handleClick4(e)}>Click Me ^_^</button>
        // <button onDoubleClick={(e) => handleClick3(e)}>Click Me ^_^</button>
    )
}

export default ClickButton;