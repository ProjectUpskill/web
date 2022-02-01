import { Form } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formArticleName">
        <Form.Label className="text-muted">
          Search within our articles:
        </Form.Label>

        <Form.Control
          type="search"
          placeholder="What would you like to learn today?"
          onChange={() => {
            return false;
          }}
        />
      </Form.Group>
    </Form>
  );
}
