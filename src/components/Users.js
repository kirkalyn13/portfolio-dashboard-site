import ReactApexChart from 'react-apexcharts'
import Talkies from './Talkies'

const usersTitle = "Users by the Numbers"
const subsContent = "When it comes to the loyalty of the Filipino subscribers to its service providers, people are still divided with choosing the best for them. With minute difference of approximately one percent, people use Globe and TM, over Smart, TalknText, and Sun. An observable five percent difference is observed, pertaining to the users migrating to the new player, Dito Telecommunications."

const series = [48, 47, 5]
const options = {
    chart: {
      type: 'donut',
    },
    plotOptions:{
      pie:{
        donut:{
          labels:{
            show:true,
            name:{
              show: true,
            },
            value:{
              show: true,
              color: '#FFFFFF',
              formatter: function (val) {
                return val + " %"
              }
            },
          }
        },
      },
    },
    stroke:{
      colors: ['#212121']
    },
    labels: ['Globe','Smart','Others'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350,
          height: 350
        },
      }
    }],
    legend: {
        position: 'bottom',
        labels:{
          colors: ["#FFFFFF"]
        }
      },
    tooltip: {
        y: {
          formatter: function (val) {
            return  val + "%"
          }
        }
      }
  }

const Users = ({title}) => {
    return (
        <div className="graph">
            <h1>{title}</h1>
            <ReactApexChart options={options} series={series} type="donut" height={300}/>
            <Talkies title={usersTitle} content={subsContent} />
        </div>
    )
}

export default Users
