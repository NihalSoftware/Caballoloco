const routes = {
  home: renderHome,
  "noble-horses": renderNobleHorses,
  "horseart-events": renderEvents,
  "horse-art-collection": renderCollection,
  "horse-art-exibition": renderExhibition,
  "equine-therapy": renderEquineTherapy,
  "horse-ride": renderHorseRide,
  polocafecoffee: renderCoffee,
  gifting: renderGifting,
  "weekend-launch": renderWeekendLaunch,
  csr: renderAlliance,
  "copy-of-book-online-1": renderAlliance,
  "nihal-foundation": renderNihalFoundation,
  "copy-of-friendicoes": renderNihalFoundation,
  "student-space": renderStudentSpace,
  "copy-of-nihal-foundation": renderStudentSpace,
  contactus: renderContact,
  "cart-page": renderCartPage
};

const routeAliases = {
  csr: "copy-of-book-online-1",
  "nihal-foundation": "copy-of-friendicoes",
  "student-space": "copy-of-nihal-foundation"
};

const images = {
  logo: "https://static.wixstatic.com/media/788bde_c19405d379ff49648e4cab3e68da7725~mv2.jpg/v1/fill/w_155,h_160,al_c,lg_1,q_80,enc_avif,quality_auto/caballo-loco-art-gallery-logo.jpg",
  home1: "https://static.wixstatic.com/media/2596c5_921d2daff07c46e5a8648a05347c6c21~mv2.jpeg/v1/fit/w_480,h_362,q_90,enc_avif,quality_auto/2596c5_921d2daff07c46e5a8648a05347c6c21~mv2.jpeg",
  home2: "https://static.wixstatic.com/media/2596c5_1d6374340a6c4d45a8ab3a1a488ec68c~mv2.jpeg/v1/fit/w_480,h_513,q_90,enc_avif,quality_auto/2596c5_1d6374340a6c4d45a8ab3a1a488ec68c~mv2.jpeg",
  home3: "https://static.wixstatic.com/media/2596c5_ecc602dc0ffe474b872798fe8ccfcc32~mv2.jpeg/v1/fit/w_960,h_550,q_90,enc_avif,quality_auto/2596c5_ecc602dc0ffe474b872798fe8ccfcc32~mv2.jpeg",
  home4: "https://static.wixstatic.com/media/850a9c_549fd43517af41bcb230a9ae87e82499~mv2.jpg/v1/fit/w_480,h_576,q_90,enc_avif,quality_auto/850a9c_549fd43517af41bcb230a9ae87e82499~mv2.jpg",
  wild: "https://static.wixstatic.com/media/2596c5_4a6278d24e4b49d98dea8a367fa743b6~mv2.jpeg/v1/crop/x_80,y_0,w_1073,h_1280/fill/w_182,h_231,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-18%20at%2010_04_10%20AM.jpeg",
  edited: "https://static.wixstatic.com/media/850a9c_549fd43517af41bcb230a9ae87e82499~mv2.jpg/v1/crop/x_0,y_39,w_580,h_617/fill/w_182,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-17%20at%204_22_edited.jpg",
  collectionBanner: "https://static.wixstatic.com/media/850a9c_4300882535fa429f8f9cefa8e89f3a41~mv2.jpg/v1/fill/w_720,h_317,al_c,lg_1,q_80,enc_avif,quality_auto/850a9c_4300882535fa429f8f9cefa8e89f3a41~mv2.jpg",
  collection1: "https://static.wixstatic.com/media/2596c5_1de7b89d7f3c4242b3035368dc125740~mv2.jpeg/v1/fill/w_219,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-18%20at%2010_04_56%20AM.jpeg",
  collection2: "https://static.wixstatic.com/media/2596c5_1bdc2430486144cfad4cb9d06038d137~mv2.jpeg/v1/fill/w_219,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-17%20at%204_22_35%20PM%20(2).jpeg",
  collection3: "https://static.wixstatic.com/media/2596c5_a04fe4db169e491f8f2ddd364d3d54ec~mv2.jpeg/v1/fill/w_219,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-17%20at%204_22_35%20PM%20(1).jpeg",
  eventHorse: "https://static.wixstatic.com/media/2596c5_98ba91c3b269406e93d437d4673cb636~mv2.jpg/v1/crop/x_0,y_45,w_736,h_1147/fill/w_190,h_301,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Horse%20(1)_jfif.jpg",
  eventWhite: "https://static.wixstatic.com/media/2596c5_f3b2cc5abdde42f288486f2011583026~mv2.jpg/v1/fill/w_296,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84899742-f7b7-465b-8968-6153ece3fca4_jfif.jpg",
  eventColor: "https://static.wixstatic.com/media/2596c5_d9afc456257e43e4b180d46049fcdef4~mv2.jpeg/v1/fill/w_296,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-18%20at%2010_05_00%20AM.jpeg",
  therapy1: "https://static.wixstatic.com/media/2596c5_9ea5f19816ea40a1a295f0cf144ff0ea~mv2.jpg/v1/fill/w_296,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Equine-Assisted%20Therapy_jfif.jpg",
  therapy2: "https://static.wixstatic.com/media/2596c5_7a1d1351672846eeb25b67afc3ed18f8~mv2.jpg/v1/fill/w_296,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Equine%20Myofascial%20Release_jfif.jpg",
  therapy3: "https://static.wixstatic.com/media/2596c5_2075e754f92a4306959ee8feb5c1ee3c~mv2.jpg/v1/fill/w_296,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hippotherapy%20is%20more%20than%20just%20a%20therapy%20session%E2%80%A6_jfif.jpg",
  ride1: "https://static.wixstatic.com/media/2596c5_9923210f09e246f68f0fc54d220c4033~mv2.jpg/v1/crop/x_0,y_418,w_564,h_417/fill/w_444,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/download%20(2)_jfif.jpg",
  ride2: "https://static.wixstatic.com/media/2596c5_a8f643cbca5d4316b68aba43695abb40~mv2.jpg/v1/crop/x_0,y_1616,w_4000,h_2768/fill/w_435,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-pixabay-210237.jpg",
  coffee1: "https://static.wixstatic.com/media/2596c5_1a27e1b9b71b4ad986ea0a22436a0b46~mv2.jpeg/v1/fill/w_306,h_259,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2596c5_1a27e1b9b71b4ad986ea0a22436a0b46~mv2.jpeg",
  coffee2: "https://static.wixstatic.com/media/2596c5_4a89ee2d4c6f487b9404ff8207b13a35~mv2.jpeg/v1/crop/x_0,y_84,w_868,h_737/fill/w_306,h_259,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-05-06%20at%2010_50_23%20AM.jpeg"
};

