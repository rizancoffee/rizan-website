// ==========================================
// 1. نظام الترجمة واللغات (Bilingual Translation System)
// ==========================================
const translations = {
    ar: {
        nav_intro: "المقدمة",
        nav_story: "القصة",
        nav_whoweare: "من نحن؟",
        nav_whyus: "لماذا نحن؟",
        nav_services: "خدماتنا",
        nav_targets: "الفئات المستهدفة",
        nav_partners: "عملائنا",
        nav_numbers: "أرقامنا",
        nav_contact: "تواصل معنا",
        cta_quote: "طلب عرض سعر",
        hero_title: "كاترينق القهوة المتنقل",
        hero_subtitle: "شريك مناسباتكم السعيدة",
        hero_tagline: "نتميز في تقديم مشروبات القهوة المختصة وخدمة الكورنر المتنقل",
        hero_btn: "اكتشف خدماتنا",
        story_title: "القصة",
        story_p1: "بدأت الرحلة كفكرة للعمل على تطوير خدمات تقديم القهوة والمشروبات الباردة في المؤتمرات والحفلات والمناسبات النسائية.",
        story_p2: "ومن ثم استمعنا بعناية لاحتياجات السوق ووجدنا الفرصة لتقديم خدمتنا كاترينق متنقل للقهوة المختصة.",
        story_p3: "في عام 2023 تأسست إدارة خدمة الكاترينق المتنقل على يد رائدة أعمال أرادت إحداث تغيير في طريقة تقديم القهوة في المملكة العربية السعودية. ومن خلال حرصها على الممارسات التجارية الذكية توصل فريق RIZAN CAFE إلى فكرة تحويل المقهى إلى كورنر متنقل بحيث نوفر لكم كافي متكامل داخل مقر مناسبتك.",
        who_title: "من نحن؟",
        who_p1: "نحن شركة سعودية رائدة في مجال الكافيهات المتنقلة في المملكة العربية السعودية.",
        who_p2: "متخصصون في تقديم كاترينق كافي متكامل في مقر مناسبتك ونقدم المشروبات الباردة والحارة بأجود أنواع البن المختص.",
        who_p3: "نحن قادرون على إنشاء وتنفيذ تصاميمكم الخاصة في الأكواب والمنيو وإضافات على الكاترينق بألوانكم الخاصة.",
        who_devices_header: "نستخدم أحدث أنواع الأجهزة في تقديم خدماتنا مثل:",
        who_device_1: "عرض المنيو على شاشة تفاعلية.",
        who_device_2: "مكينة قهوة محترفة.",
        who_device_3: "آلة طباعة محترفة لطباعة الصور، الأسماء، والأحرف على رغوة القهوة.",
        whyus_title: "لماذا نحن؟",
        whyus_subtitle: "سر تميزنا واختيار عملائنا لنا",
        whyus_c1_title: "دفع آلي سهل",
        whyus_c1_desc: "نوفر حلول دفع رقمية متكاملة وسريعة لخدمة ضيوفكم وتسهيل التعامل المالي.",
        whyus_c2_title: "هدايا وخدمات مجانية",
        whyus_c2_desc: "نحرص على تقديم إضافات مميزة وهدايا مجانية تضفي بهجة إضافية على مناسبتكم.",
        whyus_c3_title: "التنظيم والترتيب والسرعة",
        whyus_c3_desc: "نعمل باحترافية عالية تضمن سرعة التحضير والتقديم مع الحفاظ على النظافة والترتيب المطلق.",
        whyus_c4_title: "سهولة التواصل معنا",
        whyus_c4_desc: "فريق خدمة العملاء متواجد على مدار الساعة للرد على استفساراتكم وتلبية طلباتكم وتعديلها.",
        vision_title: "رؤيتنا",
        vision_desc: "أن تكون خدمتنا الخيار الأفضل لتشغيل وإدارة الكورنرات المتنقلة في المملكة العربية السعودية، وأن نستمر في تحسين عملنا لتقديم خدمة أفضل.",
        vision_quote: "العميل يأتي أولاً وقبل كل شيء",
        mission_title: "مهمتنا",
        mission_desc: "أن نكون الكاترينق الأكثر موثوقية وقياسية في المملكة العربية السعودية. التميز والاحترافية والتطور لزيادة التوقعات لعملائنا الكرام، وسنتخذ كل الخطوات اللازمة لتحقيق رؤيتنا.",
        goal_title: "هدفنا",
        goal_desc: "وضع علامة تجارية باسم RIZAN CAFE على أنها أفضل مزود لحلول الكاترينق المتنقل في تقديم القهوة المختصة، والارتقاء إلى أعلى مستوى؛ تأكيداً وإظهاراً للإخلاص الذي لا يتزعزع لعملاء الأعمال.",
        services_title: "خدماتنا المميزة",
        services_subtitle: "نجمع بين الرقي والاحترافية لتلبية كافة تطلعاتكم",
        service_readmore: "اقرأ المزيد",
        service_request: "طلب الخدمة",
        service_1_title: "كاترينق القهوة",
        service_1_desc: "نتميز في تقديم مشروبات القهوة المختصة الساخنة والباردة بأجود المحاصيل والبن الفاخر، مع منيو تفاعلي وأجهزة احترافية متكاملة لضيوفكم.",
        service_2_title: "كاترينق العطور",
        service_2_desc: "فكرة مبتكرة لتقديم العطور والبخور وتطييب الضيوف في المناسبات الكبرى والنسائية بأسلوب فريد وراقٍ يعكس كرم ضيافتكم.",
        service_3_title: "تصاميم أكواب خاصة",
        service_3_desc: "نقوم بإنشاء وتصميم الأكواب والمنيو بألوانكم وشعاراتكم الخاصة، مع خدمة طباعة الصور والأسماء الفورية على رغوة القهوة لضيوفكم.",
        service_4_title: "نافورة الشوكولاتة",
        service_4_desc: "نافورة من الشوكولاتة البلجيكية الغنية والفاخرة، تقدم مع تشكيلة من الفواكه الطازجة مثل الفراولة والحلويات المتنوعة لإضفاء متعة مميزة.",
        targets_title: "الفئات المستهدفة",
        targets_subtitle: "نتشرف بخدمتكم في مختلف القطاعات والمناسبات",
        target_g1: "الفنادق",
        target_g2: "المنتجعات",
        target_g3: "المؤتمرات",
        target_g4: "قاعات الاحتفالات",
        target_g5: "الصالونات النسائية",
        target_g6: "المستشفيات",
        target_g7: "الجامعات والمدارس",
        partners_title: "شركاء نجاحنا",
        partners_subtitle: "فخورون بثقة كبرى الجهات والشركات بنا",
        number_1_text: "خدمة كاترينق منوعة",
        number_1_sub: "(قهوة، عطور، حلويات)",
        number_2_text: "سنوات من التميز والريادة",
        number_2_sub: "(منذ تأسيسنا في 2023)",
        number_3_text: "نسبة رضا عملائنا",
        number_3_sub: "ضمان الجودة والاحترافية",
        form_title: "احصل على عرض سعر لمناسبتك",
        form_name_label: "الاسم الكريم",
        form_name_placeholder: "أدخل اسمك الكامل",
        form_phone_label: "رقم الجوال",
        form_phone_placeholder: "05xxxxxxxx",
        form_email_label: "البريد الإلكتروني",
        form_email_placeholder: "name@example.com",
        form_service_label: "الخدمة المطلوبة",
        form_service_select: "اختر الخدمة...",
        form_opt_coffee: "كاترينق القهوة المختصة",
        form_opt_perfume: "كاترينق العطور الراقية",
        form_opt_cups: "تصاميم أكواب خاصة وطباعة",
        form_opt_chocolate: "نافورة الشوكولاتة والفواكه",
        form_opt_all: "باقة متكاملة (كل الخدمات)",
        form_message_label: "تفاصيل المناسبة (التاريخ، المكان، عدد الحضور)",
        form_message_placeholder: "اكتب هنا أي تفاصيل إضافية...",
        form_submit: "إرسال الطلب الآن",
        contact_heading: "تواصل معنا مباشرة",
        contact_wa_span: "واتساب مباشرة",
        contact_email_span: "البريد الإلكتروني",
        contact_follow: "تابعنا على شبكاتنا الاجتماعية",
        contact_qr_text: "امسح الكود لطلب الخدمة وحفظ بيانات الاتصال",
        footer_text: "جميع الحقوق محفوظة &copy; 2026 ريزان كافيه Rizan Cafe | تصميم وتطوير احترافي"
    },
    en: {
        nav_intro: "Intro",
        nav_story: "Story",
        nav_whoweare: "Who We Are",
        nav_whyus: "Why Us",
        nav_services: "Services",
        nav_targets: "Target Groups",
        nav_partners: "Partners",
        nav_numbers: "Our Numbers",
        nav_contact: "Contact Us",
        cta_quote: "Request a Quote",
        hero_title: "Mobile Coffee Catering",
        hero_subtitle: "Your Partner in Happy Occasions",
        hero_tagline: "We excel in providing specialty coffee drinks and mobile corner services",
        hero_btn: "Explore Services",
        story_title: "Our Story",
        story_p1: "The journey began as an idea to develop catering services for coffee and cold beverages in conferences, events, and ladies parties.",
        story_p2: "Then we carefully listened to the market needs and found the opportunity to offer our service as mobile specialty coffee catering.",
        story_p3: "In 2023, the mobile catering service was founded by a female entrepreneur who wanted to make a change in the way coffee is served in the Kingdom of Saudi Arabia. Through smart business practices, the Rizan Cafe team realized the concept of bringing a fully integrated cafe corner inside your event venue.",
        who_title: "Who We Are",
        who_p1: "We are a leading Saudi company in the field of mobile cafes in the Kingdom of Saudi Arabia.",
        who_p2: "Specialized in providing complete cafe catering inside your event venue, serving cold and hot drinks with the finest specialty coffee beans.",
        who_p3: "We are capable of creating and executing your custom designs for cups, menus, and custom-colored catering additions.",
        who_devices_header: "We use the latest equipment in providing our services, such as:",
        who_device_1: "Displaying the menu on an interactive screen.",
        who_device_2: "Professional espresso machine.",
        who_device_3: "Professional printing machine to print photos, names, and letters on the coffee foam.",
        whyus_title: "Why Us?",
        whyus_subtitle: "The secret of our excellence and why clients choose us",
        whyus_c1_title: "Easy E-Payment",
        whyus_c1_desc: "We provide integrated, fast digital payment solutions to serve your guests and facilitate financial transactions.",
        whyus_c2_title: "Free Gifts & Extras",
        whyus_c2_desc: "We are keen to offer special additions and free gifts that bring extra joy to your occasion.",
        whyus_c3_title: "Organization & Speed",
        whyus_c3_desc: "We work with high professionalism ensuring fast preparation and serving while maintaining absolute neatness.",
        whyus_c4_title: "Easy Communication",
        whyus_c4_desc: "Our customer service team is available around the clock to answer your inquiries and meet/modify your requests.",
        vision_title: "Our Vision",
        vision_desc: "To be the preferred choice for operating and managing mobile corners in the Kingdom of Saudi Arabia, and to continuously improve our work to provide the best service.",
        vision_quote: "Customer comes first and foremost",
        mission_title: "Our Mission",
        mission_desc: "To be the most reliable and standard catering service in Saudi Arabia. Striving for excellence, professionalism, and innovation to exceed the expectations of our valued clients, taking every step necessary to achieve our vision.",
        goal_title: "Our Goal",
        goal_desc: "To establish RIZAN CAFE as the best provider of mobile specialty coffee catering solutions and rise to the highest level, demonstrating unwavering dedication to our business clients.",
        services_title: "Our Services",
        services_subtitle: "We combine elegance and professionalism to meet all your expectations",
        service_readmore: "Read More",
        service_request: "Request Service",
        service_1_title: "Coffee Catering",
        service_1_desc: "We excel in providing hot and cold specialty coffee drinks with the finest crops and premium beans, interactive menu, and integrated professional equipment.",
        service_2_title: "Perfume Catering",
        service_2_desc: "An innovative concept to present perfumes, incense, and guest hospitality at major events and ladies parties in a unique style.",
        service_3_title: "Custom Cup Designs",
        service_3_desc: "We design and create cups and menus in your own colors and logos, with live photo/name printing on the coffee foam.",
        service_4_title: "Chocolate Fountain",
        service_4_desc: "A fountain of rich and premium Belgian chocolate, served with a selection of fresh fruits like strawberries and sweets.",
        targets_title: "Target Groups",
        targets_subtitle: "We are honored to serve you across various sectors and events",
        target_g1: "Hotels",
        target_g2: "Resorts",
        target_g3: "Conferences",
        target_g4: "Event Halls",
        target_g5: "Ladies Salons",
        target_g6: "Hospitals",
        target_g7: "Universities & Schools",
        partners_title: "Our Partners",
        partners_subtitle: "Proud of the trust of leading entities and corporations",
        number_1_text: "Diverse Catering Services",
        number_1_sub: "(Coffee, Perfume, Sweets)",
        number_2_text: "Years of Excellence & Leadership",
        number_2_sub: "(Since our establishment in 2023)",
        number_3_text: "Client Satisfaction Rate",
        number_3_sub: "Guaranteed Quality & Professionalism",
        form_title: "Get a Quote for Your Event",
        form_name_label: "Full Name",
        form_name_placeholder: "Enter your full name",
        form_phone_label: "Phone Number",
        form_phone_placeholder: "05xxxxxxxx",
        form_email_label: "Email Address",
        form_email_placeholder: "name@example.com",
        form_service_label: "Requested Service",
        form_service_select: "Choose service...",
        form_opt_coffee: "Specialty Coffee Catering",
        form_opt_perfume: "Premium Perfume Catering",
        form_opt_cups: "Custom Cups & Printing",
        form_opt_chocolate: "Chocolate Fountain & Fruits",
        form_opt_all: "All Services Package",
        form_message_label: "Event Details (Date, Location, Guests Count)",
        form_message_placeholder: "Write any additional details here...",
        form_submit: "Submit Request Now",
        contact_heading: "Contact Us Directly",
        contact_wa_span: "WhatsApp Directly",
        contact_email_span: "Email Address",
        contact_follow: "Follow Us on Social Media",
        contact_qr_text: "Scan code to request service and save contact details",
        footer_text: "All rights reserved &copy; 2026 Rizan Cafe | Professional Design & Development"
    }
};

