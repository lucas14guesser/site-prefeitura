 import CarouselSlogan from "../Layout/Carousel/CarouselSlogan"
import GridServices from "../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../Layout/GridServicesMain/GridServicesSec"
    
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
        </div>

      )
    }
    
    export default Home