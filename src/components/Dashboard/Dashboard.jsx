import { Link } from 'react-router-dom'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'

const Dashboard = () => {
  const data = [
    { date: '2024-09-01', count: 5 },
    { date: '2024-09-02', count: 1 },
    { date: '2024-09-03', count: 2 }
    // Add more data points here
  ]

  return (
    <div className='flex flex-col md:flex-row p-6'>
      {/* Left Side: Student Details */}
      <div className='md:w-1/3 p-4'>
        {/* User Profile Section */}
        <div className='flex flex-col items-center mb-6'>
          {/* Profile Picture */}
          <div className='w-24 h-24 mb-4'>
            <img
              src='https://yt3.googleusercontent.com/BpaBYEiGibr8uiNMCWytJ5BdKbPtpqTJAuA5Ida5rXAe8Zfvr8keZSPXYSqGasjGo7OunF2w=s160-c-k-c0x00ffffff-no-rj'
              alt='Profile'
              className='w-full h-full rounded-full'
            />
          </div>
          {/* Name, Profile Link, and College Name */}
          <div className='text-center'>
            <h2 className='text-xl font-bold'>Khushi Kalra</h2>
            <p className='text-gray-600'>
              Rajiv Gandhi Institute of Petroleum Technology, Jais
            </p>
          </div>
        </div>

        {/* Achievements Heading */}
        <div>
          {/* <h2 className='text-lg font-semibold mb-4'>Achievements</h2> */}
          {/* Circles for Achievements */}
          {/* Uncomment and use badges if needed */}
          {/* <div className="flex flex-wrap justify-around mb-4">
            {[5, 4, 3, 2, 1].map((id) => (
              <div key={id} className="w-12 h-12">
                <img
                  src={`https://gssoc.girlscript.tech/badges/${id}.png?imwidth=256`}
                  alt={`badge ${id}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div> */}
        </div>

        {/* Sidebar Links */}
        <div className='flex flex-col space-y-4'>
          <Link to='/jobs' className='text-blue-500 hover:underline'>
            My Jobs
          </Link>
          <Link to='/learn' className='text-blue-500 hover:underline'>
            Skill Assessment
          </Link>
          <p className='text-sm text-gray-600'>
            Assess your skills and improve them with our tailored assessments.
          </p>
        </div>
      </div>

      {/* Right Side: Hours Active */}
      <div className='md:w-2/3 p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Progress Card */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Progress</h2>
            <div className='flex justify-center items-center'>
              <div className='relative w-24 h-24 rounded-full border-4 border-blue-500 flex justify-center items-center'>
                <span className='text-lg font-semibold'>15/50</span>
              </div>
            </div>
          </div>

          {/* Badges/Certificates Card */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-semibold mb-4'>
              Badges & Certificates
            </h2>
            <div className='flex flex-wrap space-x-4'>
              {/* Add badge/certificate icons or images here */}
              <img
                src='https://gssoc.girlscript.tech/badges/1.png?imwidth=256'
                alt='badge 1'
                className='w-12 h-12'
              />
              <img
                src='https://gssoc.girlscript.tech/badges/2.png?imwidth=256'
                alt='badge 2'
                className='w-12 h-12'
              />
              {/* Add more badges/certificates as needed */}
            </div>
          </div>
        </div>

        {/* Heatmap Card - Taking the Whole Row */}
        <div className='bg-white rounded-lg shadow-lg p-6 mt-6'>
          <h2 className='text-2xl font-semibold mb-4'>Activity Heatmap</h2>
          <div className='w-full'>
            <CalendarHeatmap
              startDate={new Date('2024-01-01')}
              endDate={new Date('2024-12-31')}
              values={data.map(entry => ({
                date: new Date(entry.date),
                count: entry.count
              }))}
              showWeekdayLabels
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
