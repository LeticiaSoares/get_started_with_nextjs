import { useRouter } from 'next/router'
import { withRouter } from 'next/router'

export default withRouter(function Post() {
    const router = useRouter()
    console.log('router',router)
    return (
        <div>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </div>
    )
})