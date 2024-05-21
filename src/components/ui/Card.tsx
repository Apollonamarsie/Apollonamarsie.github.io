import Button from 'react-bootstrap/Button';
import CardBootstrap from 'react-bootstrap/Card';

interface CardProps {
  title: string;
  text: string;
  onClick?: () => void;
}

function Card(props : CardProps) {
  return (
    <CardBootstrap style={{ width: '18rem', margin: "2rem" }}>
      <CardBootstrap.Body>
        <CardBootstrap.Title>{props.title}</CardBootstrap.Title>
        <CardBootstrap.Text>
          {props.text}
        </CardBootstrap.Text>
        <Button onClick={props.onClick} variant="primary">Reset</Button>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}

export default Card;