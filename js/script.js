/********************************************/
/*              AJAX PART                   */
/********************************************/

// Point bonus avec AJAX

function getXMLHttpRequest() {
    var xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    return xhr;
}

function request(callback) {
    var xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            //créer une fonction permettant de récupérer les informations du fichier JSON
        }
    };

    xhr.open("GET", "", true);
    xhr.send(null);
}

function getTravelsFromApi(responseApi) {
    //Parser le fichier JSON
    //Effectuer le traitement d'affichage
}

//let travelLille = [];

/********************************************/
/*            JAVASCRIPT PART               */
/********************************************/

//
let travels = [
    {
        "agence": "TravelVille - Lille",
        "adress": "41 rue du port 59000 Lille",
        "opening_time": "8am-12am, 2pm:8pm",
        "travels": [
            {
                "id": 1,
                "country": "France",
                "starting_price": 855,
                "image": "https://www.traditours.com/cache/fra-20j-414-800x400.jpg",
                "description": "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire.",
                "travel_country": [
                    {
                        "name": "Lille",
                        "price": 233,
                        "image": "https://s-ec.bstatic.com/xdata/images/city/400x300/681714.webp?k=e62bc4dc1d51a0973630d7e8ffc11260aa5fede6a2718499c869e523a336541e&o=",
                        "description": "Lille est la capitale des Hauts-de-France, une région du nord de la France. Elle se trouve à proximité de la frontière belge. Aujourd'hui centre culturel et ville universitaire animée, elle fut autrefois une importante plateforme marchande des Flandres françaises, et de nombreuses influences flamandes demeurent encore. Le centre historique, le Vieux Lille, se caractérise par ses maisons de ville du XVIIe siècle en briques rouges, ses ruelles piétonnes pavées et sa Grand'Place centrale."
                    },
                    {
                        "name": "Paris",
                        "price": 400,
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/713px-Paris_Night.jpg",
                        "description": "Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré."
                    },
                    {
                        "name": "Marseille",
                        "price": 300,
                        "image": "https://wereso.com/wp-content/uploads/2017/08/wereso-marseille.png",
                        "description": "Marseille, ville portuaire du sud de la France, est un carrefour du commerce et de l'immigration depuis sa fondation par les Grecs vers 600 av. J.-C. En son cœur se trouve le Vieux-Port où les pêcheurs vendent leurs prises sur le quai bordé de bateaux. La basilique Notre-Dame-de-la-Garde est une église romane d'inspiration byzantine. Les constructions modernes incluent notamment la Cité Radieuse, unité d'habitations conçue par Le Corbusier et la Tour CMA CGM de Zaha Hadid."
                    },
                    {
                        "name": "Nice",
                        "price": 500,
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg",
                        "description": "Nice est la capitale du département des Alpes-Maritimes sur la Côte d'Azur. Elle est située sur le littoral de galets de la baie des Anges. Fondée par les Grecs puis prisée par l'élite européenne au XIXe siècle, la ville attire l'attention des artistes depuis longtemps. Le musée Henri Matisse est consacré au parcours artistique du peintre niçois. Le musée Marc Chagall abrite certaines des plus grandes œuvres religieuses de l'artiste auquel il doit son nom."
                    },
                    {
                        "name": "Bordeaux",
                        "price": 500,
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1200px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg",
                        "description": "Bordeaux, au cœur de la région viticole, est une ville portuaire située sur la Garonne, dans le sud-ouest de la France. Elle est réputée pour la cathédrale gothique de Saint-André, ses manoirs construits aux XVIIIe et XIXe siècles, ainsi que ses musées d'art comme le musée des Beaux-Arts de Bordeaux. Les jardins publics suivent les courbes des quais qui longent le fleuve. La place de la Bourse, au centre de laquelle trône la fontaine des Trois Grâces, se reflète dans le miroir d'eau."
                    },
                    {
                        "name": "Nantes",
                        "price": 500,
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Marit%C3%A9.jpg/1200px-Marit%C3%A9.jpg",
                        "description": "Nantes est une ville située sur la Loire dans la région Haute-Bretagne à l'ouest de la France ayant un passé de centre portuaire et industriel. Elle abrite le château médiéval des ducs de Bretagne, qui a été récemment rénové. Le château est devenu un musée d'histoire locale proposant des expositions multimédias ainsi qu'une promenade sur ses remparts fortifiés."
                    }
                ]
            },
            {
                "id": 2,
                "country": "Espagne",
                "starting_price": 700,
                "image": "https://img-4.linternaute.com/-6ZSS_niygj0fM3DgK5HdFSdc3k=/1240x/smart/11c68cc2e0d04c1d936baf0c2de3ea65/ccmcms-linternaute/10666064.jpg",
                "description": "L'Espagne est un pays européen situé sur la péninsule ibérique et comprenant 17 régions autonomes à la géographie et aux cultures diverses. Madrid, la capitale, abrite le palais royal et le musée du Prado, où sont exposées les œuvres d'artistes européens. On peut admirer à Ségovie un château médiéval (l'Alcazar) et un aqueduc romain intact. La capitale de la Catalogne, Barcelone, se caractérise par les monuments modernistes d'Antoni Gaudí, notamment la Sagrada Família.",
                "travel_country": [
                    {
                        "name": "Barcelone",
                        "price": 500,
                        "image": "https://www.igesa.fr/uploads/tx_moduleetablissementbo/barcelona-1892487_960_720.jpg",
                        "description": "Barcelone, la capitale cosmopolite de la région espagnole de Catalogne, est réputée pour son art et son architecture. La basilique de la Sagrada Família et d'autres bâtiments emblématiques conçus par Antoni Gaudí sont de parfaits exemples du modernisme catalan. Le musée Picasso et la fondation Joan Miró présentent des œuvres d'art réalisées par les artistes qui leur ont donné leur nom. Le MUHBA, musée d'histoire de Barcelone, présente plusieurs vestiges de l'ancienne ville romaine."
                    },
                    {
                        "name": "Madrid",
                        "price": 1000,
                        "image": "https://viaimage3.viafrance.com//img/img-1000x500/2/5/4/254812_1000x500.jpg",
                        "description": "Située au centre de l'Espagne, Madrid, sa capitale, est une ville dotée d'élégants boulevards et de vastes parcs très bien entretenus comme le Retiro. Elle est réputée pour ses riches collections d'œuvres d'art européennes, avec notamment celles du musée du Prado, réalisées par Goya, Velázquez et d'autres maîtres espagnols. Au cœur de la vieille Madrid des Habsbourgs se trouve la Plaza Mayor, bordée de portiques, et, à proximité, le Palais royal baroque et son Armurerie, qui comporte des armes historiques."
                    }
                ]
            },
            {
                "id": 3,
                "country": "Allemagne",
                "starting_price": 600,
                "image": "https://www.nacel.fr/medias/_cache/pays/5/imagePrincipale/1920_1440/sejour-linguistique-allemagne.jpg",
                "description": "L'Allemagne est un pays d'Europe de l'Ouest dont le paysage se compose de forêts, de rivières, de chaînes montagneuses et de plages sur la mer du Nord. Son histoire remonte à plus de 2 000 ans en arrière. Dotée d'une vie artistique et nocturne animée, Berlin, sa capitale, inclut la porte de Brandebourg et de nombreux sites en lien avec la Seconde Guerre mondiale. Munich est connue pour son Oktoberfest et ses bars à bières, notamment l'Hofbräuhaus qui date du XVIe siècle. Francfort, avec ses gratte-ciel, abrite la Banque centrale européenne.",
                "travel_country": []
            },
            {
                "id": 4,
                "country": "Italie",
                "starting_price": 850,
                "image": "http://www.angelio.net/blogangelio/wp-content/uploads/2018/06/ITAATTOS_pise-circuits-autotour-toscane-italie-tui.jpg",
                "description": "L'Italie, pays européen bordé par la Méditerranée et l'Adriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des trésors artistiques et des ruines antiques. Les autres grandes villes comprennent Florence, avec des chefs-d'œuvre de la Renaissance comme le David de Michel-Ange et le dôme de Brunelleschi, Venise, la ville des canaux, et Milan, la capitale italienne de la mode.",
                "travel_country": []
            },
            {
                "id": 5,
                "country": "Grece",
                "starting_price": 950,
                "image": "https://www.partir.com/images/pays/pays-photos-800/grece-santorin-vieille-ville.jpg",
                "description": "La Grèce est un pays du sud-est de l'Europe, composé de milliers d'îles parsemant les mers Égée et Ionienne. Influente pendant l'Antiquité, elle est souvent surnommée le berceau de la civilisation occidentale. Athènes, sa capitale, regroupe de nombreux sites d'intérêt, notamment l'Acropole, datant du Ve siècle avant JC, où se trouve le Parthénon. La Grèce est également connue pour ses plages, des étendues de sable noir de Santorin aux complexes animés de Mykonos.",
                "travel_country": []
            },
            {
                "id": 5,
                "country": "Suisse",
                "starting_price": 1200,
                "image": "https://cdn.tui.be/img/destinations/Header/frvacance-suisse.jpg",
                "description": "La Suisse est un pays montagneux d'Europe centrale abritant de nombreux lacs et villages, ainsi que les hauts sommets des Alpes. Les villes du pays comprennent des quartiers médiévaux et des monuments comme la Zytglogge (tour-clocher) de Berne, la capitale, et le pont en bois de la chapelle de Lucerne. Le pays est également réputé pour ses stations de ski et ses sentiers de randonnée. Les industries clés sont les secteurs bancaire et financier, et les montres et le chocolat suisses sont mondialement célèbres.",
                "travel_country": []
            }
        ]
    }
];

function getTravelsFromLille() {
    //Parcourir les différents voyages de l'agence de lille
    //aller rechercher la div #returnDestination pour afficher le code html
    //faire appel à la fonction createHtmlContentCountry
    //afficher le code html obtenu
}

function getDetailsCountry(id) {
    //fonction pour récupérer les différentes villes du pays sélectionné.
    //aller rechercher la div #returnDestination pour afficher le code html et supprimer le précédent contenu
    //faire appel à la fonction createHtmlContentDetailsCountry
    //afficher le code html obtenu
}

function createHtmlContentCountry(content) {
    //permet de construire la cardview avec le pays
}

function createHtmlContentDetailsCountry(content) {
    //permet de construire la cardview avec la ville courante
}

function createHtmlContentBtnBackHome() {
    //créer le contenu du bouton retour arrière dans le HTML
    //Prévoir le retour arrière sur le bouton
}

function backToHomePage() {
    //implémenter le retour à la page précédente
}