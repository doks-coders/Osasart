import {useRouter} from 'next/router'
import { server } from '../../../config'
import BlogDetails from '../../../components/Blog/BlogDetails'
const article = ({article,totalNumber,allrecent})=>{
    
    const router = useRouter()
    const {id} = router.query

   

return <>
<BlogDetails recentItems={JSON.parse(allrecent)}  totalNumber={JSON.parse(totalNumber)} post={JSON.parse(article)}/>
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
    const res1 = await fetch(`${server}/api/totalNumbers`)
    const res2 = await fetch(`${server}/api/fetchAll`)

   
const result = await res.json()
const result1 = await res1.json()
const result3 = await res2.json()

let allrecent= result3.slice(0,4).map((val)=>{
    val.date =  convertToDate(val.created)
    return(val)
  })

  allrecent.sort((a, b) => {
    let Aprop = new Date(a.created)
    Aprop = Aprop.getTime()

    let Bprop = new Date(b.created)
    Bprop = Bprop.getTime()

    if (Aprop < Bprop) return 1
    if (Aprop > Bprop) return -1
    else return 0
  })
  allrecent = JSON.stringify(allrecent)
  


const article = JSON.stringify(result)
const totalNumber =  JSON.stringify(result1)


return{
    props:{
        article,
        totalNumber,
        allrecent
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


let convertToDate = (val)=>{
    let d = new Date(val)
    let string= d.toString()
   let  stringArray = string.split(' ').slice(1,-6)
   let newString = stringArray.join(' ')
     return newString
  }
  



//serve -s out -p 8000