const langToggleBtn = document.getElementById('lang-toggle');

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    
    // تطبيق الترجمة على النصوص
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'footer_text') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // تطبيق الترجمة على الـ Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
        const key = input.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            input.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // تبديل اتجاه ومجموعة لغة المستند
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (lang === 'en') {
        document.body.classList.add('ltr-mode');
    } else {
        document.body.classList.remove('ltr-mode');
    }

    // تحديث نص زر اللغة
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }

    // تعديل أيقونة سهم الاستكشاف حسب الاتجاه
    const exploreIcon = document.getElementById('explore-icon');
    if (exploreIcon) {
        exploreIcon.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    }
}

// الكشف الأولي عن اللغة المطلوبة
const savedLang = localStorage.getItem('lang') || 'ar';
setLanguage(savedLang);

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || 'ar';
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
    });
}

// ==========================================
// 2. تبديل الوضع الداكن والفاتح (Dark & Light Mode Toggle)
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'fas fa-sun';
} else {
    document.body.classList.remove('dark-theme');
    themeIcon.className = 'fas fa-moon';
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
});

// ==========================================
// 3. الشريط العلوي المتفاعل عند التمرير (Sticky Header)
// ==========================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// 4. معرض الصور التلقائي في الخلفية (Background Slideshow)
// ==========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}

