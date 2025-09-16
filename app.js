// i18n (минимально)
const translations = {
  ru: {
    'hero.title': 'Перевозки и трансфер в Кривом Роге',
    'hero.subtitle': 'Легковые, микроавтобусы и универсалы. 3D-просмотр, карта, онлайн-заявка.',
    'hero.ctaOrder': 'Заказать машину',
    'hero.ctaMap': 'Посмотреть карту',
    'hero.note': 'Главная картинка — статичная заглушка. Нажмите на любую карточку, чтобы открыть 3D-бокс.',
    'viewer.title': '3D-бокс модели',
    'viewer.prev': 'Пред. машина',
    'viewer.next': 'След. машина',
    'viewer.ext': 'Камера: Снаружи',
    'viewer.int': 'Камера: Салон',
    'viewer.vr': 'VR/AR (заглушка)',
    'viewer.back': 'На главную',
    'viewer.compare': 'Сравнить',
    'viewer.calc': 'Калькулятор стоимости',
    'specs.type': 'Тип',
    'specs.price': 'Цена, грн',
    'specs.km': 'Км включено',
    'specs.capacity': 'Вместимость',
    'services.title': 'Услуги',
    'services.rent': 'Аренда',
    'services.transfer': 'Трансфер',
    'services.cargo': 'Перевозка грузов',
    'services.taxi': 'Такси-услуги',
    'services.order': 'Заказать',
    'map.title': 'Карта: Кривой Рог',
    'filters.sedan': 'Легковые',
    'filters.van': 'Микроавтобусы',
    'filters.wagon': 'Универсалы',
    'contacts.title': 'Контакты',
    'form.name': 'Имя',
    'form.phone': 'Телефон',
    'form.msg': 'Комментарий',
    'form.send': 'Оставить заявку',
  },
  ua: {
    'hero.title': 'Перевезення та трансфер у Кривому Розі',
    'hero.subtitle': 'Легкові, мікроавтобуси та універсали. 3D-перегляд, карта, онлайн-заявка.',
    'hero.ctaOrder': 'Замовити авто',
    'hero.ctaMap': 'Переглянути карту',
    'hero.note': 'Головне зображення — заглушка. Натисніть на будь-яку картку, щоб відкрити 3D-бокс.',
    'viewer.title': '3D-бокс моделі',
    'viewer.prev': 'Попер. авто',
    'viewer.next': 'Наступ. авто',
    'viewer.ext': 'Камера: Зовні',
    'viewer.int': "Камера: Салон",
    'viewer.vr': 'VR/AR (заглушка)',
    'viewer.back': 'На головну',
    'viewer.compare': 'Порівняти',
    'viewer.calc': 'Калькулятор вартості',
    'specs.type': 'Тип',
    'specs.price': 'Ціна, грн',
    'specs.km': 'Км включено',
    'specs.capacity': 'Місткість',
    'services.title': 'Послуги',
    'services.rent': 'Оренда',
    'services.transfer': 'Трансфер',
    'services.cargo': 'Перевезення вантажів',
    'services.taxi': 'Таксі-послуги',
    'services.order': 'Замовити',
    'map.title': 'Карта: Кривий Ріг',
    'filters.sedan': 'Легкові',
    'filters.van': 'Мікроавтобуси',
    'filters.wagon': 'Універсали',
    'contacts.title': 'Контакти',
    'form.name': "Ім'я",
    'form.phone': 'Телефон',
    'form.msg': 'Коментар',
    'form.send': 'Надіслати заявку',
  }
}

let currentLang = 'ru'
const $ = (sel, root=document) => root.querySelector(sel)
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel))

function applyI18n(lang){
  currentLang = lang
  $$('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang))
  $$('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n')
    el.textContent = translations[lang][key] || el.textContent
  })
}

// Lang switch
$$('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> applyI18n(btn.dataset.lang))
})

// Footer year
$('#year').textContent = new Date().getFullYear()

// Hero cards navigation -> scroll to viewer and set model
const models = ['sedan','van','wagon']
let modelIndex = 0
function setModelByName(name){
  const idx = models.indexOf(name)
  modelIndex = idx>=0 ? idx : 0
  updateSpecs()
  // цвет куба для различия
  const colorMap = {sedan:0x2dd4bf, van:0x60a5fa, wagon:0xf59e0b}
  cube.material.color.setHex(colorMap[models[modelIndex]])
}

$$('.car-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    setModelByName(card.dataset.model)
    location.hash = '#viewer'
    document.getElementById('viewer').scrollIntoView({behavior:'smooth'})
  })
})

