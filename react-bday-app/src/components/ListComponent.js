let date = new Date();
let currentYear = date.getFullYear();

function ListComponent({ data, setMonthValue, setBdays }) {
  if(setMonthValue) {
    return (
      <>
        {data
          .filter((person) => {
            return person.month == setMonthValue;
          })
          .map((person, index, array) => {
            setBdays(array.length);
            console.log('from the list component');
            return (
              <>
              <div>{person.name}</div>
              <div>{currentYear - person.age}</div>
              <img src={person.image} width="200" />
              {person.email ? <a href="">Send greetigns</a> : ""}
              </>
            )
          })}
      </>
    );
  }
}

export default ListComponent;
