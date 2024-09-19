import { Link } from 'react-router-dom'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import ReactApexChart from 'react-apexcharts'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
  const data = [
    { date: '2024-08-15', count: 3 },
    { date: '2024-08-17', count: 2 },
    { date: '2024-08-19', count: 5 },
    { date: '2024-08-22', count: 4 },
    { date: '2024-08-25', count: 1 },
    { date: '2024-08-28', count: 3 },
    { date: '2024-09-01', count: 5 },
    { date: '2024-09-03', count: 2 },
    { date: '2024-09-05', count: 6 },
    { date: '2024-09-07', count: 3 },
    { date: '2024-09-09', count: 4 },
    { date: '2024-09-11', count: 7 },
    { date: '2024-09-13', count: 1 },
    { date: '2024-09-15', count: 2 },
    { date: '2024-09-16', count: 3 },
    { date: '2024-09-18', count: 5 },
    { date: '2024-09-20', count: 6 },
    { date: '2024-09-22', count: 4 },
    { date: '2024-09-24', count: 3 },
    { date: '2024-09-26', count: 2 }
  ]

  // Bar graph options and data
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false
      }
    },
    xaxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    },
    title: {
      text: 'Interaction Time',
      align: 'center'
    }
  }

  const barChartData = [
    {
      name: 'VR LABS',
      data: [10, 15, 8, 12, 5, 9, 7]
    }
  ]

  // Pie chart options and data
  const pieChartOptions = {
    chart: {
      type: 'pie'
    },
    labels: ['Completed Tasks', 'Pending Tasks', 'In Progress'],
    title: {
      text: 'Task Distribution',
      align: 'center'
    }
  }

  const pieChartData = [50, 30, 20]

  // Donut chart options and data for facial expressions
  const donutChartOptions = {
    chart: {
      type: 'donut'
    },
    labels: ['Happy', 'Sad', 'Neutral', 'Surprised', 'Angry'],
    title: {
      text: 'Facial Expressions',
      align: 'center'
    }
  }

  const donutChartData = [35, 20, 25, 10, 10]

  // Line chart options and data for improvement levels
  const lineChartOptions = {
    chart: {
      type: 'line',
      height: 350
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
    },
    title: {
      text: 'Improvement Levels',
      align: 'center'
    }
  }

  const lineChartData = [
    {
      name: 'Level Progression',
      data: [10, 15, 20, 30, 40] // Example data showing improvement
    }
  ]

  return (
    <>
    <Navbar />
    <div className='flex flex-col md:flex-row p-6'>
      {/* Left Side: Student Details */}
      <div className='md:w-1/4 p-4'>
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
      <div className='md:w-3/4 p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Progress Card */}
          <div className='bg-white rounded-lg shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4 text-center text-black'>Progress</h2>
            <div className='flex justify-center items-center'>
              <div className='relative w-28 h-28 bg-white rounded-full shadow-inner flex justify-center items-center'>
                <div className='absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse'></div>
                <div className='relative z-10'>
                  <span className='text-xl font-semibold text-black'>
                    15/50
                  </span>
                </div>
              </div>
            </div>
            <div className='mt-4 text-center'>
              <p className='text-lg text-center font-medium text-black'> You're 30% to completion!</p>
            </div>
          </div>

          {/* Badges/Certificates Card */}
<div className='bg-white rounded-lg shadow-lg p-6'>
  <h2 className='text-2xl font-semibold mb-4 text-center'>
    Badges & Certificates
  </h2>
  <div className='flex flex-wrap justify-center space-x-12'>
    {/* Add badge/certificate icons or images here */}
    <img
      src='https://gssoc.girlscript.tech/badges/1.png?imwidth=256'
      alt='badge 1'
      className='w-24 h-24'
    />
    <img
      src='https://gssoc.girlscript.tech/badges/2.png?imwidth=256'
      alt='badge 2'
      className='w-24 h-24'
    />
    <img
      src='https://gssoc.girlscript.tech/badges/3.png?imwidth=256'
      alt='badge 3'
      className='w-24 h-24'
    />
    <img
      src='https://gssoc.girlscript.tech/badges/4.png?imwidth=256'
      alt='badge 4'
      className='w-24 h-24'
    />
  </div>
</div>


        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {/* Bar Chart */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <ReactApexChart
              options={barChartOptions}
              series={barChartData}
              type='bar'
              height={350}
            />
          </div>

          {/* Pie Chart */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <ReactApexChart
              options={pieChartOptions}
              series={pieChartData}
              type='pie'
              height={350}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {/* Donut Chart for Facial Expressions */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <ReactApexChart
              options={donutChartOptions}
              series={donutChartData}
              type='donut'
              height={350}
            />
          </div>

          {/* Line Chart for Improvement Levels */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <ReactApexChart
              options={lineChartOptions}
              series={lineChartData}
              type='line'
              height={350}
            />
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
    </>
  )
}

export default Dashboard
