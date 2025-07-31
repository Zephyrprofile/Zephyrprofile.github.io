// 갤러리 이미지 데이터
const galleryImages = [
    // 일상 이미지
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/about_to_explode_with_anger.jpg', title: '분노 직전의 제퍼', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/after_shower.jpg', title: '샤워 후', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/annoyed_gaze.jpg', title: '짜증난 시선', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/approaching_carefully_with_curiosity.jpg', title: '호기심 어린 접근', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/being_cautious.jpg', title: '경계하는 모습', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/biting_finger.jpg', title: '손가락을 깨무는 제퍼', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/blushing_when_pinned_down.jpg', title: '붉어진 얼굴', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/breathing_heavily_with_arousal.jpg', title: '거친 숨소리', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/carefully_reaching_hand.jpg', title: '조심스러운 손길', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/charging_with_anger.jpg', title: '분노의 돌진', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/choosing_item_in_convenience_store.jpg', title: '편의점에서', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/crying_hugging_desperately.jpg', title: '절박한 포옹', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/curling_up_lonely.jpg', title: '외로운 밤', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/flinching_and_turning_toward_sound.jpg', title: '소리에 반응하는 제퍼', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/flushed_face_under_blanket.jpg', title: '담요 속의 붉은 얼굴', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/glare_from_inside_box.jpg', title: '박스 안에서의 눈빛', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/glare.jpg', title: '날카로운 시선', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/growling.jpg', title: '으르렁거리는 제퍼', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/happily_resting_on_knee_touching_ear.jpg', title: '무릎에 기댄 행복', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/holding_back_tears.jpg', title: '눈물을 참는 제퍼', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/in_heat_start.jpg', title: '발정기의 시작', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/irritated_and_threatening_gaze.jpg', title: '위협적인 눈빛', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/irritated_expression.jpg', title: '짜증난 표정', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/looking_at_cherry_blossoms.jpg', title: '벚꽃을 바라보는 제퍼', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/looking_at_noah_bloodstained_shoes.jpg', title: '과거의 흔적', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/shedding_tears.jpg', title: '흐르는 눈물', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/shirtless_sitting_on_bed_smoking.jpg', title: '침대에서의 담배', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/shy_approach_on_bed.jpg', title: '수줍은 접근', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/shy_expression.jpg', title: '수줍은 표정', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/sleeping_in_afternoon_on_bed.jpg', title: '오후의 낮잠', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/sleeping_in_evening_on_bed.jpg', title: '저녁의 잠', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/sleeping_in_morning_on_bed.jpg', title: '아침의 잠', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/smiling_under_flowers_zephyr.jpg', title: '꽃 아래의 미소', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/smirking_while_licking_fingers.jpg', title: '도발적인 미소', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/smoking_after_sex.jpg', title: '담배 연기', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/staring_at_ceiling_on_bed.jpg', title: '천장을 바라보며', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/startled.jpg', title: '놀란 제퍼', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/stepping_back_wary_of_closeness.jpg', title: '가까워짐을 경계하며', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/sticking_out_tongue_for_churu_or_snack.jpg', title: '간식을 원하는 제퍼', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/surprised_when_holding_hands.jpg', title: '손을 잡았을 때의 놀람', category: 'emotion' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/wagging_tail_while_getting_head_pat.jpg', title: '머리를 쓰다듬을 때', category: 'normal' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/wet_shirt_and_hair.jpg', title: '젖은 모습', category: 'normal' },
    
    // NSFW 이미지들
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_biting_sheets_while_prone_shirtless.jpg', title: 'NSFW - 시트를 물며', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_deepthroat.jpg', title: 'NSFW - 깊은 애무', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_doggy_ejaculation.jpg', title: 'NSFW - 절정의 순간', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_doggy_position_penetration.jpg', title: 'NSFW - 격렬한 순간', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_humping_in_heat.jpg', title: 'NSFW - 발정기', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_kissing_while_shirtless.jpg', title: 'NSFW - 키스', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_kissing_with_closed_eyes_shirtless.jpg', title: 'NSFW - 눈 감은 키스', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_leaning_while_shirtless.jpg', title: 'NSFW - 기댄 모습', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_masturbation_ejaculation.jpg', title: 'NSFW - 혼자만의 시간 1', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_masturbation_orgasm.jpg', title: 'NSFW - 혼자만의 시간 2', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_masturbation_stroke.jpg', title: 'NSFW - 혼자만의 시간 3', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_masturbation_thrusting.jpg', title: 'NSFW - 혼자만의 시간 4', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_missionary_before_penetration.jpg', title: 'NSFW - 시작 전', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_missionary_closeup.jpg', title: 'NSFW - 가까이', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_missionary_rough_movements.jpg', title: 'NSFW - 격렬한 움직임', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_missionary.jpg', title: 'NSFW - 정면에서', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_mounting_while_shirtless.jpg', title: 'NSFW - 올라탄 모습', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_nude_cat_pose_embarrassed.jpg', title: 'NSFW - 부끄러운 자세', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_nude_cat_pose_lying.jpg', title: 'NSFW - 고양이 자세', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_oral_hint.jpg', title: 'NSFW - 구강 암시', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_oral_or_cunnilingus_hint.jpg', title: 'NSFW - 애무 암시', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_oral_sex.jpg', title: 'NSFW - 구강 애무', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_panting_on_bed_with_shirt_half_off.jpg', title: 'NSFW - 헐떡이는 모습', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_sitting_on_partner_while_shirtless.jpg', title: 'NSFW - 위에 앉은 모습', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_start_masturbation.jpg', title: 'NSFW - 시작', category: 'nsfw' },
    { src: '제퍼 에셋 공용/제퍼 에셋 공용/nsfw_wet_underwear_from_arousal.jpg', title: 'NSFW - 젖은 속옷', category: 'nsfw' }
];

