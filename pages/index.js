
import Link from "next/link" ;

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href= "/blog">
      <a href="/blog">Blog</a>
    </Link>
    
  </div>
)

export default Index