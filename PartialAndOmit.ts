export function filterUsers(persons: Person, criteria: Partial<Omit<User, 'type'>>): User[]{
  return persons.filter(isUser).filter(user)=>{
    const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, 'type'>)[];
      return criteriaKeys.every((fieldName)=>{
      return user[fieldName] === criteria[fieldName];
      })
      })
      }
      
      
      filterUsers({persons, {age: 23}}).forEach(logPerson)
      
      
      filterUsers(persons: Person, criteria: Partial<Omit<User, 'type'>>) => criteria = le proprieta' (opzionale quante ne passa) dell'User object ad esclusione del 'type'
