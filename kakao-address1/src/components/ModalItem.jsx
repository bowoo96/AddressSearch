const ModalItem = (props) => {

  const test = {
    number: props.number,
    name: props.name,
    road: props.road,
    show: false,
  }

  return (
    <li onClick={() => props.clickData(test)}>
      <p>{props.number}</p>
      <p>{props.name}</p>
      <p>{props.road}</p>
    </li>
  )
}

export default ModalItem;