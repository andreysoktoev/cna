import useMongo from 'components/usemongo'
import Spinner from 'components/spinner'
import Error from 'components/error'

export default function Home() {

  const { data, isLoading, isError } = useMongo('home')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <div>
      {data.map(d => (
        <div key={d._id}>{d.item + ', ' + d.currency + ': ' + d.sum}</div>
      ))}
    </div>
  )
  
}