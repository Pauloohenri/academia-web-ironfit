document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  const testimonials = document.querySelectorAll(".testimonial")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("prev-testimonial")
  const nextBtn = document.getElementById("next-testimonial")
  let currentTestimonial = 0

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    testimonials[index].classList.add("active")
    dots[index].classList.add("active")
    currentTestimonial = index
  }

  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index)
      })
    })
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
      showTestimonial(currentTestimonial)
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length
      showTestimonial(currentTestimonial)
    })
  }

  if (testimonials.length > 0) {
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length
      showTestimonial(currentTestimonial)
    }, 5000)
  }

  const tabBtns = document.querySelectorAll(".tab-btn")

  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab")

        
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"))
        document.querySelectorAll(".tab-pane").forEach((p) => p.classList.remove("active"))

        btn.classList.add("active")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // calcula o preço das coisas]
  const calculateBtn = document.getElementById("calculate-btn")

  if (calculateBtn) {
    calculateBtn.addEventListener("click", calculatePrice)
  }

  function calculatePrice() {
    const planType = document.getElementById("plan-type").value
    const planDuration = Number.parseInt(document.getElementById("plan-duration").value)
    const addPersonal = Number.parseInt(document.getElementById("add-personal").value)
    const addTowel = Number.parseInt(document.getElementById("add-towel").value)

    let basePlanPrice = 0
    let planName = ""

    switch (planType) {
      case "basic":
        basePlanPrice = 89.9
        planName = "Básico"
        break
      case "premium":
        basePlanPrice = 129.9
        planName = "Premium"
        break
      case "family":
        basePlanPrice = 199.9
        planName = "Família"
        break
    }

    let durationDiscount = 0
    let durationText = ""

    switch (planDuration) {
      case 1:
        durationDiscount = 0
        durationText = "1 mês"
        break
      case 3:
        durationDiscount = 0.05
        durationText = "3 meses"
        break
      case 6:
        durationDiscount = 0.1
        durationText = "6 meses"
        break
      case 12:
        durationDiscount = 0.15
        durationText = "12 meses"
        break
    }

    let personalPrice = 0
    let personalText = ""

    switch (addPersonal) {
      case 0:
        personalPrice = 0
        personalText = "Não"
        break
      case 4:
        personalPrice = 320
        personalText = "4 sessões/mês"
        break
      case 8:
        personalPrice = 560
        personalText = "8 sessões/mês"
        break
      case 12:
        personalPrice = 720
        personalText = "12 sessões/mês"
        break
    }

    let towelPrice = 0
    let towelText = ""

    switch (addTowel) {
      case 0:
        towelPrice = 0
        towelText = "Não"
        break
      case 1:
        towelPrice = 30
        towelText = "Sim"
        break
    }

    const planPriceWithDiscount = basePlanPrice * (1 - durationDiscount)
    const totalMonthlyPrice = planPriceWithDiscount + towelPrice
    const totalPrice = totalMonthlyPrice * planDuration + personalPrice

    const planSummary = document.getElementById("plan-summary")
    planSummary.innerHTML = `
            <p><strong>Plano:</strong> ${planName} - R$ ${basePlanPrice.toFixed(2)}/mês</p>
            <p><strong>Duração:</strong> ${durationText}</p>
            <p><strong>Desconto:</strong> ${(durationDiscount * 100).toFixed(0)}%</p>
            <p><strong>Valor do plano com desconto:</strong> R$ ${planPriceWithDiscount.toFixed(2)}/mês</p>
            <p><strong>Personal Trainer:</strong> ${personalText}</p>
            <p><strong>Serviço de toalhas:</strong> ${towelText}</p>
        `

    const totalPriceElement = document.getElementById("total-price")
    totalPriceElement.textContent = `R$ ${totalPrice.toFixed(2)}`

    const monthlyPriceElement = document.getElementById("monthly-price")
    if (planDuration > 1) {
      monthlyPriceElement.textContent = `(Equivalente a R$ ${(totalPrice / planDuration).toFixed(2)} por mês)`
    } else {
      monthlyPriceElement.textContent = ""
    }
  }

  const galleryItems = document.querySelectorAll(".gallery-item")
  const galleryDots = document.querySelectorAll(".gallery-dot")
  const galleryPrev = document.getElementById("gallery-prev")
  const galleryNext = document.getElementById("gallery-next")
  let currentGalleryItem = 0

  function showGalleryItem(index) {
    galleryItems.forEach((item) => item.classList.remove("active"))
    galleryDots.forEach((dot) => dot.classList.remove("active"))

    galleryItems[index].classList.add("active")
    galleryDots[index].classList.add("active")
    currentGalleryItem = index
  }

  if (galleryDots.length > 0) {
    galleryDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showGalleryItem(index)
      })
    })
  }

  if (galleryPrev) {
    galleryPrev.addEventListener("click", () => {
      currentGalleryItem = (currentGalleryItem - 1 + galleryItems.length) % galleryItems.length
      showGalleryItem(currentGalleryItem)
    })
  }

  if (galleryNext) {
    galleryNext.addEventListener("click", () => {
      currentGalleryItem = (currentGalleryItem + 1) % galleryItems.length
      showGalleryItem(currentGalleryItem)
    })
  }


  if (galleryItems.length > 0) {
    setInterval(() => {
      currentGalleryItem = (currentGalleryItem + 1) % galleryItems.length
      showGalleryItem(currentGalleryItem)
    }, 5000)
  }

  const accordionItems = document.querySelectorAll(".accordion-item")

  if (accordionItems.length > 0) {
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header")

      header.addEventListener("click", () => {
       
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })

      
        item.classList.toggle("active")
      })
    })
  }
