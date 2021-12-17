import clientPromise from '../lib/mongodb'

export default function Home({ data }) {
  return (
    <div className='table'>
      {data.map(d => (
        <>
          <div className='date'>
            <div>
              <sub>{new Date().toLocaleDateString()}</sub>
            </div>
            <div className='card'>
              <div>{d.item}</div>
              <div>{d.sum + ' ' + d.currency.toUpperCase()}</div>
            </div>
          </div>
        </>
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
