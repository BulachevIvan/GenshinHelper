class Person{
    constructor(
        name, avatar, element
    )
    {
        this.name = name;
        this.avatar = avatar;
        this.element = element;
    }
}

var persons = [
    new Person(),
    new Person("Альбедо", src="css/images/characters/Character_Albedo_Thumb.png", "geo"),
    new Person("Элой", src="css/images/characters/Character_Aloy_Thumb.png", "cryo"),
    new Person("Эмбер", src="css/images/characters/Character_Amber_Thumb.png", "pyro"),
    new Person("Аратаки Итто", src="css/images/characters/Character_Arataki_Itto_Thumb.png", "geo"),
    new Person("Барбара", src="css/images/characters/Character_Barbara_Thumb.png", "hydro"),
    new Person("Бэй Доу", src="css/images/characters/Character_Beidou_Thumb.png", "electro"),
    new Person("Беннет", src="css/images/characters/Character_Bennett_Thumb.png", "pyro"),
    new Person("Кандикия", src="css/images/characters/Character_Candace_Thumb.png", "hydro"),
    new Person("Чунь Юнь", src="css/images/characters/Character_Chongyun_Thumb.png", "cryo"),
    new Person("Коллеи", src="css/images/characters/Character_Collei_Thumb.png", "dendro"),
    new Person("Сайно", src="css/images/characters/Character_Cyno_Thumb.png", "electro"),
    new Person("Дехья", src="css/images/characters/Dehya.png", "pyro"),
    new Person("Дилюк", src="css/images/characters/Character_Diluc_Thumb.png", "pyro"),
    new Person("Диона", src="css/images/characters/Character_Diona_Thumb.png", "cryo"),
    new Person("Дори", src="css/images/characters/Character_Dori_Thumb.png", "electro"),
    new Person("Эола", src="css/images/characters/Character_Eula_Thumb.png", "cryo"),
    new Person("Фишль", src="css/images/characters/Character_Fischl_Thumb.png", "electro"),
    new Person("Гань Юй", src="css/images/characters/Character_Ganyu_Thumb.png", "cryo"),
    new Person("Горо", src="css/images/characters/Character_Gorou_Thumb.png", "geo"),
    new Person("Ху Тао", src="css/images/characters/Character_Hu_Tao_Thumb.png", "pyro"),
    new Person("Джинн", src="css/images/characters/Character_Jean_Thumb.png", "anemo"),
    new Person("Кадзуха", src="css/images/characters/Character_Kaedehara_Kazuha_Thumb.png", "anemo"),
    new Person("Кэйа", src="css/images/characters/Character_Kaeya_Thumb.png", "cryo"),
    new Person("Аяка", src="css/images/characters/Character_Kamisato_Ayaka_Thumb.png", "cryo"),
    new Person("Аято", src="css/images/characters/Character_Kamisato_Ayato_Thumb.png", "hydro"),
    new Person("Кэ Цин", src="css/images/characters/Character_Keqing_Thumb.png", "electro"),
    new Person("Кли", src="css/images/characters/Character_Klee_Thumb.png", "pyro"),
    new Person("Кудзё Сара", src="css/images/characters/Character_Kujou_Sara_Thumb.png", "electro"),
    new Person("Куки Шинобу", src="css/images/characters/Character_Kuki_Shinobu_Thumb.png", "electro"),
    new Person("Лайла", src="css/images/characters/Character_Layla_Thumb.png", "cryo"),
    new Person("Лиза", src="css/images/characters/Character_Lisa_Thumb.png", "electro"),
    new Person("Мона", src="css/images/characters/Character_Mona_Thumb.png", "hydro"),
    new Person("Нахида", src="css/images/characters/Character_Nahida_Thumb.png", "dendro"),
    new Person("Нилу", src="css/images/characters/Character_Nilou_Thumb.png", "hydro"),
    new Person("Нин Гуан", src="css/images/characters/Character_Ningguang_Thumb.png", "geo"),
    new Person("Ноэлль", src="css/images/characters/Character_Noelle_Thumb.png", "geo"),
    new Person("Ци Ци", src="css/images/characters/Character_Qiqi_Thumb.png", "cryo"),
    new Person("Райдэн", src="css/images/characters/Character_Raiden_Shogun_Thumb.png", "electro"),
    new Person("Рейзор", src="css/images/characters/Character_Razor_Thumb.png", "electro"),
    new Person("Розария", src="css/images/characters/Character_Rosaria_Thumb.png", "cryo"),
    new Person("Кокоми", src="css/images/characters/Character_Sangonomiya_Kokomi_Thumb.png", "hydro"),
    new Person("Саю", src="css/images/characters/Character_Sayu_Thumb.png", "anemo"),
    new Person("Шень Хэ", src="css/images/characters/Character_Shenhe_Thumb.png", "cryo"),
    new Person("Хейдзо", src="css/images/characters/Character_Shikanoin_Heizou_Thumb.png", "anemo"),
    new Person("Сахароза", src="css/images/characters/Character_Sucrose_Thumb.png", "anemo"),
    new Person("Тарталья", src="css/images/characters/Character_Tartaglia_Thumb.png", "hydro"),
    new Person("Тома", src="css/images/characters/Character_Thoma_Thumb.png", "pyro"),
    new Person("Тигнари", src="css/images/characters/Character_Tighnari_Thumb.png", "dendro"),
    new Person("Венти", src="css/images/characters/Character_Venti_Thumb.png", "anemo"),
    new Person("Сян Лин", src="css/images/characters/Character_Xiangling_Thumb.png", "pyro"),
    new Person("Сяо", src="css/images/characters/Character_Xiao_Thumb.png", "anemo"),
    new Person("Син Цю", src="css/images/characters/Character_Xingqiu_Thumb.png", "hydro"),
    new Person("Синь Янь", src="css/images/characters/Character_Xinyan_Thumb.png", "pyro"),
    new Person("Яэ Мико", src="css/images/characters/Character_Yae_Miko_Thumb.png", "electro"),
    new Person("Янь Фэй", src="css/images/characters/Character_Yanfei_Thumb.png", "pyro"),
    new Person("Е Лань", src="css/images/characters/Character_Yelan_Thumb.png", "hydro"),
    new Person("Ёимия", src="css/images/characters/Character_Yoimiya_Thumb.png", "pyro"),
    new Person("Юнь Цзинь", src="css/images/characters/Character_Yun_Jin_Thumb.png", "geo"),
    new Person("Чжун Ли", src="css/images/characters/Character_Zhongli_Thumb.png", "geo"),
    new Person("Странник", src="css/images/characters/Character_Wanderer_Thumb.png", "anemo"),
    new Person("Фарузан", src="css/images/characters/Character_Faruzan_Thumb.png", "anemo"),
    new Person("Аль-Хайтам", src="css/images/characters/Character_Alhaitham_Thumb.png", "dendro"),
    new Person("Яо Яо", src="css/images/characters/Character_Yaoyao_Thumb.png", "dendro"),
];