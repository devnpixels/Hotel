const head_nav = document.querySelector('.head_nav')
const head_nav_tag = document.getElementById('head_nav_tag')

head_nav_tag.onclick =()=>{
  head_nav.classList.toggle('change')
}

const room_items = document.getElementById('room_items')
const rem_room = document.querySelector('.rem_room')
const add_room = document.querySelector('.add_room')

add_room.onclick =()=>{
  var counter = document.querySelectorAll('.room_nav_box_in').length
  if(counter < 6){
    const item = document.createElement('div')
    item.classList.add('room_li')
    item.innerHTML = `<span>Room ${counter+1}</span><section><small class="add">+</small><strong class="room_nav_box_in">1</strong><small class="sub">-</small></section>`
    room_items.appendChild(item)
  }
  calc_room()
  updateNumBox()
}

rem_room.onclick =()=>{
  let list = document.querySelectorAll('.room_li')
  var counter = list.length
  console.log(list.length)
  if(counter > 1){
    list[counter-1].remove()
  }
  calc_room()
  updateNumBox()
}

const room_counter = document.getElementById('room_counter')
const guest_counter = document.getElementById('guest_counter')

const updateNumBox =()=>{
  let list = document.querySelectorAll('.room_li')
  var counter = list.length
  if(counter > 1){
    room_counter.innerHTML = counter + ' ' + 'rooms'
  }else{
    room_counter.innerHTML = counter + ' ' + 'room'
  }
  let room_nav_box_in = document.querySelectorAll('.room_nav_box_in')
  var guest_count = 0
  room_nav_box_in.forEach(room=>{
    guest_count = guest_count + parseInt(room.innerHTML)
  })
  if(guest_count > 1){
    guest_counter.innerHTML = guest_count + ' ' + 'guests'
  }else{
    guest_counter.innerHTML = guest_count + ' ' + 'guest'
  }
}

const calc_room =()=>{
  const room_nav_box_in = document.querySelectorAll('.room_nav_box_in')
  const add = document.querySelectorAll('.add')
  const sub = document.querySelectorAll('.sub')
  for (let i = 0; i < room_nav_box_in.length; i++) {
    add[i].onclick =()=>{
      let value = parseInt(room_nav_box_in[i].innerHTML)
      if(value < 4){
        room_nav_box_in[i].innerHTML = value + 1

      }
      updateNumBox()
    }
    sub[i].onclick =()=>{
      let value = parseInt(room_nav_box_in[i].innerHTML)
      if(value > 1){
        room_nav_box_in[i].innerHTML = value - 1
      }
      updateNumBox()
    }
  }
}
calc_room()


const num_box = document.querySelector('.num_box')
const guest_num = document.getElementById('guest_num')
const room_nav_box = document.querySelector('.room_nav_box')
num_box.onclick =()=>{
  room_nav_box.classList.add('change')
}
window.onclick =()=>{
  num_box.childNodes.forEach(num=>{
    if(num.classList){
      num.classList.add('protect')
    }
    num.childNodes.forEach(n=>{
      if(n.classList){
        n.classList.add('protect')
    }
      n.childNodes.forEach(ni=>{
        if(ni.classList){
          ni.classList.add('protect')
        }
        ni.childNodes.forEach(nii=>{
          if(nii.classList){
            nii.classList.add('protect')
        }
          nii.childNodes.forEach(niii=>{
            if(niii.classList){
              niii.classList.add('protect')
          }
        })
      })          
    }) 
  })
  if(!event.target.classList.contains('protect')){
    room_nav_box.classList.remove('change')
  }
})
}