// validar o form 
  const matriculaForm = document.getElementById("matricula-form")

  if (matriculaForm) {
    matriculaForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (validateForm()) {
        submitForm()
      }
    })
  }

  function validateForm() {
    let isValid = true

   
    document.querySelectorAll(".error-message").forEach((error) => {
      error.textContent = ""
    })

    // Valida o nome pra ser completo
    const nome = document.getElementById("nome")
    if (!nome.value.trim()) {
      document.getElementById("nome-error").textContent = "Por favor, informe seu nome completo"
      isValid = false
    }

    // Valida o email tambem
    const email = document.getElementById("email")
    if (!email.value.trim()) {
      document.getElementById("email-error").textContent = "Por favor, informe seu e-mail"
      isValid = false
    } else if (!isValidEmail(email.value)) {
      document.getElementById("email-error").textContent = "Por favor, informe um e-mail válido"
      isValid = false
    }

    // e o telefone se e valido
    const telefone = document.getElementById("telefone")
    if (!telefone.value.trim()) {
      document.getElementById("telefone-error").textContent = "Por favor, informe seu telefone"
      isValid = false
    } else if (!isValidPhone(telefone.value)) {
      document.getElementById("telefone-error").textContent = "Por favor, informe um telefone válido"
      isValid = false
    }

    // valida nascimento
    const dataNascimento = document.getElementById("data-nascimento")
    if (!dataNascimento.value) {
      document.getElementById("data-nascimento-error").textContent = "Por favor, informe sua data de nascimento"
      isValid = false
    } else if (!isValidAge(dataNascimento.value)) {
      document.getElementById("data-nascimento-error").textContent = "Você deve ter pelo menos 14 anos"
      isValid = false
    }

    // Valida endereço da pessoa
    const endereco = document.getElementById("endereco")
    if (!endereco.value.trim()) {
      document.getElementById("endereco-error").textContent = "Por favor, informe seu endereço"
      isValid = false
    }

    // a cidade
    const cidade = document.getElementById("cidade")
    if (!cidade.value.trim()) {
      document.getElementById("cidade-error").textContent = "Por favor, informe sua cidade"
      isValid = false
    }

    // estado
    const estado = document.getElementById("estado")
    if (!estado.value) {
      document.getElementById("estado-error").textContent = "Por favor, selecione seu estado"
      isValid = false
    }

    // e o plano
    const plano = document.getElementById("plano")
    if (!plano.value) {
      document.getElementById("plano-error").textContent = "Por favor, selecione um plano"
      isValid = false
    }

    // tempo
    const duracao = document.getElementById("duracao")
    if (!duracao.value) {
      document.getElementById("duracao-error").textContent = "Por favor, selecione a duração do plano"
      isValid = false
    }

    // aceitar termos , sem termo
    const termos = document.getElementById("termos")
    if (!termos.checked) {
      document.getElementById("termos-error").textContent = "Você deve concordar com os termos e condições"
      isValid = false
    }

    return isValid
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
  }

  function isValidPhone(phone) {
    const re = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    return re.test(phone);
  }
  

  function isValidAge(birthDate) {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }

    return age >= 14
  }

  const telefoneInput = document.getElementById("telefone")

  if (telefoneInput) {
    telefoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")

      if (value.length <= 10) {
        // Formata desse jeitoa AQUI -> (XX) XXXX-XXXX
        if (value.length > 2) {
          value = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`
        } else if (value.length > 0) {
          value = `(${value.substring(0, 2)}`
        }
      } else {
        // Formata desse jeitoa AQUI com 9 -> (XX) X XXXX-XXXX
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`
      }

      e.target.value = value
    })
  }


  async function submitForm() {
    const formData = new FormData(matriculaForm)
    const formObject = {}

    formData.forEach((value, key) => {
      formObject[key] = value
    })

    formObject.dataEnvio = new Date().toISOString()

    const submitBtn = document.getElementById("submit-btn")
    const originalBtnText = submitBtn.textContent
    submitBtn.textContent = "Enviando..."
    submitBtn.disabled = true

    try {
      await firebase.firestore().collection("matriculas").add(formObject)

      matriculaForm.style.display = "none"
      document.getElementById("form-success").style.display = "block"
      console.log("✅ Matrícula enviada para o Firestore:", formObject)
    } catch (error) {
      console.error("❌ Erro ao enviar matrícula:", error)
      document.getElementById("form-error").style.display = "block"
      submitBtn.textContent = originalBtnText
      submitBtn.disabled = false
    }
  }

  

  





})
