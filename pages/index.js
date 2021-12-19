import useMongo from 'components/usemongo'
import Spinner from 'components/spinner'
import Error from 'components/error'

export default function Home() {
  const { data, isLoading, isError } = useMongo('home')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  const minus = data
    .map(i => Number(i.sum) < 0 ? Number(i.sum) : 0)
    .reduce((a, b) => a + b)

  const plus = data
    .map(i => Number(i.sum) > 0 ? Number(i.sum) : 0)
    .reduce((a, b) => a + b)

  return (
    <>
      <div>
        {data.map(d => (
          <div key={d._id}>{d.item + ', ' + d.currency + ': ' + d.sum}</div>
        ))}
      </div>
      <div>{minus}</div>
      <div>{plus}</div>
      <div>{minus + plus}</div>
    </>
  )
}
