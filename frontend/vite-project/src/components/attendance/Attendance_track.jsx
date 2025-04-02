import React, { useState, useContext } from 'react';
import { userLoginContext } from '../../context/usercontext';
import './Attendance_track.css'; 

function Attendance_track() {
    const [formData, setFormData] = useState({ date: '', month: '' });
    const [dailyAttendance, setDailyAttendance] = useState(null);
    const [error, setError] = useState(null);
    const { currentUser } = useContext(userLoginContext); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function handleDailyAttendance() {
        const date = formData.date;
        if (!date) {
            setError('Please select a valid date.');
            return;
        }

        try {
            const response = await fetch(`https://student-hub-v3qo.vercel.app/attendance-api/attendance/${currentUser.studentID}/${date}`);
            const data = await response.json();
            if (response.ok) {
                setDailyAttendance(data.data);
                setError(null);
            } else {
                setError(data.message || 'Failed to fetch daily attendance.');
                setDailyAttendance(null);
            }
        } catch (error) {
            console.error('Error fetching daily attendance:', error);
            setError('An error occurred while fetching daily attendance.');
        }
    }

    return (
        <div>
            <h2 className='text-secondary p-4 text-center'>Welcome to the Attendance Portal</h2>

            <h3 className='text-success'>Fetch Daily Attendance</h3>
            <div className="button-card card-light-pink p-2">
                <label className='text-info display-6'>
                    Select a date
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </label>
                <div className='btn btn-custom text-center' onClick={handleDailyAttendance}>Get Daily Attendance</div>
            </div>

            {dailyAttendance && (
                <div className="attendance-result">
                    <h3>Daily Attendance:</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {}
                            {dailyAttendance.subjects && Object.entries(dailyAttendance.subjects).map(([subject, attendance]) => (
                                <tr key={subject}>
                                    <td>{subject}</td>
                                    <td>{attendance === 1 ? 'Present' : 'Absent'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {error && (
                <div className="error-message">
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default Attendance_track;