const productData = [
  {
    slug: "the-valley",
    title: "The Valley",
    image: "https://static.wixstatic.com/media/850a9c_ab35396a5dad47c69079f2f7bdfbda15~mv2.jpg/v1/fit/w_1280,h_963,q_90/file.jpg",
    description: "A captivating print on canvas (24.30\" x 14\") that portrays the serene beauty of a valley scene by",
    artist: "Alakh Niswai",
    priceHtml: "Price &#8377;14,699.00"
  },
  {
    slug: "fullmoon-wisdom",
    title: "Fullmoon Wisdom",
    image: "https://static.wixstatic.com/media/2596c5_921d2daff07c46e5a8648a05347c6c21~mv2.jpeg/v1/fit/w_1280,h_963,q_90/file.jpg",
    description: "High-resolution print (36\" x 22\"). A peaceful artwork inspired by the wisdom of moonlight. By Alakh Niwasi",
    priceHtml: "Price &#8377;14,699.00"
  },
  {
    slug: "midnight-solitude-the-horrizon-s-contemplation",
    title: "Midnight Solitude The Horrizon's Contemplation",
    image: "https://static.wixstatic.com/media/2596c5_1d6374340a6c4d45a8ab3a1a488ec68c~mv2.jpeg/v1/fit/w_1280,h_963,q_90/file.jpg",
    priceHtml: "Price &#8377;14,699.00"
  },
  {
    slug: "polo-paintings",
    title: "Polo Paintings",
    image: "https://static.wixstatic.com/media/2596c5_7da4b1545ba649e995d96863012236e1~mv2.jpeg/v1/fit/w_963,h_1280,q_90/file.jpg",
    regularHtml: "&#8377;7,000.00",
    saleHtml: "&#8377;2,499.00"
  },
  {
    slug: "collab-of-wild-horses-s-art",
    title: "Collab of wild horses's Art",
    image: "https://static.wixstatic.com/media/2596c5_a9d358ed2fa74bfaad19c0479f09c824~mv2.jpeg/v1/fit/w_720,h_1280,q_90/file.jpg",
    description: "Made BY- John McKendrick<br>Print on canvas",
    regularHtml: "&#8377;50,000.00",
    saleHtml: "&#8377;13,699.00"
  },
  {
    slug: "rider-s-rendezvous",
    title: "Rider's Rendezvous",
    image: "https://static.wixstatic.com/media/2596c5_ce011000e6c244b5af90fc05f5327d62~mv2.jpeg/v1/fit/w_1201,h_1600,q_90/file.jpg",
    description: "Made By- John McKendrick<br>High Resolution Print on canvas<br>22\"/22\"",
    regularHtml: "&#8377;11,200.00",
    saleHtml: "&#8377;4,999.00"
  },
  {
    slug: "horse-3-1",
    title: "Horse 3",
    image: "https://static.wixstatic.com/media/2596c5_8ae92c122cc643529ff3bffc4a83093d~mv2.jpeg/v1/fit/w_868,h_1156,q_90/file.jpg",
    description: "Made by- Bhunia<br>Oil painting on canvas<br>12.1\"/12.1\"",
    regularHtml: "&#8377;25,200.00",
    saleHtml: "&#8377;3,000.00"
  },
  {
    slug: "elegant-crystal-chandelier",
    title: "The Proposal",
    image: "https://static.wixstatic.com/media/2596c5_ecc602dc0ffe474b872798fe8ccfcc32~mv2.jpeg/v1/fit/w_1280,h_733,q_90/file.jpg",
    description: "Made By-Alakh Niwasi<br>High Resolution Print on canvas",
    regularHtml: "&#8377;42,900.00",
    saleHtml: "&#8377;14,699.00"
  },
  {
    slug: "polo",
    title: "Polo",
    image: "https://static.wixstatic.com/media/850a9c_305d9321d3254f7aa90c71b4e782fc73~mv2.jpg/v1/fit/w_738,h_641,q_90/file.jpg",
    description: "Print on canvas<br>12.5\"/13.7\"",
    sku: "01",
    regularHtml: "&#8377;1,300.00",
    saleHtml: "&#8377;910.00"
  },
  {
    slug: "contemporary-abstract-sculpture",
    title: "The Crossing",
    image: "https://static.wixstatic.com/media/2596c5_1bdc2430486144cfad4cb9d06038d137~mv2.jpeg/v1/fit/w_1280,h_963,q_90/file.jpg",
    description: "Made By- Kimberly Heckathron<br>Print On Canvas<br>22\"/36\"",
    regularHtml: "&#8377;17,500.00",
    saleHtml: "&#8377;7,999.00"
  },
  {
    slug: "luxury-diamond-necklace",
    title: "The Hug",
    image: "https://static.wixstatic.com/media/2596c5_f8ec27ce2e624edd9f375fed84b69ff3~mv2.jpeg/v1/fit/w_963,h_1280,q_90/file.jpg",
    description: "Made By- Thai Artist<br>Oil Paint on canvas<br>28.5\"/24.7\"",
    regularHtml: "&#8377;32,000.00",
    saleHtml: "&#8377;11,199.00"
  },
  {
    slug: "regal-rider",
    title: "Regal Rider",
    image: "https://static.wixstatic.com/media/2596c5_ebd1d19b5130427d8193e75a5d25969c~mv2.jpeg/v1/fit/w_868,h_1156,q_90/file.jpg",
    description: "Kimberly Heckathron<br>Print On canvas<br>12\"/12\"",
    regularHtml: "&#8377;5,740.00",
    saleHtml: "&#8377;2,250.00"
  },
  {
    slug: "colorful-beaded-bracelet",
    title: "Pencil sketch",
    image: "https://static.wixstatic.com/media/2596c5_4e3645f83dc54c64878b1832fc1a5aad~mv2.jpeg/v1/fit/w_963,h_1280,q_90/file.jpg",
    status: "Sold",
    priceHtml: "Price &#8377;10,000.00",
    preorder: true
  },
  {
    slug: "blue-wild",
    title: "Blue Wild",
    image: "https://static.wixstatic.com/media/2596c5_2860f9f65e5d4541a52ad30f262a328e~mv2.jpeg/v1/fit/w_868,h_1156,q_90/file.jpg",
    description: "Oil Print on canvas<br>28.5\"/24.5\"",
    regularHtml: "&#8377;32,000.00",
    saleHtml: "&#8377;9,999.00"
  },
  {
    slug: "horse-3",
    title: "Horse 3",
    image: "https://static.wixstatic.com/media/2596c5_569dc12e73bf4f5daadf93b42301fc61~mv2.jpeg/v1/fit/w_868,h_1156,q_90/file.jpg",
    description: "Made By- Bhunia<br>Oil Pprint on canvas",
    regularHtml: "&#8377;25,200.00",
    saleHtml: "&#8377;3,000.00"
  },
  {
    slug: "wire-wrapped-gemstone-earrings",
    title: "Polo Art",
    image: "https://static.wixstatic.com/media/2596c5_3960d0ebbaad4cfea96a25454e421d9b~mv2.jpeg/v1/fit/w_1280,h_963,q_90/file.jpg",
    description: "Print On canva<br>12.5\"/16.5\"",
    regularHtml: "&#8377;1,500.00",
    saleHtml: "&#8377;1,050.00"
  },
  {
    slug: "moon-light-nector",
    title: "Moon light nector",
    image: "https://static.wixstatic.com/media/2596c5_a9f49ec2af07462ca368837062a2c27d~mv2.jpeg/v1/fit/w_1600,h_914,q_90/file.jpg",
    description: "Made By- Alakh Niwasi<br>Print on canvas<br>22\"/34.8\"",
    regularHtml: "&#8377;35,000.00",
    saleHtml: "&#8377;17,999.00"
  },
  {
    slug: "rustic-wood-carving-sculpture",
    title: "Equine Spirits",
    image: "https://static.wixstatic.com/media/2596c5_d9afc456257e43e4b180d46049fcdef4~mv2.jpeg/v1/fit/w_1183,h_1263,q_90/file.jpg",
    description: "Kimberly Hwckathron<br>Print On Canvas<br>22\"/22\"",
    regularHtml: "&#8377;12,600.00",
    saleHtml: "&#8377;3,000.00"
  },
  {
    slug: "affordable-art-print",
    title: "Polo Print",
    image: "https://static.wixstatic.com/media/2596c5_2554f394801144f591ab1c47d8956b20~mv2.jpeg/v1/fit/w_1280,h_963,q_90/file.jpg",
    description: "Print On canvas<br>12.5\"/17\"",
    regularHtml: "&#8377;2,000.00",
    saleHtml: "&#8377;1,400.00"
  },
  {
    slug: "elegant-bronze-sculpture",
    title: "Horse and Hand",
    image: "https://static.wixstatic.com/media/2596c5_a04fe4db169e491f8f2ddd364d3d54ec~mv2.jpeg/v1/fit/w_963,h_1280,q_90/file.jpg",
    description: "Made By- Kimberly Heckathron<br>Print on canvas<br>22.5\"/22.5",
    regularHtml: "&#8377;12,600.00",
    saleHtml: "&#8377;2,999.00"
  },
  {
    slug: "timeless-duo",
    title: "Timeless Duo",
    image: "https://static.wixstatic.com/media/2596c5_663b98f63bef4778bab219562a43fac6~mv2.jpeg/v1/fit/w_868,h_1156,q_90/file.jpg",
    description: "Made By- John South<br>Print On canvas",
    regularHtml: "&#8377;7,490.00",
    saleHtml: "&#8377;3,999.00"
  },
  {
    slug: "horse-1",
    title: "Horse 1",
    image: "https://static.wixstatic.com/media/2596c5_3474d28753284cebad3d4b593dee20dd~mv2.jpeg/v1/fit/w_868,h_1156,q_90/file.jpg",
    description: "Made by- Bhunia<br>Oil Print on canvas<br>12.1\"/12.1\"",
    regularHtml: "&#8377;25,200.00",
    saleHtml: "&#8377;3,000.00"
  }
];

