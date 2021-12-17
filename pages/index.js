import clientPromise from '../lib/mongodb'

export default function Home({ data }) {
  return (
    <div>
      {data.map(d => (
        <div key={d._id}>{d.item + ', ' + d.currency + ': ' + d.sum}</div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  try {
    const client = await clientPromise
    const collection = client.db().collection('skus')
    const data = await collection.find().toArray()
    return {
      props: { data: JSON.parse(JSON.stringify(data)) }
    }
  } catch (e) {
    console.error(e)
  }
}
