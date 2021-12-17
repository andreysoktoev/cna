import Spinner from 'components/spinner'
import useMongo from 'components/usemongo'

export default function Home() {

  const { data, isLoading, isError } = useMongo()

  if (isLoading) return <Spinner />
  if (isError) return <>Ошибка загрузки данных</>

  return (
    <div>
      {data.map(d => (
        <div key={d._id}>{d.item + ', ' + d.currency + ': ' + d.sum}</div>
      ))}
    </div>
  )
}