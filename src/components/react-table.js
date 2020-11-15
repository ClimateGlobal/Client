import React from "react";
import ReactTable from "react-table";
import firebase from "firebase";

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "",
          email: "",
          reason: "",
          message: "",
        },
      ],
    };
  }

  getData() {
    const data = [];
    const node = this.props.node;
    return firebase
      .database()
      .ref(node)
      .on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const allData = childSnapshot.val();
          const completeData = {
            name: allData.name,
            email: allData.email,
            reason: allData.reason,
            message: allData.message,
          };
          data.push(completeData);
        });
        this.setState({ data });
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const col = [
      {
        Header: "Name",
        accessor: "name",
        width: 150,
        maxWidth: 150,
      },
      {
        Header: "Email",
        accessor: "email",
        width: 150,
        maxWidth: 150,
      },
      {
        Header: "Reason",
        accessor: "reason",
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Message",
        accessor: "message",
        width: 400,
        maxWidth: 400,
      },
    ];
    return (
      <ReactTable
        columns={col}
        data={this.state.data}
        defaultPageSize={5}
      ></ReactTable>
    );
  }
}
export default DataTable;