const products = productData.map((product, id) => ({ id, ...product }));

const nobleStories = [
  ["Guru Gobind Singh's Horse A Tale of Loyalty and Devotion", "As the faithful steed Neela Ghora galloped alongside Guru Gobind Singh, it came to embody the very spirit of loyalty and courage. Through countless battles and trials, their bond only grew stronger, earning awe and admiration from all who witnessed their partnership. Stories of Guru Gobind Singh and Neela Ghora spread far and wide, with each retelling adding to their mystique.", "https://static.wixstatic.com/media/788bde_81129c3ea9dc402cac9c56bc7c0e7c75~mv2.jpg/v1/fill/w_304,h_355,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shree-Guru-Gobind-singh-ji-nile-ghode-wala-caballo-loco-art-gallery-02.jpg"],
  ["Neapolitan Horse A Symbol of Elegance", "Napoleon Bonaparte had a special relationship with his horse. His most famous horse was Marengo, named after the Battle of Marengo in Italy, where Napoleon won a significant victory in 1800.", "https://static.wixstatic.com/media/2596c5_d7bedab2521a4dae9101b60cd7343db6~mv2.jpg/v1/fill/w_263,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Il%20cavallo%20napoletano_jfif.jpg"],
  ["Alexander's Horse A Steed of Legend", "Legendary Bond Bucephalus and Alexander shared a connection that went beyond mere rider and horse. Alexander is said to have tamed the wild Bucephalus while still a young prince. Battlefield triumphs carried Alexander through numerous victorious campaigns, including the epic conquests of the Persian Empire, earning Bucephalus a place among history's most legendary warhorses.", "https://static.wixstatic.com/media/2596c5_45adc75d936643efa022c045a35077e0~mv2.jpg/v1/fill/w_341,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Horse%20by%20dezygn%20on%20DeviantArt_jfif.jpg"],
  ["Rani Lakshmibai's Horse, Badal", "Badal symbolized Rani Lakshmibai's bravery during the Indian Rebellion of 1857. As her loyal companion in battle, he bolstered the morale of troops and fended off British forces. In the Siege of Jhansi, Badal carried the Rani into the fray, embodying resistance and freedom until the fall of Jhansi.", "https://static.wixstatic.com/media/2596c5_6f4579d6eb554ed8977fdc4ca7708a65~mv2.jpg/v1/fill/w_318,h_305,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lakshmibai%20(Rani%20of%20Jhansi)%20(1828-1858)_jfif.jpg"],
  ["Chatrapati Shivaji Maharaj & His Horse A Tale of Valor", "Amid the rugged Sahyadri Mountains, Chhatrapati Shivaji Maharaj ruled with valor. His trusted companion, Veerabhadraka, was present in every triumph and trial. Together, they rode into battle with unwavering courage, inspiring victory against all odds and exemplifying unmatched loyalty.", "https://static.wixstatic.com/media/2596c5_508024e43ffd498286fab32429b93722~mv2.jpg/v1/fill/w_304,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chhatrapati%20Shivaji%20Maharaj%20ki%20Jai_jfif.jpg"],
  ["Maharana Pratap and Chetak A Tale of Courage", "Maharana Pratap's bond with Chetak mirrored his unbreakable spirit. Together, they faced countless battles with unyielding determination. Whether charging fearlessly into combat or standing resolute against overwhelming odds, their partnership became a lasting symbol of enduring courage and loyalty.", "https://static.wixstatic.com/media/nsplsh_ced4bec7f57b4d658cc87c0cf3109da8~mv2.jpg/v1/crop/x_0,y_630,w_4000,h_4739/fill/w_276,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Ritik%20Gupta.jpg"],
  ["Lord Krishna and His Divine Steed (Sugriva) A Tale of Devotion", "Sugriva, the celestial steed of Lord Krishna, was far from ordinary. Blessed with divine attributes, Sugriva accompanied Krishna into numerous battles, embodying strength, grace, and unwavering loyalty. Their bond reflects the harmonious union between the divine and nature, where even a noble animal plays a vital role in the cosmic drama of dharma.", "https://static.wixstatic.com/media/2596c5_62161383303c48aa98c7b482675c1ec5~mv2.png/v1/fill/w_268,h_344,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2596c5_62161383303c48aa98c7b482675c1ec5~mv2.png"]
];

