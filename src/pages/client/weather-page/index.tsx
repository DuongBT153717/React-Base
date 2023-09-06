import { Box } from '@mui/material'
import BG_BODY from '../../../assets/images/bg-body.png'
import BG_BODY_DARK from '../../../assets/images/bg-dark.jpg'
import useBackGround from '../../../hooks/useBackGround'
import Banner from './components/Banner'
import { Content } from './components/Content'
import HourTemp from './components/HourTemp'
import RainChart from './components/RainChart'
const ClientWeather = () => {
  const isLight = useBackGround()
  return (
    <Box sx={{backgroundImage: `url(${BG_BODY})`, width: '100%', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} width='100%'>
      <Box sx={{maxWidth: '1800px', margin: '0 auto', padding: '0 20px'}} >
        <Banner />
        <HourTemp />
        <Content />
        <RainChart />
    </Box>
    </Box>
  )
}

export default ClientWeather