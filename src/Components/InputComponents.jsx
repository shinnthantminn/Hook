import useInput from './Helper/useInput'

function InputComponents() {
  const [name, nameReset, nameBind] = useInput('')
  const [age, ageReset, ageBind] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    nameReset()
    ageReset()
    alert(`name is ${name} and age is ${age}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" {...nameBind} name="name" id="name" />
        <input type="number" {...ageBind} name="age" id="age" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default InputComponents
