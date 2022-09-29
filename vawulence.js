const vawulence = () => {
  let  whoIAm = `${prompt('which are you?  bearded , not bearded,bearded but less than 20 strands ')}`
    
    if (whoIAm == 'bearded') {
       alert('Good morning sir !')
    } else if (whoIAm == 'not bearded' ) {
        alert("Good morning ma'am !")
    } else {
        alert("Good morning princess! , Sorry to say but you're a princess 👧")
   }
}
vawulence()