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
    'services.back': 'Назад',
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
    'services.back': 'Назад',
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

// Global variables
let models, modelIndex, specsTable, specsData, canvas, renderer, scene, camera, controls, cube, map, markers, activeTypes



// Lead form
$('#lead-form').addEventListener('submit', (e)=>{
  e.preventDefault()
  const fd = new FormData(e.currentTarget)
  const payload = Object.fromEntries(fd.entries())
  console.log('lead:', payload)
  alert('Заявка отправлена (демо). Мы свяжемся с вами!')
  e.currentTarget.reset()
})

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing...')
  
  // Init
  applyI18n('ru')
  
  // Initialize variables
  models = ['sedan','van','wagon']
  modelIndex = 0
  specsTable = $('#specs-body')
  specsData = {
    sedan: { type:'Легковая', price: '15/км', km: '20', cap: '4' },
    van:   { type:'Микроавтобус', price: '20/км', km: '20', cap: '8-12' },
    wagon: { type:'Универсал', price: '18/км', km: '25', cap: '4-5 + багаж' },
  }
  
  // Debug: Check if buttons exist
  const detailButtons = document.querySelectorAll('.service-details-btn')
  const orderButtons = document.querySelectorAll('.btn.primary')
  console.log('Found detail buttons:', detailButtons.length)
  console.log('Found order buttons:', orderButtons.length)
  
  // Test: Add click listeners directly to buttons
  detailButtons.forEach((btn, index) => {
    console.log(`Adding listener to button ${index}`)
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('Direct button click!')
      const serviceCard = btn.closest('.service-card')
      if(serviceCard) {
        serviceCard.classList.toggle('flipped')
        console.log('Card flipped via direct listener')
      }
    })
  })

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
  
  // Initialize 3D viewer after a short delay to ensure Three.js is loaded
  setTimeout(() => {
    init3DViewer()
    initMap()
    initCarCards()
  }, 100)
})

function init3DViewer() {
  try {
    canvas = document.getElementById('three-canvas')
    if (!canvas) return
    
    renderer = new THREE.WebGLRenderer({canvas, antialias:true})
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    
    function resize(){
      const rect = canvas.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height, false)
      camera.aspect = rect.width / rect.height
      camera.updateProjectionMatrix()
    }
    
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0f18)
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
    camera.position.set(3, 2, 4)
    controls = new THREE.OrbitControls(camera, canvas)
    controls.enableDamping = true
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(3,4,2)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff, .3))
    const geom = new THREE.BoxGeometry(1.6, .8, 3)
    const mat = new THREE.MeshStandardMaterial({ color: 0x2dd4bf, roughness:.4, metalness:.1 })
    cube = new THREE.Mesh(geom, mat)
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

    // Camera buttons
    const btnExt = document.getElementById('btn-ext')
    const btnInt = document.getElementById('btn-int')
    const btnPrev = document.getElementById('btn-prev')
    const btnNext = document.getElementById('btn-next')
    const btnVr = document.getElementById('btn-vr')
    
    if(btnExt) btnExt.addEventListener('click', ()=> camera.position.set(3,2,4))
    if(btnInt) btnInt.addEventListener('click', ()=> camera.position.set(0.2, 0.8, 0.6))
    if(btnPrev) btnPrev.addEventListener('click', ()=>{
      modelIndex = (modelIndex - 1 + models.length) % models.length
      setModelByName(models[modelIndex])
    })
    if(btnNext) btnNext.addEventListener('click', ()=>{
      modelIndex = (modelIndex + 1) % models.length
      setModelByName(models[modelIndex])
    })
    if(btnVr) btnVr.addEventListener('click', ()=> alert('WebXR/AR будет подключён позже (заглушка).'))
    
  } catch (error) {
    console.error('3D Viewer initialization failed:', error)
  }
}

function initMap() {
  try {
    if (typeof L === 'undefined') return
    
    map = L.map('leaflet', { zoomControl: true }).setView([47.9105, 33.3918], 12)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map)

    const districts = [
      { name: 'Центрально-Городской', coord: [47.908, 33.391], cars:['sedan','van'] },
      { name: 'Покровский', coord: [47.951, 33.417], cars:['sedan','wagon'] },
      { name: 'Саксаганский', coord: [47.907, 33.43], cars:['van','wagon'] },
    ]

    markers = districts.map(d=>{
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

    activeTypes = new Set(models)
    $$('.flt').forEach(cb=>{
      cb.addEventListener('change', ()=>{
        if(cb.checked) activeTypes.add(cb.value); else activeTypes.delete(cb.value)
        markers.forEach(({marker, data})=>{
          const visible = data.cars.some(c=>activeTypes.has(c))
          if(visible){ marker.addTo(map) } else { map.removeLayer(marker) }
        })
      })
    })
  } catch (error) {
    console.error('Map initialization failed:', error)
  }
}

function initCarCards() {
  $$('.car-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      setModelByName(card.dataset.model)
      location.hash = '#viewer'
      document.getElementById('viewer').scrollIntoView({behavior:'smooth'})
    })
  })
}

function setModelByName(name){
  const idx = models.indexOf(name)
  modelIndex = idx>=0 ? idx : 0
  updateSpecs()
  if(cube) {
    const colorMap = {sedan:0x2dd4bf, van:0x60a5fa, wagon:0xf59e0b}
    cube.material.color.setHex(colorMap[models[modelIndex]])
  }
}

function updateSpecs(){
  if(!specsTable) return
  const key = models[modelIndex]
  const s = specsData[key]
  specsTable.innerHTML = `<tr><td>${s.type}</td><td>${s.price}</td><td>${s.km}</td><td>${s.cap}</td></tr>`
}

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