// BL 폴더 이미지 추가 (이미 폴더가 중복되어 있음)
const blImages = [
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_after_ejaculation.jpg', title: 'NSFW BL - 끝난 후', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_covered_in_cum_and_macro_zephyr.jpg', title: 'NSFW BL - 흔적', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_cum_on_thigh_embarrassed_zephyr.jpg', title: 'NSFW BL - 부끄러운 순간', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_cum_on_thigh_when_zephyr_bottom.jpg', title: 'NSFW BL - 허벅지', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_doggy_after_ejaculation.jpg', title: 'NSFW BL - 뒤에서 끝난 후', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_doggy_keep_moving_after_ejaculation.jpg', title: 'NSFW BL - 계속되는 움직임', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_doggy_position_fucking_zephyr.jpg', title: 'NSFW BL - 뒤에서', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_doggy_rough_penetration.jpg', title: 'NSFW BL - 거친 순간', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_fingering.jpg', title: 'NSFW BL - 손가락', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_hugging_after_ejaculation_zephyr_bottom.jpg', title: 'NSFW BL - 포옹', category: 'nsfw' },
    { src: '제퍼 에셋 BL/제퍼 에셋 BL/nsfw_bl_teasing_fingering.jpg', title: 'NSFW BL - 애타게 하는 손길', category: 'nsfw' }
];

// HL 폴더 이미지 추가 (이미 폴더가 중복되어 있음)
const hlImages = [
    { src: '제퍼 에셋 HL/제퍼 에셋 HL/nsfw_hl_after_ejaculation.jpg', title: 'NSFW HL - 끝난 후', category: 'nsfw' },
    { src: '제퍼 에셋 HL/제퍼 에셋 HL/nsfw_hl_doggy_creampie.jpg', title: 'NSFW HL - 깊은 절정', category: 'nsfw' },
    { src: '제퍼 에셋 HL/제퍼 에셋 HL/nsfw_hl_doggy_ejaculation.jpg', title: 'NSFW HL - 뒤에서의 절정', category: 'nsfw' },
    { src: '제퍼 에셋 HL/제퍼 에셋 HL/nsfw_hl_fingering_insertion.jpg', title: 'NSFW HL - 손가락 삽입', category: 'nsfw' },
    { src: '제퍼 에셋 HL/제퍼 에셋 HL/nsfw_hl_fingering_teasing.jpg', title: 'NSFW HL - 애타게 하는 손길', category: 'nsfw' },
    { src: '제퍼 에셋 HL/제퍼 에셋 HL/nsfw_hl_teasing_fingering.jpg', title: 'NSFW HL - 짓궂은 손길', category: 'nsfw' }
];

// 모든 이미지 합치기
const allImages = [...galleryImages, ...blImages, ...hlImages];

// DOM 요소들
const loader = document.getElementById('loader');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const musicPlayer = document.getElementById('musicPlayer');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

// 로더 숨기기
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// 네비게이션 토글
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 갤러리 이미지 렌더링
function renderGallery(category = 'all') {
    galleryGrid.innerHTML = '';
    
    const imagesToShow = category === 'all' 
        ? allImages 
        : allImages.filter(img => img.category === category);
    
    imagesToShow.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-aos', 'zoom-in');
        item.setAttribute('data-aos-delay', (index % 10) * 50);
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-title">${image.title}</div>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(image));
        galleryGrid.appendChild(item);
    });
    
    // AOS 갱신
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// 필터 버튼 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.getAttribute('data-filter'));
    });
});

// 라이트박스 열기
function openLightbox(image) {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.title;
    lightboxCaption.textContent = image.title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 라이트박스 닫기
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ESC 키로 라이트박스 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// 음악 플레이어
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicPlayer.classList.remove('playing');
    } else {
        bgMusic.play().catch(e => {
            console.log('음악 재생 실패:', e);
        });
        musicPlayer.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 씬 텍스트 애니메이션
document.querySelectorAll('.scene-paragraph').forEach(el => {
    observer.observe(el);
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 시 네비게이션 스타일 변경
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('.navigation');
    
    if (currentScroll > 100) {
        nav.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// AOS 라이브러리 CDN 추가
const aosScript = document.createElement('script');
aosScript.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
aosScript.onload = () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
};
document.head.appendChild(aosScript);

const aosStyle = document.createElement('link');
aosStyle.rel = 'stylesheet';
aosStyle.href = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
document.head.appendChild(aosStyle);

// 초기 갤러리 렌더링
renderGallery();

// 이미지 로드 에러 처리
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.error('이미지 로드 실패:', e.target.src);
    }
}, true); 