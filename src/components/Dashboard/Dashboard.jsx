import { Link } from 'react-router-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    { date: '2024-09-01', count: 5 },
    { date: '2024-09-02', count: 1 },
    { date: '2024-09-03', count: 2 },
    // Add more data points here
  ];
  return (
    <div className='d-container'>
      {/* Left Side: Student Details */}
      <div className='d-left-side'>
        {/* User Profile Section */}
        <div className='flex flex-col items-center mb-6'>
          {/* Profile Picture */}
          <div className='profile-picture'>
            <img
              src='https://yt3.googleusercontent.com/BpaBYEiGibr8uiNMCWytJ5BdKbPtpqTJAuA5Ida5rXAe8Zfvr8keZSPXYSqGasjGo7OunF2w=s160-c-k-c0x00ffffff-no-rj'
              alt='Profile'
              className='profile-picture'
            />
          </div>
          {/* Name, Profile Link, and College Name */}
          <div className='profile-info'>
            <h2 className='profile-name'>Khushi Kalra</h2>
            <p className='college-name'>
              Rajiv Gandhi Institute of Petroleum Technology, Jais
            </p>
          </div>
        </div>

        {/* Achievements Heading */}
        <div>
          <h2 className='achievements-heading'>Achievements</h2>
          {/* Circles for Achievements */}
          {/* Uncomment and use badges if needed */}
          {/* <div className="flex flex-wrap justify-around mb-4">
            {[5, 4, 3, 2, 1].map((id) => (
              <div key={id} className="d-badge">
                <img
                  src={`https://gssoc.girlscript.tech/badges/${id}.png?imwidth=256`}
                  alt={`badge ${id}`}
                />
              </div>
            ))}
          </div> */}
        </div>

        {/* Sidebar */}
        <div className='d-sidebar'>
          <Link to='/jobs' className='d-sidebar-link'>
            My Jobs
          </Link>
          <Link to='/learn' className='d-sidebar-link'>
            Skill Assessment
          </Link>
          <p className='d-sidebar-description'>
            Assess your skills and improve them with our tailored assessments.
          </p>
        </div>
      </div>

      {/* Right Side: Hours Active */}
      <div className="d-right-side">
      <div className="d-hours-active">
        <h2 className="d-hours-heading">Hours Active</h2>
        <div className="d-grid-container">
          {/* Progress Circle */}
          <div className="d-progress-box">
            <div className="d-progress-circle">
              <span className="d-progress-text">15/50</span>
            </div>
          </div>

          {/* Heat Map */}
          <div className="d-heatmap-box">
            <CalendarHeatmap
              startDate={new Date('2024-09-01')}
              endDate={new Date('2024-09-30')}
              values={data.map(entry => ({
                date: new Date(entry.date),
                count: entry.count,
              }))}
              showWeekdayLabels
            />
          </div>
        </div>

        <p className="d-hours-detail">Day: <span className="hours-value">3 hours</span></p>
        <p className="d-hours-detail">Week: <span className="hours-value">15 hours</span></p>
      </div>
    </div>


    </div>
  )
}

export default Dashboard
