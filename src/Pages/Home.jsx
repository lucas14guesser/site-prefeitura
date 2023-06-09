 import CarouselSlogan from "../Layout/Carousel/CarouselSlogan"
import GridServices from "../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../Layout/GridServicesMain/GridServicesSec"
import News from "../Layout/News/News"
import NewsSec from "../Layout/News/NewsSec"

import '../Styles/Home.css'

    
    const Home = () => {
      return (
        <div>
          <div>
            <GridServices />
          </div>
          <div>
            <GridServicesSec />
          </div>
          <div>
            <CarouselSlogan />
          </div>
          <div className="news_container">
            <News/>
          </div>
          <div className="news_sec_container">
            <NewsSec />
          </div>
        </div>

      )
    }
    
    export default Home