import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const { method } = req

  const client = await clientPromise
  const collection = client.db().collection('skus')

  switch (method) {
    case 'POST':
      try {
        await collection.insertOne(req.body)
        res.redirect('/')
        console.log('+')
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