let visibleProducts = 6;
const cartStorageKey = "caballoCart";
const cart = loadCart();

function render() {
  const route = getRoute();
  const renderer = route.startsWith("product-page/") ? renderProductPage : routes[route] || routes.home;
  document.querySelector("#main").innerHTML = renderer(route);
  document.querySelector("#main").focus({ preventScroll: true });
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
  if (!shouldShowNewsletter()) {
    document.querySelector(".newsletter-backdrop").hidden = true;
  }
  markActive(route);
  attachPageHandlers();
}

function getRoute() {
  return decodeURIComponent((location.hash || "#home").replace(/^#\/?/, "")) || "home";
}

function markActive(route) {
  const activeRoute = routeAliases[route] || route;
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });
  if (route.startsWith("product-page/")) {
    const product = findProductByRoute(route);
    document.title = product ? `${product.title} | Caballo Loco Art` : "Product | Caballo Loco Art";
    return;
  }
  document.title = route === "home" ? "Caballo Loco Art Gallery" : `${activeRoute.replaceAll("-", " ")} | Caballo Loco Art`;
}

function renderHome() {
  return `
    <section class="home-hero">
      <h1 class="page-title">Equine Inspired Art</h1>
      <p class="center-kicker">Ashva Kala</p>
      <div class="rule"></div>
    </section>
    <section class="news-band">
      <h2 class="news-title">Exciting News</h2>
      <p>Our gallery is relocating soon to <span class="blue-word">Eden Polo<br>Club</span> Stay tuned for the grand opening details</p>
      <h2 class="news-title">Comming Soon</h2>
      <div class="media-strip">
        ${[images.home1, images.home2, images.home3, images.home4, images.collection1].map((src) => `<img src="${src}" alt="Caballo Loco artwork">`).join("")}
      </div>
    </section>
    <section class="page-shell intro-grid">
      <div>
        <h2>Experience India&rsquo;s Finest Horse Art in Gurugram &amp; Delhi NCR</h2>
        <p>Welcome to Caballo Loco Art Gallery, where the spirit of the horse runs free in every stroke and sculpture. Step into our sanctuary, where the wisdom and grace of our equine relatives are honored in artistry from across Turtle Island. Explore paintings that dance with the thundering hooves of wild mustangs and sculptures that whisper the ancient stories of our bond with these noble creatures.</p>
      </div>
      <div class="intro-images">
        <img src="${images.wild}" alt="Wild horses">
        <img src="${images.edited}" alt="Horse artwork">
      </div>
    </section>
    ${renderProducts()}
  `;
}

