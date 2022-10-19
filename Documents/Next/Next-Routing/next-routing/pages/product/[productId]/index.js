// In order to extract the route parameter i.e. product ID we need to import a hook from next js package.
import  {useRouter} from 'next/router'

function ProductDetail() {
    const router = useRouter()   //Hook

    //productId - dynamic segment of file name
    //productId - need not to be a number, it can be a string as well
    const productId = router.query.productId
  return <h1>Details about product {productId}</h1>
}

export default ProductDetail
