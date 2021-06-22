import ReactApexChart from 'react-apexcharts'
import Talkies from './Talkies'

const osTitle = "Smart Wins by Unanymous Decision"
const osContent = "Garnering a 5/7 Overall Score for the November 2020 Open Signal Awards, Smart proves that it is the king in Voice Experience, Download Speed, Upload Speed, 4G Availability, and 4G Coverage. Only at par with its competitor in terms of Gaming Experience, which is a major bandwidth consumer with the likes of Mobile Legends, League of Legends: Wild Rift, Genshin Impact, and Call of Duty Mobile. For the  Voice App Experience, Globe bags the medal, winning by 0.9 points, still proving its overall competency."

const series = [{
    name: 'Globe',
    data: [37.7, 34.4, 62.3, 7.4, 2.1, 80.3, 6.6]
  }, {
    name: 'Smart',
    data: [54.2, 34.5, 61.4,11.4, 4.0, 85.4, 6.7]
  }]
  const options= {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '90%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style:{
        fontSize: '8px',
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Video Experience','Gaming Experience','Voice App Experience','Download Speed','Upload Speed','4G Availability','4G Coverage'],
    },
    yaxis: {
      title: {
        text: 'points'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
        y: {
          formatter: function (val) {
            return  val + " points"
          }
        }
      }
  }
  
const OpenSignal = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
            <Talkies title={osTitle} content={osContent} />
        </div>
    )
}

export default OpenSignal
