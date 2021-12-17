import axios from 'axios'
import useSWR from 'swr'

const fetcher = () => axios.get('/api/crud').then(res => res.data)

export default function useMongo() {
  const { data, error } = useSWR('/api/crud', fetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}