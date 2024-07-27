import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HOST_WITH_PORT } from '../../consts';
import './ShowRequests.css';
import Filters from '../Filters/Filters';

const ShowRequests = () => {
    const [requests, setRequests] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);
    const [filters, setFilters] = useState({
        name: '',
        status: '',
        employeeName: '',
    });
    const navigate = useNavigate();

    const serializeFilters = (filters) => {
        return Object.keys(filters)
            .filter(key => filters[key] !== '')
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`)
            .join('&');
    };

    const fetchRequests = async () => {
        try {
            const queryString = serializeFilters(filters);
            const response = await axios.get(`${HOST_WITH_PORT}/api/requests?${queryString}`);
            setRequests(response.data);
            setResponseMessage({ type: 'success', text: 'Requests Fetched Successfully!' });
            setTimeout(() => setResponseMessage(null), 3000);
        } catch (error) {
            setResponseMessage({ type: 'error', text: 'Error Fetching Requests' });
            setTimeout(() => setResponseMessage(null), 3000);
            console.error('Error fetching requests', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const onApplyFilters = () => {
        fetchRequests();
    }

    const handleRowClick = (id) => {
        navigate(`/requests/${id}`);
    };

    return (
        <div className="requests-container">
            <h1>Show Requests</h1>
            <Filters filters={filters} onFilterChange={handleFilterChange} onApplyFilters={onApplyFilters} />
            <button onClick={fetchRequests} className="fetch-button">Fetch Requests</button>
            <table className="requests-table">
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Employee Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr
                            key={request.id}
                            onClick={() => handleRowClick(request.id)}
                            className="clickable-row"
                        >
                            <td>{request.id}</td>
                            <td>{request.name}</td>
                            <td>{request.type}</td>
                            <td>{request.description}</td>
                            <td>{request.amount}</td>
                            <td>{request.currency}</td>
                            <td>{request.employee_name}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {responseMessage && (
                <div className={`snackbar ${responseMessage.type} show`}>
                    {responseMessage.text}
                </div>
            )}
        </div>
    );
};

export default ShowRequests;
