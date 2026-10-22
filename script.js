(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const galleryItems = [
  {
    "file": "gym-floor.jpg",
    "title": "The training floor",
    "alt": "A wide look across the equipment area."
  },
  {
    "file": "functional-training-zone.jpg",
    "title": "Functional training",
    "alt": "Open turf and functional training space."
  },
  {
    "file": "trainer-strength.jpg",
    "title": "Strength training",
    "alt": "A member working through a strength movement."
  },
  {
    "file": "most-muscular-award.jpg",
    "title": "Competition recognition",
    "alt": "Award photo marked Most Muscular Overall, 1st Prize."
  },
  {
    "file": "bodybuilding-competition.jpg",
    "title": "On the competition stage",
    "alt": "A bodybuilding competition moment."
  },
  {
    "file": "bodybuilding-pose.jpg",
    "title": "Bodybuilding pose",
    "alt": "A stage-ready pose from a competition setting."
  },
  {
    "file": "group-training.jpg",
    "title": "Training together",
    "alt": "Members sharing the floor."
  },
  {
    "file": "training-session.jpg",
    "title": "Training session",
    "alt": "A candid moment from a gym session."
  },
  {
    "file": "competition-award.jpg",
    "title": "Awards and milestones",
    "alt": "A competition event and award presentation."
  },
  {
    "file": "gym-celebration.jpg",
    "title": "Gym community",
    "alt": "A celebration with the gym team."
  },
  {
    "file": "team-stage.jpg",
    "title": "Team on stage",
    "alt": "Athletes and team members at a bodybuilding event."
  },
  {
    "file": "gym-exterior.jpg",
    "title": "Find the arena",
    "alt": "The exterior of Pradeep Fitness Arena."
  },
  {
    "file": "member-leg-training.jpg",
    "title": "Leg training",
    "alt": "A member using a leg training machine."
  },
  {
    "file": "equipment-detail.jpg",
    "title": "Equipment detail",
    "alt": "Strength equipment on the gym floor."
  }
];
  const reviewItems = [
  {
    "name": "Balunaika R Balunaika R",
    "stars": 5,
    "text": "Good gym, amazing trainer and amazing talent. Varun and Pradeep Fitness Arena are the backbone!"
  },
  {
    "name": "spakiiee",
    "stars": 5,
    "text": "Good gym. Varun sir is very talented and the training is next level."
  },
  {
    "name": "Sushmita Bhavi",
    "stars": 5,
    "text": "Great selection of strength equipment, friendly staff and a welcoming atmosphere. Clean, well maintained, and supportive of personal fitness goals."
  },
  {
    "name": "Geetha S",
    "stars": 5,
    "text": "One of the best gyms around, with good equipment, a friendly environment and helpful training from Pradeep sir."
  },
  {
    "name": "Raju Gouda S Patil",
    "stars": 5,
    "text": "Good training, helpful professionals and nutrition guidance are the highlights mentioned in this review."
  },
  {
    "name": "Dr Ashwini Kamath",
    "stars": 5,
    "text": "Starting the gym felt intimidating, but the encouragement from the trainers made it easier to attend consistently. A clean, motivating environment with helpful coaches."
  },
  {
    "name": "Rizwan I Kuravatti",
    "stars": 5,
    "text": "Top-notch facilities, clean and well maintained equipment, friendly knowledgeable staff, and a variety of classes that keep workouts exciting."
  },
  {
    "name": "Shashi Rajkumar",
    "stars": 5,
    "text": "Appreciates Varun sir's dedication, kind approach and effort to involve everyone in the workout."
  },
  {
    "name": "Shivakumar Shraveen",
    "stars": 5,
    "text": "The gym is clean and well maintained, with a wide range of equipment. Trainers are knowledgeable, motivating and willing to help."
  },
  {
    "name": "Bharath Bhushan",
    "stars": 5,
    "text": "The atmosphere is really good for working out, and the coaches are determined and friendly."
  },
  {
    "name": "Amith Ys",
    "stars": 5,
    "text": "Modern machines and fitness programs suited to different goals, including weight loss, muscle gain and general fitness. Trainers provide personalized guidance."
  },
  {
    "name": "Monisha Gowda",
    "stars": 5,
    "text": "Knowledgeable, approachable trainers and personalized workout plans. The group classes are diverse, fun and help members stay consistent."
  },
  {
    "name": "Sangeetha Pradeep",
    "stars": 5,
    "text": "A positive, rewarding fitness experience with good facilities, knowledgeable trainers, diverse classes and a strong sense of community."
  },
  {
    "name": "Khanak Mavani",
    "stars": 5,
    "text": "Great equipment, trainers and community. The aerobic classes are fun, and the trainer takes time to explain exercises in detail."
  },
  {
    "name": "RSRS Santhosh",
    "stars": 4,
    "text": "Good equipment and space for bodyweight training and calisthenics. The reviewer suggested making group classes such as yoga and HIIT more regular."
  },
  {
    "name": "Mathangi VK",
    "stars": 5,
    "text": "Great trainers, equipment, cleanliness and workout environment. The attention and motivation from trainers stand out."
  },
  {
    "name": "namit kumar",
    "stars": 5,
    "text": "The trainers put in a lot of effort. Special mention to Varun, described as a dedicated and friendly buddy."
  },
  {
    "name": "Sujazz",
    "stars": 5,
    "text": "A great local gym with experienced trainers, good equipment and friendly people. Varun is praised for being kind and believing in members."
  },
  {
    "name": "Pavan Kumar",
    "stars": 5,
    "text": "A good fitness centre with equipment and trainers that the reviewer recommends to people in the locality."
  },
  {
    "name": "Varshitha SN",
    "stars": 5,
    "text": "Trainers are friendly and take an interest whatever your fitness level. Daily check-ins helped make a difference to energy and consistency."
  },
  {
    "name": "Madhu P Gowda",
    "stars": 5,
    "text": "Praises the training approach, equipment and hygiene, and describes the trainers and owners as down to earth and supportive."
  },
  {
    "name": "Arya Jain",
    "stars": 5,
    "text": "Great trainers, well maintained equipment, hygienic facilities and a friendly environment. The reviewer says the gym helped a lot."
  },
  {
    "name": "narasimh amurthy garuda",
    "stars": 5,
    "text": "Credits trainer Varun with helping on a weight-gain goal, from 52 kg to 68 kg, and recommends the gym."
  },
  {
    "name": "Sharannya ise2022",
    "stars": 5,
    "text": "A great experience at Pradeep Fitness Arena, with well-equipped facilities and professional trainers."
  },
  {
    "name": "SAI KIRAN",
    "stars": 5,
    "text": "As a beginner, the reviewer had workout and weight-loss doubts and appreciated Gowri Shankar sir's guidance and the equipment."
  },
  {
    "name": "Chetan D",
    "stars": 5,
    "text": "An amazing place to learn, with coaches who train personally. The reviewer says it is 100% worth it."
  }
];

  const gallery = $('#gallery-grid');
  const reviewsGrid = $('#reviews-grid');
  const toggleButton = $('#reviews-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  galleryItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-item reveal';
    button.type = 'button';
    button.dataset.galleryIndex = String(index);
    button.setAttribute('aria-label', `View photo: ${item.title}`);
    button.innerHTML = `<img src="assets/media/${item.file}" alt="${escapeHtml(item.alt)}" loading="lazy"><span class="gallery-zoom" aria-hidden="true">↗</span><span class="gallery-meta"><small>${String(index + 1).padStart(2, '0')} / ${String(galleryItems.length).padStart(2, '0')}</small><strong>${escapeHtml(item.title)}</strong></span>`;
    gallery.appendChild(button);
  });

  function reviewCard(review, index) {
    const card = document.createElement('article');
    card.className = `review-card${index >= 9 ? ' is-hidden' : ''}`;
    card.dataset.reviewIndex = String(index);
    const stars = '★'.repeat(review.stars) + '☆'.repeat(5 - review.stars);
    const first = (review.name.trim().charAt(0) || 'M').toUpperCase();
    card.innerHTML = `<div class="review-top"><span class="review-avatar" aria-hidden="true">${escapeHtml(first)}</span><span class="review-person"><strong>${escapeHtml(review.name)}</strong><small>Member review</small></span><span class="review-stars" aria-label="${review.stars} out of 5 stars">${stars}</span></div><blockquote>“${escapeHtml(review.text)}”</blockquote><div class="review-bottom"><span>SHARED FEEDBACK</span><span>${review.stars}/5 STARS</span></div>`;
    return card;
  }
  reviewItems.forEach((review, index) => reviewsGrid.appendChild(reviewCard(review, index)));

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  // Mobile navigation: closes after a destination is selected and when Escape is pressed.
  const menuToggle = $('.menu-toggle');
  const primaryNav = $('#primary-nav');
  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    primaryNav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  $$('#primary-nav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); }, { passive: true });

  // Reveal elements on scroll, with a no-observer fallback so content never stays hidden.
  const revealElements = $$('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  // Show a compact review grid first; reveal the remaining text cards on demand.
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    const nextExpanded = !isExpanded;
    $$('.review-card', reviewsGrid).forEach((card, index) => {
      if (index >= 9) card.classList.toggle('is-hidden', !nextExpanded);
    });
    toggleButton.setAttribute('aria-expanded', String(nextExpanded));
    toggleButton.innerHTML = nextExpanded ? 'Show fewer reviews <span aria-hidden="true">−</span>' : 'Show all reviews <span aria-hidden="true">＋</span>';
    if (nextExpanded) {
      $$('.review-card', reviewsGrid).forEach((card, index) => { if (index >= 9) card.classList.add('is-visible'); });
    }
  });

  // Accessible image lightbox with keyboard and button navigation.
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lightbox-image');
  const lightboxCaption = $('#lightbox-caption');
  let currentGalleryIndex = 0;
  function openLightbox(index) {
    currentGalleryIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentGalleryIndex];
    lightboxImage.src = `assets/media/${item.file}`;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = item.title;
    lightbox.classList.remove('is-closing');
    if (!lightbox.open) {
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
      else lightbox.setAttribute('open', '');
    }
    closingLightbox = false;
    document.body.classList.add('lightbox-open');
    $('#lightbox-close').focus();
  }
  let closingLightbox = false;
  function closeLightbox() {
    if (closingLightbox || !lightbox.open) return;
    closingLightbox = true;
    lightbox.classList.add('is-closing');
    window.setTimeout(() => {
      if (typeof lightbox.close === 'function' && lightbox.open) lightbox.close();
      else lightbox.removeAttribute('open');
      lightbox.classList.remove('is-closing');
      document.body.classList.remove('lightbox-open');
      closingLightbox = false;
    }, reducedMotion ? 0 : 180);
  }
  function stepLightbox(direction) { openLightbox(currentGalleryIndex + direction); }
  gallery.addEventListener('click', (event) => {
    const item = event.target.closest('[data-gallery-index]');
    if (item) openLightbox(Number(item.dataset.galleryIndex));
  });
  $('#lightbox-close').addEventListener('click', closeLightbox);
  $('#lightbox-prev').addEventListener('click', () => stepLightbox(-1));
  $('#lightbox-next').addEventListener('click', () => stepLightbox(1));
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  lightbox.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
  document.addEventListener('keydown', (event) => {
    if (!lightbox.open) return;
    if (event.key === 'Escape') { event.preventDefault(); closeLightbox(); }
    if (event.key === 'ArrowRight') stepLightbox(1);
    if (event.key === 'ArrowLeft') stepLightbox(-1);
  });

  // Keep the mobile call shortcut away from the opening hero and contact form.
  const heroSection = $('.hero');
  const contactSection = $('#contact');
  function updateMobileCall() {
    if (window.innerWidth > 760) {
      document.body.classList.remove('show-mobile-call');
      return;
    }
    const heroPassed = heroSection.getBoundingClientRect().bottom < 0;
    const contactVisible = contactSection.getBoundingClientRect().top < window.innerHeight && contactSection.getBoundingClientRect().bottom > 0;
    document.body.classList.toggle('show-mobile-call', heroPassed && !contactVisible);
  }
  window.addEventListener('scroll', updateMobileCall, { passive: true });
  window.addEventListener('resize', updateMobileCall, { passive: true });
  updateMobileCall();

  // Footer date remains correct when the site is reused in future years.
  $('#year').textContent = String(new Date().getFullYear());

  // Highlight current navigation section without depending on an external library.
  if ('IntersectionObserver' in window) {
    const sections = $$('main section[id]');
    const navLinks = $$('#primary-nav a[href^="#"]');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
