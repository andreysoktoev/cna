import useMongo from 'components/useMongo'

export default function Home() {

  const { data, isLoading, isError } = useMongo()

  if (isLoading) return <h1>...</h1>
  if (isError) return <h1>There is something wrong with data</h1>

  return (
    <div className='table'>
      {data.map(d => (
        <>
          <div className='row'>
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