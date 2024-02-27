import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function SpinnerImp() {
  return (
    <>
      {/* <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Cargando...</span>
      </Button>{' '} */}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Cargando...
      </Button>
    </>
  );
}

export default SpinnerImp;