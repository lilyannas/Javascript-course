let date = new Date();
let currentYear = date.getFullYear();

function ListComponent({ data, setMonthValue, setBdays }) {
  if(setMonthValue) {
    return (
      <main>
        {data
          .filter((person) => {
            return person.month == setMonthValue;
          })
          .map((person, index, array) => {
            setBdays(array.length);
            console.log('from the list component');
            return (
              <section className="person-container">
              <div>{person.name} is turning:</div>
              <div>{currentYear - person.age}</div>
              <img src={person.image} width="200" />
              {person.email ? <button href={`mailto:${person.email}`}>Send greetigns</button> : ""}
              </section>
            )
          })}
      </main>
    );
  }
}

export default ListComponent;
