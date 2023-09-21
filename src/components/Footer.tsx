import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Footer = () => {
  return (
    // <ButtonGroup className="d-grid gap-2" aria-label="d-grid Basic example">
    //   <Button variant="secondary">Left</Button>
    //   <Button variant="secondary">Middle</Button>
    //   <Button variant="secondary">Right</Button>
    // </ButtonGroup>
    <div className="footer">
      <Stack className="justify-content-center" direction="horizontal" gap={3}>
        <div className="p-2">
          <Button>First item 1</Button>
        </div>
        <div className="p-2 ">
          <Button>First item 2</Button>
        </div>
        <div className="p-2">
          <Button>First item 3</Button>
        </div>
      </Stack>
    </div>
  );
};

export default Footer;
