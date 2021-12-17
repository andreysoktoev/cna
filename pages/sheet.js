import useMongo from 'components/usemongo'
import Spinner from 'components/spinner'
import Error from 'components/error'

export default function Home() {

  const { data, isLoading, isError } = useMongo()

  if (isLoading) return <Spinner />
  if (isError) return <Error />

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