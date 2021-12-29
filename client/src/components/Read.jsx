import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9000/getitem`).then((response) => {
          console.log(response.data);
          setAPIData(response.data);
        });
    }, []);

  const setData = (data) => {
    let { id, item, quantity } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Item", item);
    localStorage.setItem("Quantity", quantity);
    // localStorage.setItem('Checkbox Value', checkbox)
  };

  const getData = () => {
    axios.get(`http://localhost:9000/getitem`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:9000/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.item}</Table.Cell>
                <Table.Cell>{data.quantity}</Table.Cell>
                {/* <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell> */}
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
