import Overview from '../components/Overview'
import DLSpeed from '../components/DLSpeed'
import Latency from '../components/Latency'
import Users from '../components/Users'
import OpenSignal from '../components/OpenSignal'

const Insights = () => {
    return (
        <>
          <Overview />
          <DLSpeed title={"2021 Download Speed Trend"} />
          <Latency title={"2021 Latency Trend"} />
          <Users title={"Subscriber Distribution"} />
          <OpenSignal title={"Open Signal Awards"} />
        </>
    )
}

export default Insights
