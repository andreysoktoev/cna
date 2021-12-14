import mongoose from 'mongoose'
import dbConnect from '../../lib/dbConnect'
import Sku from '../../models/Sku'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        // const skus = await Sku.find({}) /* find all the data in our database */
        // res.status(200).json({ data: skus })
        await Sku.find({}, (err, data) => {
          console.log(data)
        })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const sku = await Sku.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ data: sku })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}