import ReactApexChart from 'react-apexcharts'
import Talkies from './Talkies'

const latencyTitle = "Globe reaches you, quicker."
const latencyContent = "Smart is a little problematic in delivering a faster ping to its subscribers, with a ping value of not less than 60 ms. Still, it showed improvements starting mid year, hitting 55 ms ping in an attempt to deliver better experience. Globe managed to show consistency in delivering fast latency, with a constant 40 ms ping throughout the year, winning the Latency game."

const series = [{
  name: 'Globe',
  data: [38.79, 40.44, 40.74, 42.3, 43.21, 45.19, 46.72, 43.38, 42.07, 39.97, 39.22, 39.55]
}, {
  name: 'Smart',
  data: [64.72,68.4, 69.7, 70.49, 69.55, 71.5, 60.79, 60.73, 57.6, 53.81, 54.58, 57.89]
}]
const options = {
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  yaxis:{
    labels:{
      style:{
        colors: ["#FFFFFF"]
      }
    }
  },
  grid:{
    borderColor: '#455A64'
  },
  stroke: {
    curve: 'smooth'
  },
  legend:{
    labels:{
      colors: ["#FFFFFF"]
    }
  },
  xaxis: {
    type: 'month',
    categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    labels: {
      style: {
        colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"]
      }
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val + " ms"
      }
    }
  },
}

const Latency = ({title}) => {
    return (
        <div className="graph">
            <h1>{title}</h1>
            <ReactApexChart options={options} series={series} type="area" height={350} />
            <Talkies title={latencyTitle} content={latencyContent} />
        </div>
    )
}

export default Latency
