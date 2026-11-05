// Korean translations. English text lives in index.html and is used as the fallback.
const ko = {
  'nav.about': '소개',
  'nav.skills': '기술',
  'nav.projects': '프로젝트',
  'nav.activities': '활동',
  'nav.contact': '연락처',

  'hero.eyebrow': '한국외국어대학교 · 컴퓨터공학과',
  'hero.hello': '안녕하세요,',
  'hero.name': 'Yegun Lee입니다',
  'hero.lead': '게임, AI, 서버 분야에서 무언가를 만드는 것을 좋아하는 컴퓨터공학과 4학년입니다.',
  'hero.cta': '프로젝트 보기',

  'about.title': '소개',
  'about.body': '한국외국어대학교 컴퓨터공학과 4학년에 재학 중입니다. 아이디어를 실제로 동작하는 소프트웨어로 만드는 과정을 좋아하며, 현재 게임·AI·서버 개발 세 분야를 중심으로 공부하고 있습니다.',
  'about.school': '학교',
  'about.schoolValue': '한국외국어대학교 컴퓨터공학과',
  'about.year': '학년',
  'about.yearValue': '4학년',

  'interests.title': '관심 분야',
  'interests.game': '게임',
  'interests.gameBody': '게임 시스템을 설계하고 재미있는 인터랙티브 경험을 만드는 일에 관심이 있습니다.',
  'interests.ai': 'AI',
  'interests.aiBody': '언어 모델과 데이터를 실제 문제 해결에 적용하는 데 관심이 있습니다.',
  'interests.server': '서버',
  'interests.serverBody': '안정적인 백엔드 서비스와 API를 만드는 데 관심이 있습니다.',

  'skills.title': '기술',
  'skills.lang': '언어',
  'skills.fw': '프레임워크 & 라이브러리',
  'skills.tools': '도구',

  'projects.title': '프로젝트',
  'projects.repo': '저장소 보기 ↗',
  'projects.ohgood.tag': '데이터 청년캠퍼스 · 2023 · 팀 프로젝트',
  'projects.ohgood.name': '언감생心',
  'projects.ohgood.body': 'ChatGPT의 답변에서 언어 감수성을 분석하는 웹 서비스입니다. 장애 및 병력, 성과 가족, 사회적 신분, 출신, 욕설 등의 카테고리로 차별적이거나 불쾌감을 줄 수 있는 표현을 찾아 알려 줍니다.',
  'projects.ohgood.p1': 'React 프론트엔드에서 OpenAI Chat Completions API로 질문 전송',
  'projects.ohgood.p2': 'Python(pandas) 사전 매칭 기반 라벨링 스크립트로 학습 데이터셋 구축',
  'projects.ohgood.p3': '카테고리별로 주의가 필요한 단어를 표시해 답변을 검토할 수 있도록 구성',

  'act.title': '활동 & 수상',
  'act.award.tag': '수상 · 2023',
  'act.award.name': '용인시 SW/AI 해커톤 — 장려상',
  'act.award.body': '2023 용인시 SW/AI 해커톤에서 장려상을 수상했습니다.',
  'act.gdsc.tag': '동아리',
  'act.gdsc.name': 'GDSC (Google Developer Student Clubs)',
  'act.gdsc.body': 'Google이 지원하는 대학생 개발자 커뮤니티에서 동료들과 함께 배우고 개발했습니다.',

  'contact.title': '연락처',
  'contact.body': '프로젝트, 협업 등 어떤 이야기든 편하게 연락 주세요.',
};

const nodes = document.querySelectorAll('[data-i18n]');
const en = {};
nodes.forEach((el) => { en[el.dataset.i18n] = el.innerHTML; });

function setLang(lang) {
  const dict = lang === 'ko' ? ko : en;
  nodes.forEach((el) => {
    const value = dict[el.dataset.i18n] ?? en[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.documentElement.lang = lang;
  document.title = lang === 'ko' ? 'Yegun Lee — 포트폴리오' : 'Yegun Lee — Portfolio';
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-toggle button').forEach((b) => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

const saved = localStorage.getItem('lang');
setLang(saved || (navigator.language.startsWith('ko') ? 'ko' : 'en'));

document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach((s) => {
  s.classList.add('reveal');
  observer.observe(s);
});
