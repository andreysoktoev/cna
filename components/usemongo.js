import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios(url).then(res => res.data)

export default function useMongo(page) {
  const { data, error } = useSWR(`/api/crud?page=${page}`, fetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}