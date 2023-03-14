class Weapon{
    constructor(
        name, avatar, weaponType
    )
    {
        this.name = name;
        this.avatar = avatar;
        this.weaponType = weaponType;
    }
}

var weapons = [
    new Weapon(),

    new Weapon("Меч сокола", src="css/images/weapons/5star/swords/Weapon_aquila_Favonia.png", "sword"),
    new Weapon("Клятва свободы", src="css/images/weapons/5star/swords/Weapon_Freedom_Sworn.png", "sword"),
    new Weapon("Харан гэппаку фуцу", src="css/images/weapons/5star/swords/Weapon_Haran_geppaku_futsu.png", "sword"),
    new Weapon("Ключ хадж-нисут", src="css/images/weapons/5star/swords/Weapon_Key_of_Khaj_Nisut.png", "sword"),
    new Weapon("Свет лиственного разреза", src="css/images/weapons/5star/swords/Weapon_Light_of_Foliar_Incision.png", "sword"),
    new Weapon("Рассекающий туман", src="css/images/weapons/5star/swords/Weapon_Mistsplitter_Reforged.png", "sword"),
    new Weapon("Драгоценный омут", src="css/images/weapons/5star/swords/Weapon_Primordial_Jade_Cutter.png", "sword"),
    new Weapon("Небесный меч", src="css/images/weapons/5star/swords/Weapon_Skyward_Blade.png", "sword"),
    new Weapon("Кромсатель пиков", src="css/images/weapons/5star/swords/Weapon_Summit_Shaper.png", "sword"),

    new Weapon("Сияющая жатва", src="css/images/weapons/5star/spears/Weapon_Engulfing_Lightning.png", "spear"),
    new Weapon("Нефритовый коршун", src="css/images/weapons/5star/spears/Weapon_Primordial_Jade_Winged_Spear.png", "spear"),
    new Weapon("Усмиритель бед", src="css/images/weapons/5star/spears/Weapon_shenhe.png", "spear"),
    new Weapon("Небесная ось", src="css/images/weapons/5star/spears/Weapon_Skyward_Spine.png", "spear"),
    new Weapon("Посох хомы", src="css/images/weapons/5star/spears/Weapon_Staff_of_homa.png", "spear"),
    new Weapon("Посох алых песков", src="css/images/weapons/5star/spears/Weapon_Staff_of_the_Scarlet_Sands.png", "spear"),
    new Weapon("Покоритель вихря", src="css/images/weapons/5star/spears/Weapon_Vortex_Vanquisher.png", "spear"),

    new Weapon("Краснорогий камнеруб", src="css/images/weapons/5star/claymores/Weapon_Redhorn_Stonethresher.png", "claymore"),
    new Weapon("Маяк тростникового моря", src="css/images/weapons/5star/claymores/Dehya_Sign.png", "claymore"),
    new Weapon("Небесное величие", src="css/images/weapons/5star/claymores/Weapon_Skyward_Pride.png", "claymore"),
    new Weapon("Песнь разбитых сосен", src="css/images/weapons/5star/claymores/Weapon_Song_of_broken_pines.png", "claymore"),
    new Weapon("Некованый", src="css/images/weapons/5star/claymores/Weapon_Unforged.png", "claymore"),
    new Weapon("Волчья погибель", src="css/images/weapons/5star/claymores/Weapon_Wolf_gravestone.png", "claymore"),

    new Weapon("Лук амоса", src="css/images/weapons/5star/bows/Weapon_Amos_Bow.png", "bow"),
    new Weapon("Аква симулякрум", src="css/images/weapons/5star/bows/Weapon_AquaSimulacra.png", "bow"),
    new Weapon("Элегия погибели", src="css/images/weapons/5star/bows/Weapon_Elegy_of_the_end.png", "bow"),
    new Weapon("Охотничья тропа", src="css/images/weapons/5star/bows/Weapon_Hunters_Path.png", "bow"),
    new Weapon("Полярная звезда", src="css/images/weapons/5star/bows/Weapon_Polar_Star.png", "bow"),
    new Weapon("Небесное крыло", src="css/images/weapons/5star/bows/Weapon_SkywardHarp.png", "bow"),
    new Weapon("Громовой пульс", src="css/images/weapons/5star/bows/Weapon_Thundering_Pulse.png", "bow"),

    new Weapon("Сновидения тысячи ночей", src="css/images/weapons/5star/books/Weapon_A_Thousand_Floating_Dreams.png", "book"),
    new Weapon("Вечное лунное сияние", src="css/images/weapons/5star/books/Weapon_Everlasting_Moonglow.png", "book"),
    new Weapon("Истина кагура", src="css/images/weapons/5star/books/Weapon_Kagura.png", "book"),
    new Weapon("Молитва святым ветрам", src="css/images/weapons/5star/books/Weapon_LostPrayertotheSacred_Winds.png", "book"),
    new Weapon("Память о пыли", src="css/images/weapons/5star/books/Weapon_Memory_of_Dust.png", "book"),
    new Weapon("Небесный атлас", src="css/images/weapons/5star/books/Weapon_Skyward_Atlas.png", "book"),
    new Weapon("Воспоминания Тулайтуллы", src="css/images/weapons/5star/books/Weapon_Tulaytullahs_Remembrance.png", "book"),


    new Weapon("Деревянный клинок", src="css/images/weapons/4star/dendroSword.png", "sword"),
    new Weapon("Меч флейта", src="css/images/weapons/4star/The_Flute_A1.png", "sword"),
    new Weapon("Аменома кагеути", src="css/images/weapons/4star/Weapon_Amenoma_Kageuchi_Full_Icon.png", "sword"),
    new Weapon("Черногорский длинный меч", src="css/images/weapons/4star/Weapon_Blackcliff_Longsword_3D.png", "sword"),
    new Weapon("Киноварное веретено", src="css/images/weapons/4star/Weapon_Cinnabar_Spindle_Full_Icon.png", "sword"),
    new Weapon("Меч фавония", src="css/images/weapons/4star/Weapon_Favonius_Sword_3D.png", "sword"),
    new Weapon("Осквернённое желание", src="css/images/weapons/4star/Weapon_Festering_Desire_3D.png", "sword"),
    new Weapon("Стальное жало", src="css/images/weapons/4star/Weapon_Iron_Sting_Wish.png", "sword"),
    new Weapon("Кагоцурубэ Иссин", src="css/images/weapons/4star/Weapon_Kagotsurube_Isshin_Wish.png", "sword"),
    new Weapon("Драконий рык", src="css/images/weapons/4star/Weapon_Lion_Roar_3D.png", "sword"),
    new Weapon("Прототип злоба", src="css/images/weapons/4star/Weapon_Prototype_Rancour_3D.png", "sword"),
    new Weapon("Меч аристократов", src="css/images/weapons/4star/Weapon_Royal_Longsword_3D.png", "sword"),
    new Weapon("Церемониальный меч", src="css/images/weapons/4star/Weapon_Sacrificial_Sword_3D.png", "sword"),
    new Weapon("Меч нисхождения", src="css/images/weapons/4star/Weapon_Sword_of_Descension_Wish.png", "sword"),
    new Weapon("Вспышка во тьме", src="css/images/weapons/4star/Weapon_The_Alley_Flash_Full_Icon.png", "sword"),
    new Weapon("Чёрный меч", src="css/images/weapons/4star/Weapon_The_Black_Sword_3D.png", "sword"),
    new Weapon("Лунное сияние ксифоса", src="css/images/weapons/4star/xiphos.png", "sword"),
    new Weapon("Токабо сигурэ", src="css/images/weapons/4star/zontik.png", "sword"),

    new Weapon("Улов", src="css/images/weapons/4star/Weapon_The_Catch_Full_Icon.png", "spear"),
    new Weapon("Смертельный бой", src="css/images/weapons/4star/Deathmatch_A1.png", "spear"),
    new Weapon("Пронзающий луну", src="css/images/weapons/4star/dendroSpear.png", "spear"),
    new Weapon("Копьё послания ветров", src="css/images/weapons/4star/UI_EquipIcon_Pole_Windvane.png", "spear"),
    new Weapon("Черногорская пика", src="css/images/weapons/4star/Weapon_Blackcliff_Pole_Wish.png", "spear"),
    new Weapon("Пика полумесяца", src="css/images/weapons/4star/Weapon_Crescent_Pike_Wish.png", "spear"),
    new Weapon("Гроза драконов", src="css/images/weapons/4star/Weapon_Dragon_Bane_Wish.png", "spear"),
    new Weapon("Копьё драконьего хребта", src="css/images/weapons/4star/Weapon_Dragonspine_Spear_Wish.png", "spear"),
    new Weapon("Копьё фавония", src="css/images/weapons/4star/Weapon_Favonius_Lance_3D.png", "spear"),
    new Weapon("Крест-копьё китаин", src="css/images/weapons/4star/Weapon_Kitain_Cross_Spear_Full_Icon.png", "spear"),
    new Weapon("Каменное копьё", src="css/images/weapons/4star/Weapon_Lithic_Spear_Wish.png", "spear"),
    new Weapon("Прототип звёздный блеск", src="css/images/weapons/4star/Weapon_Prototype_Starglitter_Wish.png", "spear"),
    new Weapon("Королевское копьё", src="css/images/weapons/4star/Weapon_Royal_Spear_Wish.png", "spear"),
    new Weapon("Режущий волны плавник", src="css/images/weapons/4star/Weapon_Wavebreaker_Fin_Full_Icon.png", "spear"),

    new Weapon("Аквамарин махайры", src="css/images/weapons/4star/aquamarine.png", "claymore"),
    new Weapon("Регалия леса", src="css/images/weapons/4star/UI_EquipIcon_Claymore_Arakalari.png", "claymore"),
    new Weapon("Акуомару", src="css/images/weapons/4star/Weapon_Akuoumaru_Full_Icon.png", "claymore"),
    new Weapon("Черногорская бритва", src="css/images/weapons/4star/Weapon_Blackcliff_Slasher_2nd_3D.png", "claymore"),
    new Weapon("Двуручный меч фавония", src="css/images/weapons/4star/Weapon_Favonius_Greatsword_3D.png", "claymore"),
    new Weapon("Кацурагикири нагамаса", src="css/images/weapons/4star/Weapon_Katsuragikiri_Nagamasa_Full_Icon.png", "claymore"),
    new Weapon("Каменный меч", src="css/images/weapons/4star/Weapon_Lithic_Blade_3D.png", "claymore"),
    new Weapon("Благородный владыка вод", src="css/images/weapons/4star/Weapon_Luxurious_Sea-Lord_3D.png", "claymore"),
    new Weapon("Прототип архаичный", src="css/images/weapons/4star/Weapon_Prototype_Archaic_3D.png", "claymore"),
    new Weapon("Дождерез", src="css/images/weapons/4star/Weapon_Rainslasher_3D.png", "claymore"),
    new Weapon("Королевский двуручный меч", src="css/images/weapons/4star/Weapon_Royal_Greatsword_3D.png", "claymore"),
    new Weapon("Церемониальный двуручный меч", src="css/images/weapons/4star/Weapon_Sacrificial_Greatsword_3D.png", "claymore"),
    new Weapon("Меч драконьей кости", src="css/images/weapons/4star/Weapon_Serpent_Spine_3D.png", "claymore"),
    new Weapon("Заснеженное звёздное серебро", src="css/images/weapons/4star/Weapon_Snow-Tombed_Starsilver_2nd_3D.png", "claymore"),
    new Weapon("Меч колокол", src="css/images/weapons/4star/Weapon_The_Bell_Wish.png", "claymore"),
    new Weapon("Белая тень", src="css/images/weapons/4star/Weapon_Whiteblind_3D.png", "claymore"),
    
    new Weapon("Иссушитель", src="css/images/weapons/4star/fishBow.png", "bow"),
    new Weapon("Приближённый короля", src="css/images/weapons/4star/priblizhennyj.png", "bow"),
    new Weapon("Охотник во тьме", src="css/images/weapons/4star/Weapon_Alley_Hunter_Full_Icon.png", "bow"),
    new Weapon("Черногорский лук", src="css/images/weapons/4star/Weapon_Blackcliff_Warbow_Wish.png", "bow"),
    new Weapon("Составной лук", src="css/images/weapons/4star/Weapon_Compound_Bow_Wish.png", "bow"),
    new Weapon("Гаснущие сумерки", src="css/images/weapons/4star/Weapon_Fading_Twilight_3D.png", "bow"),
    new Weapon("Боевой лук фавония", src="css/images/weapons/4star/Weapon_Favonius_Warbow_3D.png", "bow"),
    new Weapon("Хамаюми", src="css/images/weapons/4star/Weapon_Hamayumi_Full_Icon.png", "bow"),
    new Weapon("Вальс нирваны ночи", src="css/images/weapons/4star/Weapon_Mitternachts_Waltz_Full_Icon.png", "bow"),
    new Weapon("Луна моун", src="css/images/weapons/4star/Weapon_Mouun_Moon_Full_Icon.png", "bow"),
    new Weapon("Хищник", src="css/images/weapons/4star/Weapon_Predator_Wish.png", "bow"),
    new Weapon("Прототип полумесяц", src="css/images/weapons/4star/Weapon_Prototype_Crescent_Wish.png", "bow"),
    new Weapon("Королевский лук", src="css/images/weapons/4star/Weapon_Royal_Bow_Wish.png", "bow"),
    new Weapon("Ржавый лук", src="css/images/weapons/4star/Weapon_Rust_Wish.png", "bow"),
    new Weapon("Церемониальниый лук", src="css/images/weapons/4star/Weapon_Sacrificial_Bow_3D.png", "bow"),
    new Weapon("Бесструнный", src="css/images/weapons/4star/Weapon_The_Stringless_3D.png", "bow"),
    new Weapon("Зелёный лук", src="css/images/weapons/4star/Weapon_The_Viridescent_Hunt_3D.png", "bow"),
    new Weapon("Ода анемонии", src="css/images/weapons/4star/Weapon_Windblume_Ode_Wish.png", "bow"),
    
    new Weapon("Плод восполнения", src="css/images/weapons/4star/UI_EquipIcon_Catalyst_Arakalari.png", "book"),
    new Weapon("Скитающаяся звезда", src="css/images/weapons/4star/wandering_evenstar.png", "book"), 
    new Weapon("Черногорский агат", src="css/images/weapons/4star/Weapon_Blackcliff_Agate_3D.png", "book"),
    new Weapon("Истории додоко", src="css/images/weapons/4star/Weapon_Dodoco_Tales_3D.png", "book"),
    new Weapon("Око сознания", src="css/images/weapons/4star/Weapon_Eye_of_Perception_Wish.png", "book"),
    new Weapon("Кодекс фавония", src="css/images/weapons/4star/Favonius_Codex_3D_A1.png", "book"),
    new Weapon("Плод вечной мерзлоты", src="css/images/weapons/4star/Weapon_Frostbearer_Wish.png", "book"),
    new Weapon("Кольцо хакусин", src="css/images/weapons/4star/Weapon_Hakushin_Ring_Wish.png", "book"),
    new Weapon("Морская карта", src="css/images/weapons/4star/Weapon_Mappa_Mare_3D.png", "book"),
    new Weapon("Око клятвы", src="css/images/weapons/4star/Weapon_Oathsworn_Eye_3D.png", "book"),
    new Weapon("Прототип янтарь", src="css/images/weapons/4star/Weapon_Prototype_Amber_3D.png", "book"),
    new Weapon("Королевский гримуар", src="css/images/weapons/4star/Weapon_Royal_Grimoire_Wish.png", "book"),
    new Weapon("Церемониальные мемуары", src="css/images/weapons/4star/Weapon_Sacrificial_Fragments_Wish.png", "book"),
    new Weapon("Солнечная жемчужина", src="css/images/weapons/4star/Weapon_Solar_Pearl_3D.png", "book"),
    new Weapon("Песнь странника", src="css/images/weapons/4star/Weapon_The_Widsith_3D.png", "book"),
    new Weapon("Вино и песни", src="css/images/weapons/4star/Weapon_Wine_and_Song_Full_Base.png", "book"),
    
    
    new Weapon("Холодное лезвие", src="css/images/weapons/3star/Weapon_Cool_Steel_3D.png", "sword"),
    new Weapon("Тёмный железный меч", src="css/images/weapons/3star/Weapon_Dark_Iron_Sword_3D.png", "sword"),
    new Weapon("Филейный нож", src="css/images/weapons/3star/Weapon_Fillet_Blade_3D.png", "sword"),
    new Weapon("Предвестник зари", src="css/images/weapons/3star/Weapon_Harbinger_of_Dawn_3D.png", "sword"),
    new Weapon("Меч небесного всадника", src="css/images/weapons/3star/Weapon_Skyrider_Sword_3D.png", "sword"),
    new Weapon("Меч путешественника", src="css/images/weapons/3star/Weapon_Traveler_Handy_Sword_3D.png", "sword"),

    new Weapon("Чёрная кисть", src="css/images/weapons/3star/Weapon_Black_Tassel_3D.png", "spear"),
    new Weapon("Алебарда миллелита", src="css/images/weapons/3star/Weapon_Halberd_3D.png", "spear"),
    new Weapon("Белая кисть", src="css/images/weapons/3star/Weapon_White_Tassel_3D.png", "spear"),

    new Weapon("Меч драконьей крови", src="css/images/weapons/3star/Weapon_Bloodtainted_Greatsword_3D.png", "claymore"),
    new Weapon("Дубина переговоров", src="css/images/weapons/3star/Weapon_Debate_Club_3D.png", "claymore"),
    new Weapon("Металлическая тень", src="css/images/weapons/3star/Weapon_Ferrous_Shadow_3D.png", "claymore"),
    new Weapon("Большой меч небесного рыцаря", src="css/images/weapons/3star/Weapon_Skyrider_Greatsword_3D.png", "claymore"),
    new Weapon("Меч из белого железа", src="css/images/weapons/3star/Weapon_White_Iron_Greatsword_3D.png", "claymore"),

    new Weapon("Посыльный", src="css/images/weapons/3star/Weapon_Messenger_3D.png", "bow"),
    new Weapon("Лук ворона", src="css/images/weapons/3star/Weapon_Raven_Bow_3D.png", "bow"),
    new Weapon("Изогнутый лук", src="css/images/weapons/3star/Weapon_Recurve_Bow_3D.png", "bow"),
    new Weapon("Клятва стрелка", src="css/images/weapons/3star/Weapon_Sharpshooter_Oath_3D.png", "bow"),
    new Weapon("Рогатка", src="css/images/weapons/3star/Weapon_Slingshot_3D.png", "bow"),   

    new Weapon("Изумрудный шар", src="css/images/weapons/3star/Weapon_Emerald_Orb_3D.png", "book"),
    new Weapon("Руководство по магии", src="css/images/weapons/3star/Weapon_Magic_Guide_3D.png", "book"),
    new Weapon("Потустронняя история", src="css/images/weapons/3star/Weapon_Otherworldly_Story_3D.png", "book"),
    new Weapon("Эпос о драконоборцах", src="css/images/weapons/3star/Weapon_Thrilling_Tales_of_Dragon_Slayers_3D.png", "book"),
    new Weapon("Парный нефрит", src="css/images/weapons/3star/Weapon_Twin_Nephrite_3D.png", "book"),
    
    
    new Weapon("Серебряный меч", src="css/images/weapons/2star/Weapon_Silver_Sword_3D.png", "sword"),
    new Weapon("Железный наконечник", src="css/images/weapons/2star/Weapon_Iron_Point_3D.png", "spear"),
    new Weapon("Лучший друг наёмника", src="css/images/weapons/2star/Weapon_Old_Merc_Pal_3D.png", "claymore"),
    new Weapon("Лук опытного охотника", src="css/images/weapons/2star/Weapon_Seasoned_Hunter_Bow_3D.png", "bow"),
    new Weapon("Карманный гримуар", src="css/images/weapons/2star/Weapon_Pocket_Grimoire_3D.png", "book"),
    

    new Weapon("Тупой меч", src="css/images/weapons/1star/Weapon_Dull_Blade_3D.png", "sword"),
    new Weapon("Копьё новичка", src="css/images/weapons/1star/Weapon_Beginner_Protector_3D.png", "spear"),
    new Weapon("Двуручный меч богатыря", src="css/images/weapons/1star/Weapon_Waster_Greatsword_3D.png", "claymore"),
    new Weapon("Лук охотника", src="css/images/weapons/1star/Weapon_Hunter's_Bow_3D.png", "bow"),
    new Weapon("Записки ученика", src="css/images/weapons/1star/Weapon_Apprentice_Notes_3D.png", "book")
    
    
];