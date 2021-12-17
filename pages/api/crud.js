import clientPromise from 'lib/mongo'

export default async function handler(req, res) {
  const { method } = req

  const client = await clientPromise
  const collection = client.db().collection('skus')

  switch (method) {
    case 'GET':
      const data = await collection.find().toArray()
      res.json(data)
      break
    case 'POST':
      try {
        await collection.insertOne(req.body)
        res.redirect('/sheet')
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}