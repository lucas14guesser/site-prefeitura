 import CarouselSlogan from "../Layout/Carousel/CarouselSlogan"
import GridServices from "../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../Layout/GridServicesMain/GridServicesSec"
import News from "../Layout/News/News"

import '../Styles/Home.css'

    
    const Home = () => {
      return (
        <div>
          <div>
            <GridServices />
          </div>
          <div>
            <CarouselSlogan />
          </div>
          <div>
            <GridServicesSec />
          </div>
          <div className="news_container">
            <News/>
          </div>
        </div>

      )
    }
    
    export default Home