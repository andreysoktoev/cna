import clientPromise from '../lib/mongodb'

export default function Home({ data }) {
  return (
    <div className='container'>
      <div className='main'>
        <div>
          {data.map((d) => (
            <div key={d._id}>
              {d.item}, {d.currency}: {d.sum}
            </div>
          ))}
        </div>
      </div>
      <form action='/api/crud' method='post'>
        <input type='text' name='item' id='item' placeholder='item' required />
        <input
          type='text'
          name='currency'
          id='currency'
          placeholder='cur'
          required
        />
        <input type='text' name='sum' id='sum' placeholder='sum' required />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export async function getServerSideProps() {
  let changeStream
  try {
    const client = await clientPromise
    const collection = client.db().collection('skus')
    const data = await collection.find().toArray()

    changeStream = collection.watch([
      {
        $project: {
          fullDocument: 1
        }
      }
    ])

    changeStream.on('change', (change) => {
      console.log(change.fullDocument)
    })

    return {
      props: { data: JSON.parse(JSON.stringify(data)) }
    }
  } catch (e) {
    console.error(e)
  }
}
