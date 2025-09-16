// i18n (минимально)
const translations = {
  ru: {
    'eyebrow': 'Для тех, кто ценит качество',
    'h1': 'Ваш комфортный трансфер – без стресса и посредников',
    'h1sub': 'Путешествия – это больше, чем просто дорога.',
    'cta.order': 'Заказать поездку',
    'cta.calc': 'Рассчитать стоимость',
    'types.title': 'Выберите тип автомобиля',
    'types.subtitle': 'Легковые, микроавтобусы и универсалы',
    'type.sedan': 'Легковая',
    'type.van': 'Микроавтобус',
    'type.wagon': 'Универсал',
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
    'services.pets': 'Поездка с животными',
    'services.children': 'Поездка с детьми',
    'services.order': 'Заказать',
    'services.details': 'Подробнее',
    'modal.close': 'Закрыть',
    // Features
    'feat.inspect.title': 'Осмотр автомобиля онлайн',
    'feat.inspect.p1': '3D-модель с возможностью «заглянуть внутрь» до заказа;',
    'feat.inspect.p2': 'можно посмотреть салон, багажник, компоновку.',
    'feat.map.title': 'Выбор авто на карте',
    'feat.map.p1': 'карта города → кликаешь район → система показывает доступные авто;',
    'feat.map.p2': 'опция «подобрать ближайшее» автоматически.',
    'feat.track.title': 'Отслеживание в реальном времени',
    'feat.track.p1': 'GPS-иконка движется по карте;',
    'feat.track.p2': 'клиент видит, где находится машина.',
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
    'eyebrow': 'Для тих, хто цінує якість',
    'h1': 'Ваш комфортний трансфер – без стресу та посередників',
    'h1sub': 'Подорожі – це більше, ніж просто дорога.',
    'cta.order': 'Замовити поїздку',
    'cta.calc': 'Розрахувати вартість',
    'types.title': 'Оберіть тип автомобіля',
    'types.subtitle': 'Легкові, мікроавтобуси та універсали',
    'type.sedan': 'Легкова',
    'type.van': 'Мікроавтобус',
    'type.wagon': 'Універсал',
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
    'services.pets': 'Поїздка з тваринами',
    'services.children': 'Поїздка з дітьми',
    'services.order': 'Замовити',
    'services.details': 'Детальніше',
    'modal.close': 'Закрити',
    // Features
    'feat.inspect.title': 'Огляд автомобіля онлайн',
    'feat.inspect.p1': '3D-модель із можливістю «зазирнути всередину» до замовлення;',
    'feat.inspect.p2': 'можна подивитися салон, багажник, компонування.',
    'feat.map.title': 'Вибір авто на карті',
    'feat.map.p1': 'карта міста → клікаєш район → система показує доступні авто;',
    'feat.map.p2': 'опція «підібрати найближче» автоматично.',
    'feat.track.title': 'Відстеження в реальному часі',
    'feat.track.p1': 'GPS-іконка рухається по карті;',
    'feat.track.p2': 'клієнт бачить, де знаходиться авто.',
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

// Service details data
const serviceDetails = {
  cargo: {
    ru: {
      title: 'Перевозка грузов',
      content: `
        <h4>Что входит в услугу:</h4>
        <ul>
          <li>Перевозка мебели, техники, личных вещей</li>
          <li>Упаковка и разгрузка (по договоренности)</li>
          <li>Страхование груза</li>
          <li>Отслеживание в реальном времени</li>
        </ul>
        <h4>Типы транспорта:</h4>
        <ul>
          <li>Универсал - до 500 кг</li>
          <li>Микроавтобус - до 1 тонны</li>
          <li>Грузовик - до 3 тонн</li>
        </ul>
        <p><strong>Цена:</strong> от 700 грн за поездку</p>
      `
    },
    ua: {
      title: 'Перевезення вантажів',
      content: `
        <h4>Що входить до послуги:</h4>
        <ul>
          <li>Перевезення меблів, техніки, особистих речей</li>
          <li>Пакування та розвантаження (за домовленістю)</li>
          <li>Страхування вантажу</li>
          <li>Відстеження в реальному часі</li>
        </ul>
        <h4>Типи транспорту:</h4>
        <ul>
          <li>Універсал - до 500 кг</li>
          <li>Мікроавтобус - до 1 тонни</li>
          <li>Вантажівка - до 3 тонн</li>
        </ul>
        <p><strong>Ціна:</strong> від 700 грн за поїздку</p>
      `
    }
  },
  taxi: {
    ru: {
      title: 'Такси-услуги',
      content: `
        <h4>Преимущества:</h4>
        <ul>
          <li>Быстрое прибытие (5-15 минут)</li>
          <li>Фиксированные тарифы</li>
          <li>Опытные водители</li>
          <li>Чистые и комфортные авто</li>
        </ul>
        <h4>Тарифы:</h4>
        <ul>
          <li>По городу - от 100 грн</li>
          <li>В аэропорт - от 300 грн</li>
          <li>Междугородние - от 15 грн/км</li>
        </ul>
        <p><strong>Цена:</strong> от 100 грн за поездку</p>
      `
    },
    ua: {
      title: 'Таксі-послуги',
      content: `
        <h4>Переваги:</h4>
        <ul>
          <li>Швидке прибуття (5-15 хвилин)</li>
          <li>Фіксовані тарифи</li>
          <li>Досвідчені водії</li>
          <li>Чисті та комфортні авто</li>
        </ul>
        <h4>Тарифи:</h4>
        <ul>
          <li>По місту - від 100 грн</li>
          <li>В аеропорт - від 300 грн</li>
          <li>Міжміські - від 15 грн/км</li>
        </ul>
        <p><strong>Ціна:</strong> від 100 грн за поїздку</p>
      `
    }
  },
  pets: {
    ru: {
      title: 'Поездка с животными',
      content: `
        <h4>Особенности:</h4>
        <ul>
          <li>Специальные переноски для животных</li>
          <li>Водители с опытом перевозки питомцев</li>
          <li>Остановки для прогулок (при длительных поездках)</li>
          <li>Дополнительная уборка салона</li>
        </ul>
        <h4>Требования:</h4>
        <ul>
          <li>Справка о вакцинации</li>
          <li>Поводок и намордник для собак</li>
          <li>Предварительное уведомление</li>
        </ul>
        <p><strong>Цена:</strong> от 200 грн за поездку</p>
      `
    },
    ua: {
      title: 'Поїздка з тваринами',
      content: `
        <h4>Особливості:</h4>
        <ul>
          <li>Спеціальні переноски для тварин</li>
          <li>Водії з досвідом перевезення улюбленців</li>
          <li>Зупинки для прогулянок (при тривалих поїздках)</li>
          <li>Додаткове прибирання салону</li>
        </ul>
        <h4>Вимоги:</h4>
        <ul>
          <li>Довідка про вакцинацію</li>
          <li>Повідок та намордник для собак</li>
          <li>Попереднє повідомлення</li>
        </ul>
        <p><strong>Ціна:</strong> від 200 грн за поїздку</p>
      `
    }
  },
  children: {
    ru: {
      title: 'Поездка с детьми',
      content: `
        <h4>Безопасность:</h4>
        <ul>
          <li>Детские автокресла всех категорий</li>
          <li>Водители с опытом перевозки детей</li>
          <li>Соблюдение правил безопасности</li>
          <li>Дополнительные ремни безопасности</li>
        </ul>
        <h4>Удобства:</h4>
        <ul>
          <li>Игрушки и развлечения в дороге</li>
          <li>Остановки по требованию</li>
          <li>Тихая музыка или тишина</li>
          <li>Контроль температуры в салоне</li>
        </ul>
        <p><strong>Цена:</strong> от 150 грн за поездку</p>
      `
    },
    ua: {
      title: 'Поїздка з дітьми',
      content: `
        <h4>Безпека:</h4>
        <ul>
          <li>Дитячі автокрісла всіх категорій</li>
          <li>Водії з досвідом перевезення дітей</li>
          <li>Дотримання правил безпеки</li>
          <li>Додаткові ремені безпеки</li>
        </ul>
        <h4>Зручності:</h4>
        <ul>
          <li>Іграшки та розваги в дорозі</li>
          <li>Зупинки за вимогою</li>
          <li>Тиха музика або тиша</li>
          <li>Контроль температури в салоні</li>
        </ul>
        <p><strong>Ціна:</strong> від 150 грн за поїздку</p>
      `
    }
  }
}

// Service modal functionality
const modal = $('#service-modal')
const modalTitle = $('#modal-title')
const modalContent = $('#modal-content')
const serviceOrder = ['cargo','taxi','pets','children']
let currentServiceIndex = 0

function showServiceDetails(serviceType) {
  const details = serviceDetails[serviceType][currentLang]
  modalTitle.textContent = details.title
  modalContent.innerHTML = details.content
  modal.classList.add('show')
}

function hideServiceDetails() {
  modal.classList.remove('show')
}

function showByIndex(idx){
  currentServiceIndex = (idx + serviceOrder.length) % serviceOrder.length
  showServiceDetails(serviceOrder[currentServiceIndex])
}


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
console.log('Script loaded, initializing...')
applyI18n('ru')

// Event delegation for service details buttons
document.addEventListener('click', (e)=>{
  console.log('Click detected on:', e.target)
  const detailsBtn = e.target.closest('.service-details-btn')
  if(detailsBtn){
    console.log('Details button clicked!')
    const serviceCard = detailsBtn.closest('.service-card')
    if(serviceCard){
      const serviceType = serviceCard.dataset.service
      console.log('Service type:', serviceType)
      currentServiceIndex = serviceOrder.indexOf(serviceType)
      showServiceDetails(serviceType)
    }
  }
})

// Close modal events
$$('.service-modal-close').forEach(btn => {
  btn.addEventListener('click', hideServiceDetails)
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) hideServiceDetails()
})

// Modal carousel (Prev/Next)
document.getElementById('svc-prev').addEventListener('click', ()=> showByIndex(currentServiceIndex - 1))
document.getElementById('svc-next').addEventListener('click', ()=> showByIndex(currentServiceIndex + 1))

// Service order button functionality
document.addEventListener('click', (e)=>{
  const orderBtn = e.target.closest('.btn.primary')
  if(orderBtn && (e.target.textContent.includes('Заказать') || e.target.textContent.includes('Замовити'))){
    e.preventDefault()
    console.log('Order button clicked!')
    // Scroll to contacts form
    document.getElementById('contacts').scrollIntoView({behavior:'smooth'})
    // Focus on name input
    setTimeout(()=>{
      const nameInput = document.querySelector('input[name="name"]')
      if(nameInput) nameInput.focus()
    }, 500)
  }
})

// Auto-hide header on scroll down, show on scroll up
let lastScrollY = window.scrollY
const headerEl = document.querySelector('.header')
let ticking = false
function onScroll(){
  const current = window.scrollY
  if(current > lastScrollY + 5 && current > 10){
    headerEl.classList.add('hide')
  } else if(current < lastScrollY - 5){
    headerEl.classList.remove('hide')
  }
  lastScrollY = current
  ticking = false
}
window.addEventListener('scroll', ()=>{
  if(!ticking){
    window.requestAnimationFrame(onScroll)
    ticking = true
  }
})


