import clientPromise from 'lib/mongo'

export default async function handler(req, res) {
  const { method } = req
  const { page } = req.query

  const client = await clientPromise
  const collection = client.db().collection('states')

  switch (method) {
    case 'GET':
      let data
      switch (page) {
        case 'home':
          data = await collection
            .aggregate([
              { $sort: { date: 1 } },
              {
                $group: {
                  _id: {
                    item: { $toLower: '$item' },
                    currency: { $toLower: '$currency' }
                  },
                  sum: { $last: '$sum' },
                  date: { $last: '$date' }
                }
              },
              {
                $project: {
                  _id: 0,
                  item: '$_id.item',
                  currency: '$_id.currency',
                  date: 1,
                  sum: 1
                }
              },
              { $sort: { item: 1 } }
            ])
            .toArray()
          break
        case 'sheet':
          data = await collection.find({}, { sort: { date: 1 } }).toArray()
          break
      }
      res.json(data)
      break
    case 'POST':
      try {
        req.body.date =
          req.body.date === '' && !req.body.date
            ? new Date()
            : new Date(req.body.date)
        req.body.sum = +req.body.sum
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
