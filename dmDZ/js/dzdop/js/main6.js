const obj1 = {
    monday : 'понедельник',
    tuesday : 'вторник',
    wednesday : 'среда',
    thursday : 'четверг',
    friday : 'пятница',
    saturday : 'суббота',
    sunday : 'воскресенье'
  }
  function week(obj){
    let a=prompt('введите день недели')
    for (el in obj){
        if (a==el){
            console.log(obj[el])
        } else if (a==obj[el]){
            console.log(el) 
        }
    }
}
week(obj1)
