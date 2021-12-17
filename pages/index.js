import useMongo from 'components/useMongo'

export default function Home() {

  const { data, isLoading, isError } = useMongo()

  if (isLoading) return <>...</>
  if (isError) return <>Ошибка загрузки данных</>

  return (
    <div>
      {data.map(d => (
        <div key={d._id}>{d.item + ', ' + d.currency + ': ' + d.sum}</div>
      ))}
    </div>
  )
}