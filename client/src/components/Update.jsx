import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
//   const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setItem(localStorage.getItem("Item"));
    setQuantity(localStorage.getItem("Quantity"));
    // setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateData = () => {
    axios
      .put(`http://localhost:9000/update/:id`, {
        item,
        quantity,
        
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Item</label>
          <input
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Quantity</label>
          <input
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
