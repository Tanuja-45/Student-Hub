const exp = require('express');
const attendanceApp = exp.Router();
const expressAsyncHandler = require('express-async-handler');



// Fetch daily attendance for a specific date
attendanceApp.get('/attendance/:roll_no/:date', expressAsyncHandler(async (req, res) => {
    const attendanceCollection = req.app.get('attendance_excelCollection');
    const { date, roll_no } = req.params;

    // Convert from YYYY-MM-DD to DD-MM-YYYY format
    const parts = date.split('-');
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // Reformat date to DD-MM-YYYY

    console.log("Requested date (formatted):", formattedDate);  // Log the formatted date

    try {
        const attendanceData = await attendanceCollection.findOne({
            "days.date": formattedDate, 
            "days.attendance.roll_no": roll_no 
        });

        if (attendanceData) {
            const dailyAttendance = attendanceData.days.find(day => day.date === formattedDate);
            if (dailyAttendance) {
                const userAttendance = dailyAttendance.attendance.find(a => a.roll_no === roll_no);
                if (userAttendance) {
                    res.send({ message: "Attendance for the day", data: userAttendance });
                } else {
                    res.status(404).send({ message: `Attendance not found for roll number: ${roll_no} on date: ${formattedDate}` });
                }
            } else {
                res.status(404).send({ message: `No attendance data for the date: ${formattedDate}` });
            }
        } else {
            res.status(404).send({ message: `Attendance not found for the date: ${formattedDate}` });
        }
    } catch (error) {
        res.status(500).send({ message: "Error fetching daily attendance", error: error.message });
    }
}));




module.exports = attendanceApp;
