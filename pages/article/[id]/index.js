import {useRouter} from 'next/router'
import { server } from '../../../config'
const article = ({article})=>{
    
    const router = useRouter()
    const {id} = router.query

   

return <>
<div>{id}</div>
<div>{JSON.parse(article).heading}</div>
<div>{JSON.parse(article).authorBio}</div>
</>
}

/*
export const getServerSideProps = async(context)=>{ 
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
const article = await res.json()
return{
    props:{
        article
    }
}
}
*/




export const getStaticProps = async(context)=>{ 
    const res =  await fetch(`${server}/api/fetchAll/${context.params.id}`)

   
const result = await res.json()

const article = JSON.stringify(result)


return{
    props:{
        article
    }
}
}


export const getStaticPaths = async ()=>{
const res = await fetch(`${server}/api/fetchAll`)
const articles  = await res.json()

//paths:{params:{id:'1',id:'2'}} recreate this
const ids = articles.map(article=>article._id)
const paths = ids.map(id=>({params:{id:id.toString()}})


)

console.log(paths)

return{
    paths,
    fallback:false
}
}

export default article



//serve -s out -p 8000
