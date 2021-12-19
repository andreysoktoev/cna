import useMongo from 'components/usemongo'
import Spinner from 'components/spinner'
import Error from 'components/error'

export default function Home() {
  const { data, isLoading, isError } = useMongo('home')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  const rub = {
    IDR: 0.0052,
    RUB: 1,
    USD: 74.13
  }

  const minus = data
    .map(i => i.sum < 0 ? i.sum * rub[i.currency] : 0)
    .reduce((a, b) => a + b)

  const plus = data
    .map(i => i.sum > 0 ? i.sum * rub[i.currency] : 0)
    .reduce((a, b) => a + b)

  const total = data
    .map(i => i.sum * rub[i.currency])
    .reduce((a, b) => a + b)

  return (
    <div className='table'>
      <div className='row'>
        {data.map(d => (
          <div className='card' key={Math.random()}>
            <div>{d.item + ', ' + d.currency + ': '}</div>
            <div>{d.sum.toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='card'>
          <div></div>
          <div>{minus.toLocaleString()}</div>
        </div>
        <div className='card'>
          <div></div>
          <div>{plus.toLocaleString()}</div>
        </div>
      </div>
      <div className='card'>
        <div>Total</div>
        <div>{total.toLocaleString()}</div>
      </div>
    </div>
  )
}
