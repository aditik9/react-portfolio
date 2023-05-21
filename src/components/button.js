export default function ExpButton() {
    const handleClick = event => {
      event.currentTarget.style.backgroundColor = 'salmon';
      event.currentTarget.style.color = 'white';
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }
  