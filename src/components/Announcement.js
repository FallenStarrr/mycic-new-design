import React, { useEffect, useState } from "react";
import "./main.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

const Announcement = () => {
  let tea = [
    {
      label: "level 1 parent 1",
      id: "1",
      children: [
        { label: " child 1 level 2", id: "2" },
        { label: "child 2 level 2", id: "3" },
        {
          label: "child 3 level  3",
          id: "4",
          children: [{ label: "child 1 level 5, id: '4'," }],
        },
      ],
    },

    {
      label: "level 1 parent 2",
      id: "6",
      children: [
        { label: " child 1 level 2", id: "7" },
        { label: "child 2 level 2", id: "8" },
        {
          label: "child 3 level  3",
          id: "9",
          children: [{ label: "child 1 level 4", id: "10" }],
        },
      ],
    },
  ];

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [users, setUsers] = useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        : []
    );
  };

  const resursive = (tree) => {
    let childs;
    let nodes = tree.map((node) => {
      <TreeItem label={node.label} nodeId={node.id}>
        {childs}
      </TreeItem>;

      if (!node.c) {
        return node.label;
      }
      childs = resursive(node.children);
    });
    return childs;
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getFullBranch")
      .then((res) => res.json())
      .then((data) => setUsers([...data.original.result]));
  }, []);

  console.log(users);

  return (
    <div className="container">
      <h2 className="mt-3">Анонсы обучения </h2>
      <form action="">
        <div>
          <label>Тема обучения</label>{" "}
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail132"
            aria-describedby="emailHelp"
            placeholder="Тема/"
          />
        </div>
        <div>
          <label>Cпикер</label>

          <Box
            sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
          >
            <Box sx={{ mb: 1 }}>
              <Button onClick={handleExpandClick}>
                {expanded.length === 0 ? "Expand all" : "Collapse all"}
              </Button>
              <Button onClick={handleSelectClick}>
                {selected.length === 0 ? "Select all" : "Unselect all"}
              </Button>
            </Box>
            <TreeView
              aria-label="controlled"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              expanded={expanded}
              selected={selected}
              onNodeToggle={handleToggle}
              onNodeSelect={handleSelect}
              multiSelect
            >
              {users.map((i) => (
                <TreeItem nodeId={i.id} label={i.label}>
                  {i.children.map((level1) => (
                    <TreeItem nodeId={level1.id} label={level1.label}>
                      {level1.children.map((level2) => (
                        <TreeItem label={level2.label} nodeId={level2.id}>
                          {level2.children
                            ? level2.children.map((i) => (
                                <TreeItem label={i.label} nodeId={i.id} />
                              ))
                            : ""}
                        </TreeItem>
                      ))}
                    </TreeItem>
                  ))}
                </TreeItem>
              ))}
            </TreeView>
          </Box>
        </div>
        <div>
          <label>Описание</label>{" "}
          <textarea
            className="form-control"
            id="exampleFormControlTextarea22"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label>Дата и время </label>{" "}
          <input
            type="date"
            className="form-control"
            id="exampleInputEmail101"
            aria-describedby="emailHelp"
            placeholder="Описание/"
          />
        </div>
        <div>
          <label>
            Формат обучения{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail134"
              aria-describedby="emailHelp"
              placeholder="Формат"
            />{" "}
          </label>{" "}
        </div>
        <div>
          <label>
            Место обучения очно{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail124"
              aria-describedby="emailHelp"
              placeholder="Место где очное обучение"
            />
          </label>
        </div>
        <div>
          <label>
            Место обучения онлайн
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail12"
              aria-describedby="emailHelp"
              placeholder="Место где онлайн обучение"
            />
          </label>{" "}
        </div>
        <div>
          <label>
            Тип обучения{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Тип"
            />
          </label>{" "}
        </div>
      </form>

      <div className="d-flex mt-3">
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
        <button type="submit" className="btn btn-primary">
          Изменить
        </button>
      </div>
      <hr />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Тема обучения </th>
            <th scope="col">Cпикер </th>
            <th scope="col">Описание </th>
            <th scope="col">Дата и время </th>
            <th scope="col">Формат обучения </th>
            <th scope="col">Место обучения очно </th>
            <th scope="col">Место обучения онлайн </th>
            <th scope="col">Тип обучения </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Announcement;
