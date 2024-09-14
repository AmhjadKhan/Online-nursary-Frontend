import Carousel from "../components/ui/Carousel"
import CategoriesName from "../components/ui/CategoriesName"
import PhotoGallery from "./photogellary/PhotoGallery"
import Product from "./product/Product"

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoriesName />
      <Product />
      <PhotoGallery />
    </div>

  )
}

export default Home
