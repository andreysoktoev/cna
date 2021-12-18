export default function Add() {
  const YYYY = new Date().getFullYear()
  const MM = new Date().getMonth() + 1
  const DD = new Date().getDate()

  return (
    <form className='table' method='post' action='/api/crud'>
      <div className='row'>
        <input type='text' name='item' placeholder='item' required></input>
      </div>
      <div className='row'>
        <input
          type='text'
          name='currency'
          placeholder='currency'
          required
        ></input>
      </div>
      <div className='row'>
        <input type='text' name='sum' placeholder='sum' required></input>
      </div>
      <div className='row'>
        <input
          type='text'
          name='date'
          placeholder={YYYY + '/' + MM + '/' + DD}
        ></input>
      </div>
      <input type='submit' value='submit' />
    </form>
  )
}
