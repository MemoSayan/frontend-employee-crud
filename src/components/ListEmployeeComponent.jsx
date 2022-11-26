import React, {Component} from 'react';
import EmployeeService from "../EmployeeService/EmployeeService";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],

        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((rest) =>{
                this.setState({employees: rest.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees</h2>
                <div className="row">
                    <table className="table table-striped table-bordered ">


                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>JobTitle</th>
                            <th>Phone</th>
                            <th>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.jobTitle}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.imageUrl}</td>

                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