// ==========================================
// 5. تأثير الظهور التدريجي للعناصر عند التمرير (Scroll Reveal)
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 120;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ==========================================
// 6. عداد الأرقام التفاعلي (Animated Counters)
// ==========================================
const numberVals = document.querySelectorAll('.number-val');
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    
    const numbersSection = document.getElementById('OurNumbers');
    if (!numbersSection) return;
    
    const sectionTop = numbersSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        countersAnimated = true;
        
        numberVals.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();
            
            function updateNumber(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easedProgress = progress * (2 - progress);
                const currentValue = Math.floor(easedProgress * target);
                
                if (target === 1200) {
                    counter.textContent = '+' + currentValue.toLocaleString();
                } else if (target === 100) {
                    counter.textContent = '%' + currentValue;
                } else {
                    counter.textContent = '+' + currentValue;
                }
                
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    if (target === 1200) {
                        counter.textContent = '+' + target.toLocaleString();
                    } else if (target === 100) {
                        counter.textContent = '%' + target;
                    } else {
                        counter.textContent = '+' + target;
                    }
                }
            }
            
            requestAnimationFrame(updateNumber);
        });
    }
}

window.addEventListener('scroll', animateCounters);
animateCounters();

// ==========================================
// 7. معالجة نموذج طلب عرض السعر تفاعلياً (Quote Form Handling)
// ==========================================
const quoteForm = document.getElementById('quote-form');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = quoteForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        const currentLang = localStorage.getItem('lang') || 'ar';
        
        const loadingText = currentLang === 'ar' ? 'جاري إرسال طلبك... <i class="fas fa-spinner fa-spin"></i>' : 'Sending request... <i class="fas fa-spinner fa-spin"></i>';
        const successButtonText = currentLang === 'ar' ? 'تم الإرسال بنجاح! <i class="fas fa-check"></i>' : 'Sent successfully! <i class="fas fa-check"></i>';
        const successMessageText = currentLang === 'ar' 
            ? 'شكرًا لتواصلك معنا! سنقوم بالرد عليك وتزويدك بعرض السعر المناسب في أقرب وقت.' 
            : 'Thank you for contacting us! We will get back to you with the quote as soon as possible.';
        
        submitBtn.innerHTML = loadingText;
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = successButtonText;
            submitBtn.style.backgroundColor = '#25D366';
            submitBtn.style.color = '#fff';
            
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success-msg';
            successMsg.style.color = '#25D366';
            successMsg.style.marginTop = '15px';
            successMsg.style.fontWeight = 'bold';
            successMsg.style.textAlign = 'center';
            successMsg.style.fontSize = '1.05em';
            successMsg.style.animation = 'fadeInUp 0.5s ease-out';
            successMsg.innerHTML = successMessageText;
            
            quoteForm.appendChild(successMsg);
            quoteForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
                successMsg.remove();
            }, 5000);
            
        }, 1500);
    });
}


// ==========================================
// 8. تحديد القسم النشط في الشريط العلوي عند التمرير (Active Navigation Link on Scroll)
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navigation a');

function highlightActiveSection() {
    let scrollY = window.pageYOffset || window.scrollY;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // offset from top of the page, minus the header height (~120px) to make the transition feel natural
        const sectionTop = current.offsetTop - 130; 
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Special case: if scrolled to the absolute bottom of the page, highlight the contact section
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#Contact') {
                link.classList.add('active');
            }
        });
    }
}

window.addEventListener('scroll', highlightActiveSection);
highlightActiveSection(); // Run on initial load
