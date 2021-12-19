import useMongo from 'components/usemongo'
import Spinner from 'components/spinner'
import Error from 'components/error'

export default function Home() {
  const { data, isLoading, isError } = useMongo('sheet')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <div className='table'>
      {data.map(d => (
        <div key={Math.random()} className='row'>
          <sub>{new Date(d.date).toLocaleDateString()}</sub>
          <div className='card'>
            <div>{d.item}</div>
            <div>{d.sum.toLocaleString() + ' ' + d.currency.toUpperCase()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