function renderProducts() {
  const shown = products.slice(0, visibleProducts);
  const more = visibleProducts < products.length;
  return `
    <section class="product-section">
      <h2 class="small-heading">Art Piece</h2>
      <div class="product-grid">
        ${shown.map(productCard).join("")}
      </div>
      ${more ? `<div class="load-wrap"><button class="load-more" type="button">Load More</button></div>` : ""}
    </section>
  `;
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-select" href="#product-page/${product.slug}">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">${productPriceLine(product)}</p>
      </a>
    </article>
  `;
}

function productPriceLine(product) {
  if (product.status) {
    return `<span class="sold">${product.status}</span> ${product.priceHtml || ""}`;
  }
  if (product.saleHtml) {
    return `Regular Price ${product.regularHtml}<br><span class="sale">Sale Price ${product.saleHtml}</span>`;
  }
  return product.priceHtml || "Price on request";
}

function findProductByRoute(route) {
  const slug = route.replace("product-page/", "");
  return products.find((product) => product.slug === slug);
}

function renderProductPage(route) {
  const product = findProductByRoute(route);
  if (!product) {
    return `
      <section class="page-shell plain-page">
        <h1 class="page-title">Product Not Found</h1>
        <p>The requested artwork is not available in this clone.</p>
        <a class="primary-link" href="#home">Back to Home</a>
      </section>
    `;
  }
  const index = products.findIndex((item) => item.slug === product.slug);
  const previous = products[(index - 1 + products.length) % products.length];
  const next = products[(index + 1) % products.length];
  return `
    <section class="page-shell product-detail-page">
      <div class="product-breadcrumb">
        <span><a href="#home">Home</a> / ${product.title}</span>
        <span class="product-nav">
          <a href="#product-page/${previous.slug}">Prev</a>
          <a href="#product-page/${next.slug}">Next</a>
        </span>
      </div>
      <div class="product-detail">
        <div class="product-media">
          <img src="${product.image}" alt="${product.title}">
          ${productDescription(product)}
        </div>
        <div class="product-panel">
          <h1>${product.title}</h1>
          ${product.sku ? `<p class="sku">SKU: ${product.sku}</p>` : ""}
          <div class="product-price-large">${productPriceBlock(product)}</div>
          <label class="qty-label" for="qty-${product.id}">Quantity *</label>
          <div class="qty-stepper" data-product-id="${product.id}">
            <button type="button" class="qty-minus" aria-label="Decrease quantity">-</button>
            <input id="qty-${product.id}" type="number" min="1" value="1">
            <button type="button" class="qty-plus" aria-label="Increase quantity">+</button>
          </div>
          <div class="product-actions">
            <button type="button" class="add-cart product-add-cart" data-product-id="${product.id}">${product.preorder ? "Pre-Order" : "Add to Cart"}</button>
            <button type="button" class="wishlist" aria-label="Add to wishlist">&#9825;</button>
          </div>
          <button type="button" class="buy-now" data-product-id="${product.id}">Buy Now</button>
          <div class="share-row" aria-label="Share">
            <a href="https://www.facebook.com/sharer/sharer.php" aria-label="Share on Facebook">f</a>
            <a href="https://pinterest.com/pin/create/button/" aria-label="Share on Pinterest">p</a>
            <a href="https://api.whatsapp.com/send" aria-label="Share on WhatsApp">w</a>
            <a href="https://twitter.com/intent/tweet" aria-label="Share on X">x</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function productDescription(product) {
  const parts = [];
  if (product.description) parts.push(product.description);
  if (product.artist) parts.push(`<strong>${product.artist}</strong>`);
  if (product.status === "Sold") parts.push("Delivered in 4-5 days");
  return parts.length ? `<p class="product-description">${parts.join("<br>")}</p>` : "";
}

function productPriceBlock(product) {
  if (product.saleHtml) {
    return `
      <p>${product.regularHtml}</p>
      <span>Regular Price</span>
      <p class="sale-price">${product.saleHtml}</p>
      <span>Sale Price</span>
    `;
  }
  return `<p>${(product.priceHtml || "Price on request").replace("Price ", "")}</p><span>Price</span>`;
}

function renderEvents() {
  return `
    <section class="page-shell">
      <h1 class="page-title">Events</h1>
      <span class="event-label">latest event live</span>
      <h2 class="event-title">Caballo Loco Art Gallery at the Delhi Horse Show 2025</h2>
      <div class="event-details">
        <h2>Event Details:</h2>
        <ul>
          <li>&#128197; Date: 3rd - 6th April 2025</li>
          <li>&#128205; Venue: Army Riding Club, New Delhi</li>
        </ul>
        <h2>What to Expect:</h2>
        <ul>
          <li>Live Horse-Themed Painting Demos</li>
          <li>Original Equine Art for Sale</li>
          <li>Exclusive Discounts for Art Lovers</li>
          <li>A tribute to the grace of horses through brushstrokes</li>
        </ul>
      </div>
      <div class="hex-row">
        <img src="${images.eventHorse}" alt="Brown horse">
        <img src="${images.home1}" alt="Moonlit horse art">
        <img src="${images.home3}" alt="Horse landscape">
      </div>
      <div class="card-grid">
        ${eventCard("Horse Art Collection", "Experience the elegant fusion of equestrian charm and artistic expression at Polo Cafe's Horse Art Collection. Discover captivating artworks celebrating the beauty and grace of horses.", images.eventHorse, "horse-art-collection")}
        ${eventCard("Horse Art Exhibition", "Step into a realm of equine elegance at Polo Cafe's Horse Art Exhibition. Explore artworks celebrating the majesty of horses in all their splendor.", images.eventWhite, "horse-art-exibition")}
        ${eventCard("Equine Therapy", "Discover the transformative power of connecting with horses in a serene and supportive environment through therapeutic activities designed for emotional well-being.", images.therapy1, "equine-therapy")}
      </div>
    </section>
  `;
}

function eventCard(title, copy, image, route) {
  return `
    <article class="event-card">
      <img src="${image}" alt="${title}">
      <h2>${title}</h2>
      <p>${copy}</p>
      <a class="primary-link" href="#${route}">Read More</a>
    </article>
  `;
}

function renderCollection() {
  return `
    <section class="page-shell copy">
      <h1 class="page-title">Horse Art Collection</h1>
      <img class="collection-banner" src="${images.collectionBanner}" alt="Horse art banner">
      <p>The spirit of the horse brought to life on canvas and through print. Enter a realm where the noble steed embodies grace and power in every brushstroke.</p>
      <p>Explore the timeless elegance of classic horse portraits by masters like George Stubbs and Edgar Degas, showcasing their detail and skill. Experience vibrant modern interpretations from artists who infuse new life into these majestic subjects.</p>
      <div class="image-row">
        <img src="${images.collection1}" alt="Double horses">
        <img src="${images.collection2}" alt="Horses">
        <img src="${images.collection3}" alt="Bright horse">
      </div>
      <p>Our collection features the tranquil beauty of pastoral landscapes, the thrill of racing, and the bond between horse and rider, all designed to inspire. Explore oil, watercolor, acrylic, and digital prints, each with its distinct charm.</p>
      <p>Discover the beauty and allure of horse art at Caballo Loco Art Gallery, where each masterpiece tells a story.</p>
    </section>
  `;
}

function renderExhibition() {
  return `
    <section class="page-shell copy">
      <h1 class="page-title">Horse Art Exhibition</h1>
      <div class="image-row">
        <img src="${images.eventWhite}" alt="White and brown horse">
        <img src="${images.eventColor}" alt="Colour full horses">
        <img src="https://static.wixstatic.com/media/2596c5_9d433bff20d34214b0b39a6c4f6df6c3~mv2.jpg/v1/fill/w_296,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0ba9cff9-0f2d-45a6-ba3f-89284cf816d3_jfif.jpg" alt="Horses">
      </div>
      <p>Step into a realm of equine elegance at Polo Cafe's Horse Art Exhibition. Explore a captivating showcase of artworks celebrating the majesty of horses in all their splendor. From breathtaking paintings to exquisite sculptures, each piece tells a unique story of beauty and grace.</p>
      <p>Immerse yourself in the world of equestrian art while enjoying delectable culinary creations. Whether you are an art connoisseur or drawn to the allure of horses, the exhibition is designed to captivate and inspire.</p>
    </section>
  `;
}

function renderEquineTherapy() {
  return `
    <section class="page-shell copy">
      <h1 class="page-title">Equine Therapy</h1>
      <div class="image-row">
        <img src="${images.therapy1}" alt="Equine">
        <img src="${images.therapy2}" alt="Therapy">
        <img src="${images.therapy3}" alt="Equine therapy">
      </div>
      <p>Embark on a journey of healing and renewal with Polo Cafe's Equine Therapy for Depression Treatment event. Discover the transformative power of connecting with horses in a serene and supportive environment.</p>
      <p>Under the guidance of experienced therapists, participants engage in therapeutic activities tailored to promote emotional well-being and resilience. This event offers a holistic approach to healing amidst tranquil surroundings.</p>
    </section>
  `;
}

function renderNobleHorses() {
  return `
    <section class="page-shell">
      <h1 class="page-title">Noble Horse</h1>
      <div class="story-list">
        ${nobleStories.map(([title, copy, image]) => `
          <article class="story-card">
            <img src="${image}" alt="${title}">
            <div>
              <h2>${title}</h2>
              <p>${copy}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHorseRide() {
  return `
    <section class="page-shell copy">
      <h1 class="page-title">Horse Ride</h1>
      <div class="image-pair">
        <img src="${images.ride1}" alt="Horse ride">
        <img src="${images.ride2}" alt="Horse ride">
      </div>
      <p>Horseback riding, an age-old tradition, transcends mere activity; it is a communion with nature, a dance with a majestic partner, and a journey into freedom and tranquility. Whether you are a seasoned equestrian or a novice adventurer, the allure of riding a horse is undeniable.</p>
      <h2>The Equine Connection</h2>
      <p>There is something extraordinary about the bond between humans and horses. In the gentle nuzzle, the understanding gaze, and the rhythmic sway of their gait, riders find solace and understanding.</p>
      <p>One of the most enchanting aspects of horseback riding is the opportunity to explore the outdoors. Riding through meadows, beaches, trails, and mountain paths heightens the senses from the vantage point of a horse.</p>
      <h2>A Journey of Self-Discovery</h2>
      <p>As you learn to communicate with your equine partner, you also learn about yourself: your strengths, your fears, and your capacity for trust. Riding requires patience, resilience, and an open heart.</p>
      <p>For thrill-seekers, horseback riding offers adventure through jumping, dressage, and trail rides. By embracing this ancient art, we honor a timeless bond between humans and horses.</p>
    </section>
  `;
}

function renderCoffee() {
  return `
    <section class="page-shell copy">
      <h1 class="page-title">Coffee &amp; Arts</h1>
      <div class="image-pair">
        <img src="${images.coffee1}" alt="Polo cafe">
        <img src="${images.coffee2}" alt="Event of caballo loco">
      </div>
      <p>Experience the perfect fusion of art and coffee at Caballo Loco Art Gallery. After exploring our stunning equine art collection, indulge your senses at Polo Cafe, where exceptional coffee complements the artistry. Join us for a unique celebration of creativity and flavor that is sure to inspire.</p>
      <p>Discover the magic of coffee like never before at Polo Cafe, your ultimate destination for post-exhibition delight. After immersing yourself in Caballo Loco Art Gallery, treat yourself to our finest brews and indulge in the vibrant flavors of life.</p>
    </section>
  `;
}

function renderGifting() {
  return `
    <section class="page-shell plain-page">
      <h1 class="page-title">Gifting</h1>
      <h2>Caballo Loco Art Gallery</h2>
      <p>Welcome to the gifting page of our art gallery, where every brushstroke tells a story and every gift embodies creativity and expression. Explore curated artworks and customizable items for corporate gifting, festive occasions, and special moments.</p>
      <p><strong>Corporate Gifting:</strong> Discover small paintings by talented artists, ideal for adding elegance to an office or workspace. Custom-printed cups can carry company logos, messages, or artwork for personalized gifts.</p>
      <p><strong>Horse Art Focus:</strong> Explore horse-themed artworks that celebrate the timeless bond between humans and horses, from spirited stallions across open landscapes to intimate portrayals of horse and rider.</p>
      <p><strong>Festive Gifting:</strong> Celebrate tradition and heroism with paintings honoring Indian warriors and iconic historical figures such as Chatrapati Shivaji Maharaj, Maharana Pratap, and Guru Gobind Singh.</p>
      <p>Whether you are seeking a corporate gift, commemorating a festive occasion, or expressing appreciation, the gallery offers diverse gifting options crafted with passion, skill, and dedication.</p>
    </section>
  `;
}

function renderWeekendLaunch() {
  return `
    <section class="page-shell blank-spacer">
      <h1 class="page-title">Weekend Launch</h1>
    </section>
  `;
}

function renderAlliance() {
  return `
    <section class="page-shell alliance-page">
      <h1 class="page-title">Our Alliance or CSR</h1>
      <div class="alliance-grid">
        <article class="alliance-card">
          <h2>Nihal Foundation</h2>
          <p>Empowering Lives, Inspiring Change! At Nihal Foundation, we are dedicated to creating a world where human values, ethical behavior, and inclusivity are important. Through our various efforts, we aim to build a culture of compassion, integrity, and empowerment that reaches all areas of society.</p>
          <p>Our mission is to promote human values, add value to student lives, and support community involvement through education, mentorship, cultural exchange, art, spiritual events, and equestrian awareness.</p>
          <a class="primary-link" href="#copy-of-friendicoes">Read More</a>
        </article>
        <article class="alliance-card">
          <h2>Student | Space</h2>
          <p>At student space, we are dedicated partners in enhancing student achievement and fostering academic success. The software solution tracks and supports students throughout their educational journey, with a focus on retention, transfers, and degree completion.</p>
          <p>Student space is committed to empowering institutions to measure and improve student achievement through competency-based learning.</p>
          <a class="primary-link" href="#copy-of-nihal-foundation">Read More</a>
        </article>
      </div>
    </section>
  `;
}

function renderNihalFoundation() {
  return `
    <section class="page-shell plain-page csr-detail">
      <h1 class="page-title">Nihal Foundation</h1>
      <h2>Nihal Foundation</h2>
      <p>With an increasing of social dysfunction in society, the need of these values is severe. Nihal Foundation aims to bring awareness of these issues, through workshops, training, cultural exchange, arts and spiritual events.</p>
      <p>Through this multi-dimensional based empowerment, the foundation hopes to help these individuals in achieving their full intellectual, economic, social and spiritual potential to become model citizens plus responsible members of the global community.</p>
      <h2>The approach of the Nihal Foundation is to:</h2>
      <ul class="csr-list">
        <li>Create an inclusive platform to promote human values while relating it to ethical behavior.</li>
        <li>Develop a culture in students of adding value to all aspects of their own and other lives.</li>
        <li>Explore issues of identity, focusing on the integration of the personal, spiritual and professional dimensions.</li>
        <li>Empower individuals to aspire to live a life based upon cultural, spiritual learning and justice.</li>
        <li>Sponsor student/faculty exchange programs.</li>
        <li>Support and sponsor equestrian events and raise awareness for better conditions for retired horses.</li>
      </ul>
      <a class="primary-link" href="#copy-of-book-online-1">Read More</a>
    </section>
  `;
}

function renderStudentSpace() {
  return `
    <section class="page-shell plain-page csr-detail">
      <h1 class="page-title">student|space</h1>
      <h2>Company Overview</h2>
      <p>StudentSpace is a software service-providing company that specializes in student tracking and retention software for universities and colleges in the USA. The company started in 1998 and has served over 250 institutions.</p>
      <p>StudentSpace products are based on research done in partnership with the US Department of Education and social institutions supporting social causes. The software helps measure the success of university efforts and helps universities get accreditation by improving students' success and learning outcomes.</p>
      <p>Services like predictive analytics help identify at-risk students early in the semester. The Early Intervention system assists students in time so that they do not drop out or fail their classes.</p>
      <h2>StudentSpace, an innovative software company</h2>
      <p>Student Tracking, Retention and Early Intervention Solutions for at-risk students. StudentSpace has successfully implemented solutions for over 250 institutions and has served above 250000 students since 1998.</p>
      <p>StudentSpace global services offer SQL database auditing, data integration, data management, and SQL reporting services. With StudentSpace, institutions can track, retain, and help students achieve their full potential.</p>
      <a class="primary-link" href="#copy-of-book-online-1">Read More</a>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="page-shell contact-page">
      <h1 class="page-title">Contact Us</h1>
      <form class="contact-form">
        <input name="name" type="text" placeholder="NAME" aria-label="Name" required>
        <input name="email" type="email" placeholder="EMAIL" aria-label="Email" required>
        <input name="subject" type="text" placeholder="SUBJECT" aria-label="Subject">
        <div class="message-wrap">
          <span>Nihal Foundation</span>
          <textarea name="message" placeholder="TYPE YOUR MESSAGE HERE..." aria-label="Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  `;
}

function renderCartPage() {
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  return `
    <section class="page-shell cart-page">
      <h1 class="page-title">Cart</h1>
      ${count ? `
        <div class="cart-page-list">
          ${cart.map((line) => cartLine(line, true)).join("")}
        </div>
        <div class="cart-summary">
          <span>Subtotal</span>
          <strong>${formatCurrency(cartSubtotal())}</strong>
        </div>
        <div class="cart-page-actions">
          <button type="button" class="ghost-button" data-cart-action="clear">Clear Cart</button>
          <a class="primary-link" href="#home">Continue Shopping</a>
        </div>
        <form class="checkout-form">
          <h2>Checkout</h2>
          <input name="name" type="text" placeholder="Name" required>
          <input name="email" type="email" placeholder="Email" required>
          <input name="phone" type="tel" placeholder="Phone" required>
          <textarea name="address" placeholder="Delivery address" required></textarea>
          <button type="submit" class="buy-now checkout-button">Place Order</button>
        </form>
      ` : `
        <p class="cart-empty-page">Cart is empty.</p>
        <div class="cart-page-actions">
          <a class="primary-link" href="#home">Continue Shopping</a>
        </div>
      `}
    </section>
  `;
}

function attachPageHandlers() {
  document.querySelector(".load-more")?.addEventListener("click", () => {
    visibleProducts = Math.min(products.length, visibleProducts + 6);
    render();
  });

  document.querySelectorAll(".qty-stepper").forEach((stepper) => {
    const input = stepper.querySelector("input");
    stepper.querySelector(".qty-minus").addEventListener("click", () => {
      input.value = String(Math.max(1, Number(input.value || 1) - 1));
    });
    stepper.querySelector(".qty-plus").addEventListener("click", () => {
      input.value = String(Number(input.value || 1) + 1);
    });
  });

  document.querySelectorAll(".product-add-cart, .buy-now").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find((item) => item.id === Number(button.dataset.productId));
      if (!product) return;
      const qtyInput = document.querySelector(`#qty-${product.id}`);
      const quantity = Math.max(1, Number(qtyInput?.value || 1));
      addToCart(product, quantity);
      showToast(`${product.title} added to cart`);
      if (button.classList.contains("buy-now")) {
        location.hash = "cart-page";
      }
    });
  });

  document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Thanks for reaching out");
  });

  document.querySelectorAll("[data-cart-action]").forEach((control) => {
    control.addEventListener("click", () => {
      handleCartAction(control.dataset.cartAction, Number(control.dataset.productId));
    });
  });

  document.querySelector(".checkout-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    cart.splice(0, cart.length);
    saveCart();
    updateCart();
    render();
    showToast("Order placed");
  });
}

