import ReactApexChart from 'react-apexcharts'
import Talkies from './Talkies'

const dlTitle = "Smart delivering more, faster."
const dlSpeedContent = "Throughout the year, Globe has shown improvement in increasing its Download Speed, starting 8 Mbps to almost finishing in the near 10 Mbps mark, delivering decent 4G Experience. However, Smart prove its superiority on its experience, by finishing high with almost 12 Mbps, after going through a bit of speed bumps throughout the year."

const series = [{
  name: 'Globe',
  data: [8.8, 8.95, 9.18, 9.7, 9.24, 9.38, 9.24, 9.82, 9.74, 9.97, 10.23, 9.3]
}, {
  name: 'Smart',
  data: [11.57, 10.95, 10.42, 10.97, 10.78, 10.12, 10.78, 10.12, 10.44, 11.53, 11.36, 11.38]
}]
const options = {
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  grid:{
    borderColor: '#455A64'
  },
  yaxis:{
    labels:{
      style:{
        colors: ["#FFFFFF"]
      }
    }
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
        return  val + " Mbps"
      }
    }
  },
}

const DLSpeed = ({title}) => {
    return (
        <div className="graph">
            <h1>{title}</h1>
            <ReactApexChart options={options} series={series} type="area" height={350} />
            <Talkies title={dlTitle} content={dlSpeedContent} />
        </div>
    )
}

export default DLSpeed
