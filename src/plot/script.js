const  names = ['name1','name2', 'name2', 'name4'] 
function counter(namesAmount,name) {
if(!(name in namesAmount)){
    namesAmount[name]= 1;
      }

else{
    namesAmount[name] += 1;
    }
  return namesAmount; 
}

const num = names.reduce(counter,{})
console.log(num['name1'])
console.log(num['name2'])
console.log(num['name4'])