function addToCart(product, quantity) {
  const existing = cart.find((line) => line.product.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  saveCart();
  updateCart();
}

function handleCartAction(action, productId) {
  if (action === "clear") {
    cart.splice(0, cart.length);
  } else {
    const line = cart.find((item) => item.product.id === productId);
    if (!line) return;
    if (action === "increase") {
      line.quantity += 1;
    }
    if (action === "decrease") {
      line.quantity -= 1;
    }
    if (action === "remove" || line.quantity <= 0) {
      const index = cart.indexOf(line);
      cart.splice(index, 1);
    }
  }
  saveCart();
  updateCart();
  render();
}

function cartLine(line, editable = false) {
  const product = line.product;
  return `
    <div class="cart-item ${editable ? "cart-item-editable" : ""}">
      <img src="${product.image}" alt="${product.title}">
      <div>
        <strong>${product.title}</strong>
        <div class="price">${productPriceLine(product)}</div>
        ${editable ? `
          <div class="cart-line-controls">
            <button type="button" data-cart-action="decrease" data-product-id="${product.id}" aria-label="Decrease ${product.title} quantity">-</button>
            <span>Qty: ${line.quantity}</span>
            <button type="button" data-cart-action="increase" data-product-id="${product.id}" aria-label="Increase ${product.title} quantity">+</button>
            <button type="button" class="remove-line" data-cart-action="remove" data-product-id="${product.id}">Remove</button>
          </div>
        ` : `<div class="quantity-line">Qty: ${line.quantity}</div>`}
      </div>
    </div>
  `;
}

function updateCart() {
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  document.querySelector(".cart-count").textContent = String(count);
  document.querySelector(".cart-button").setAttribute("aria-label", `Cart with ${count} items`);
  const list = document.querySelector(".cart-items");
  const empty = document.querySelector(".cart-empty");
  list.innerHTML = cart.map(cartLine).join("");
  empty.hidden = count > 0;
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    return saved
      .map((line) => {
        const product = products.find((item) => item.id === line.productId);
        const quantity = Math.max(1, Number(line.quantity || 1));
        return product ? { product, quantity } : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    const payload = cart.map((line) => ({
      productId: line.product.id,
      quantity: line.quantity
    }));
    localStorage.setItem(cartStorageKey, JSON.stringify(payload));
  } catch {
    // localStorage can be unavailable in strict private contexts.
  }
}

function cartSubtotal() {
  return cart.reduce((sum, line) => sum + productUnitAmount(line.product) * line.quantity, 0);
}

function productUnitAmount(product) {
  const price = product.saleHtml || product.priceHtml || product.regularHtml || "";
  return Number(price.replace(/&#8377;|₹/g, "").replace(/[^\d.]/g, "")) || 0;
}

function formatCurrency(amount) {
  return `&#8377;${amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const nav = document.querySelector("#site-nav");
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".submenu-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".nav-group");
    const open = !group.classList.contains("open");
    group.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  });
});

document.querySelector(".cart-button").addEventListener("click", () => {
  location.hash = "cart-page";
});

document.querySelector(".cart-close").addEventListener("click", () => {
  document.querySelector(".cart-drawer").hidden = true;
});

document.querySelector(".modal-close").addEventListener("click", closeNewsletter);

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  closeNewsletter();
  showToast("Thanks for signing up");
});

function closeNewsletter() {
  document.querySelector(".newsletter-backdrop").hidden = true;
  localStorage.setItem("caballoNewsletterClosed", "1");
}

window.addEventListener("hashchange", render);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelector(".newsletter-backdrop").hidden = true;
    document.querySelector(".cart-drawer").hidden = true;
  }
});

setTimeout(() => {
  if (!localStorage.getItem("caballoNewsletterClosed") && shouldShowNewsletter()) {
    document.querySelector(".newsletter-backdrop").hidden = false;
  }
}, 1400);

function shouldShowNewsletter() {
  const route = getRoute();
  return route !== "cart-page" && route !== "contactus" && !route.startsWith("product-page/");
}

updateCart();
render();