// Specs placeholder
const specsTable = $('#specs-body')
const specsData = {
  sedan: { type:'Легковая', price: '15/км', km: '20', cap: '4' },
  van:   { type:'Микроавтобус', price: '20/км', km: '20', cap: '8-12' },
  wagon: { type:'Универсал', price: '18/км', km: '25', cap: '4-5 + багаж' },
}
function updateSpecs(){
  const key = models[modelIndex]
  const s = specsData[key]
  specsTable.innerHTML = `<tr><td>${s.type}</td><td>${s.price}</td><td>${s.km}</td><td>${s.cap}</td></tr>`
}

// Three.js minimal viewer (cube placeholder)
const canvas = document.getElementById('three-canvas')
const renderer = new THREE.WebGLRenderer({canvas, antialias:true})
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
function resize(){
  const rect = canvas.getBoundingClientRect()
  renderer.setSize(rect.width, rect.height, false)
  camera.aspect = rect.width / rect.height
  camera.updateProjectionMatrix()
}
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0a0f18)
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
camera.position.set(3, 2, 4)
const controls = new THREE.OrbitControls(camera, canvas)
controls.enableDamping = true
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(3,4,2)
scene.add(light)
scene.add(new THREE.AmbientLight(0xffffff, .3))
const geom = new THREE.BoxGeometry(1.6, .8, 3)
const mat = new THREE.MeshStandardMaterial({ color: 0x2dd4bf, roughness:.4, metalness:.1 })
const cube = new THREE.Mesh(geom, mat)
scene.add(cube)
const floor = new THREE.Mesh(new THREE.CircleGeometry(3, 48), new THREE.MeshStandardMaterial({color:0x111827, roughness:1}))
floor.rotation.x = -Math.PI/2
floor.position.y = -0.5
scene.add(floor)

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.y += 0.003
  controls.update()
  renderer.render(scene, camera)
}
window.addEventListener('resize', resize)
resize(); animate()
updateSpecs()

// Camera buttons (placeholder behavior)
document.getElementById('btn-ext').addEventListener('click', ()=>{
  camera.position.set(3,2,4)
})
document.getElementById('btn-int').addEventListener('click', ()=>{
  camera.position.set(0.2, 0.8, 0.6)
})
document.getElementById('btn-prev').addEventListener('click', ()=>{
  modelIndex = (modelIndex - 1 + models.length) % models.length
  setModelByName(models[modelIndex])
})
document.getElementById('btn-next').addEventListener('click', ()=>{
  modelIndex = (modelIndex + 1) % models.length
  setModelByName(models[modelIndex])
})

// VR placeholder
document.getElementById('btn-vr').addEventListener('click', ()=>{
  alert('WebXR/AR будет подключён позже (заглушка).')
})

// Leaflet map
const map = L.map('leaflet', { zoomControl: true }).setView([47.9105, 33.3918], 12)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map)

// Примеры районов (условные точки)
const districts = [
  { name: 'Центрально-Городской', coord: [47.908, 33.391], cars:['sedan','van'] },
  { name: 'Покровский', coord: [47.951, 33.417], cars:['sedan','wagon'] },
  { name: 'Саксаганский', coord: [47.907, 33.43], cars:['van','wagon'] },
]

const markers = districts.map(d=>{
  const marker = L.marker(d.coord).addTo(map)
  marker.bindPopup(() => {
    const available = d.cars.map(c=>({
      sedan:'Легковая',van:'Микроавтобус',wagon:'Универсал'
    })[c]).join(', ')
    const exampleRoute = 'Пример маршрута: 5–8 км'
    const approx = 'Ориентировочная цена: 150–300 грн'
    return `<b>${d.name}</b><br/>Доступно: ${available}<br/>${exampleRoute}<br/>${approx}`
  })
  return {marker, data:d}
})

// Фильтр по типам
const activeTypes = new Set(models)
$$('.flt').forEach(cb=>{
  cb.addEventListener('change', ()=>{
    if(cb.checked) activeTypes.add(cb.value); else activeTypes.delete(cb.value)
    markers.forEach(({marker, data})=>{
      const visible = data.cars.some(c=>activeTypes.has(c))
      if(visible){ marker.addTo(map) } else { map.removeLayer(marker) }
    })
  })
})

// Lead form
$('#lead-form').addEventListener('submit', (e)=>{
  e.preventDefault()
  const fd = new FormData(e.currentTarget)
  const payload = Object.fromEntries(fd.entries())
  console.log('lead:', payload)
  alert('Заявка отправлена (демо). Мы свяжемся с вами!')
  e.currentTarget.reset()
})

// Init
applyI18n('ru')


