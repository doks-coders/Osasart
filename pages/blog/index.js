import Head from 'next/head'

import {server} from '../../config'
import clientPromise from '../../lib/mongodb'
import PostPage from '../../components/Blog/BlogHome'
import { GlobalContext } from '../../Context/GlobalContext';
import { useState } from 'react';


export default function Home({ isConnected,objectSelected,category,page}) {


  let {posts,numberOfPosts,alltotal,allrecent} = JSON.parse(objectSelected)
  return (
    <>
    
    <PostPage 
    blogArticles={posts}
    numberofPosts={numberOfPosts}
    totalNumber={alltotal}
    recentItems={allrecent}
    categoryEl={category}
    pageEl={page}
    ></PostPage>
    
    </>

  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
  
    ////http://localhost:5000/api/fetchPostPage/?page=1&limit=2&category=3D Modelling
    
    
   let {page,limit,category,search} =  context.query
  
   if(!page)page=1
   if(!category)category=1
   if(!search)search=''


    const postPage = await fetch(`${server}/api/fetchPostPage/?page=${page}&limit=2&category=${category}&search=${search}`)

    const allPosts = await fetch(`${server}/api/fetchAll`)

    const allTotal = await fetch(`${server}/api/totalNumbers`)

   

    let {posts,numberOfPosts} = await  postPage.json()
    let allposts = await allPosts.json()
    let alltotal = await allTotal.json()


    let categoryEl =  category
    
    allposts = allposts.map((val)=>{
      val.date =  convertToDate(val.created)
      return(val)
    })

    posts = posts.map((val)=>{
      val.date =  convertToDate(val.created)
      return(val)
    })
  
    let allrecent= allposts.slice(0,4).map((val)=>{
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
 

    let initialObject = {posts,numberOfPosts,allposts,alltotal,allrecent}

   let objectSelected =  JSON.stringify(initialObject)

  
    return {
      props: { isConnected: true,objectSelected,category,page},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

let convertToDate = (val)=>{
  let d = new Date(val)
  let string= d.toString()
 let  stringArray = string.split(' ').slice(1,-6)
 let newString = stringArray.join(' ')
   return newString
}


/**
 * 
   let created =  allposts.map(val=>  {

     let d = new Date(val.created)
     let string= d.toString()
 //   let  stringArray = string.split(' ').slice(0,-6) //day
    let  stringArray = string.split(' ').slice(1,-6) //without day

    let newString = stringArray.join(' ')


      return {date:newString,heading:val.heading}
   
  } )


 *   allposts.sort((a, b) => {

            let Aprop = new Date(a.created)
            Aprop = Aprop.getTime()

            let Bprop = new Date(b.created)
            Bprop = Bprop.getTime()

            if (Aprop < Bprop) return 1
            if (Aprop > Bprop) return -1
            else return 0
        })

 //Oldest First
created.sort((a, b) => {
  let Aprop = a.date
  let Bprop = b.date
  if (Aprop < Bprop) return -1
  if (Aprop > Bprop) return 1
  else return 0
})


//Newest First 
created.sort((a, b) => {
  let Aprop = a.date
  let Bprop = b.date
  if (Aprop < Bprop) return 1
  if (Aprop > Bprop) return -1
  else return 0
})

 */