import React from 'react'

import clientPromise from "../lib/mongodb"
import { database } from '../config'
const totalNumbers = async () => {
   
        const client = await clientPromise
        const db = client.db(database)
        let animation  = await  db.collection('posts').find({category:"3D Animation"}).toArray()
        let design  = await  db.collection('posts').find({category:"Architecture Design"}).toArray()
        let modelling  = await  db.collection('posts').find({category:"3D Modelling"}).toArray()
       
        return({ animation: animation.length,design: design.length,modelling:modelling.length });
      
       
}

export default totalNumbers








