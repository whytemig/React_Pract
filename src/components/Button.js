const Button = ({color, text}) => {
const onClick = () => console.log('Clicked')

  return <button 
  onClick={onClick}
  className="btn"
  style={{backgroundColor: color}}
  >{text}</button>;
};

export default Button;
