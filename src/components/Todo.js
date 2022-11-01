import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { addToDo, removeToDo, deleteToDo } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineNoteAdd } from "react-icons/md";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todolistsReducers.list);

  return (
    <>

      <Form.Group className="mt-4 sticky-top   ">
     
        <Container className="mt-4 p-5 col-5 rounded d-flex bg-secondary ">
          
          <Form.Control
            type="text"
            placeholder="Enter your todo work"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <Button
            variant="warning"
            className="mx-3"
            onClick={() => dispatch(addToDo(inputData), setInputData(""))}
          >
            <MdOutlineNoteAdd
              style={{
                height: "40px",
                width: " 21px",
                cursor: "pointer"
              }}
            />
          </Button>
        </Container>
      </Form.Group>
      <Container className="mt-3 col-5 align-middle ">
        {lists.map((elem, index) => {
          return (
            <ListGroup className="mt-1  " key={index}>
              <ListGroup.Item variant="dark">
                {elem.data}

                <MdOutlineDeleteSweep
                  style={{
                    marginLeft: "20px",
                    height: "40px",
                    width: " 21px",
                    cursor: "pointer"
                  }}
                  onClick={() => dispatch(deleteToDo(elem.id))}
                />
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </Container>
      <Container className="mt-3 col-5 text-center">
        <Button onClick={() => dispatch(removeToDo())}>remove all</Button>
      </Container>
    </>
  );
};

export default Todo;
