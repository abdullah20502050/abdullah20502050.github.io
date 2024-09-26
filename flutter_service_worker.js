'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4845187fa88084d798a2ed427071f9bc",
".git/config": "a5c471c3ca5e2e13995e61dfb6f2b30f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "239bb13b077269986f822c8416d2a5e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbb9b4222e092872655c436d1a3cf339",
".git/logs/refs/heads/main": "7781fc8e759b2d5cde46e84f274b8753",
".git/logs/refs/remotes/origin/main": "d115ae3c3f593bc98f05a399573b6936",
".git/objects/00/93c547779748db852353173a9c450d7f7c5277": "82109d387681e3637410d7eee64459ef",
".git/objects/02/1132d47a2011565b54c0626b88ad26b2175580": "8ae7a8587b0f73b79a8fac2143a10dca",
".git/objects/02/445e29cb402b5086113972c1a7b6d3ecf7780b": "8b7af5e6682c5280dcfb8284f69716b4",
".git/objects/02/9a1a60e0d9cfd6bd1122f53c1644bc29924a5b": "1633cf5329b02369541d886a865056e1",
".git/objects/02/cd9b0129e5f1a9b3ac403535ab1d5bad8e9e89": "c71313b4efa603a69cd3bd7ff54a450d",
".git/objects/05/90f80292874a11cd1374121bbe2b181f8f0cba": "b2d17488749f3fef281d1530f0b3a24c",
".git/objects/07/68602c90483642c1b69229ea7059e23a07d722": "865899cb3dd3f198a57a100cacd8881c",
".git/objects/0b/7d6a9b11f732fd35fac8025521d2e0aa4c5846": "aa66b43fafb1f02a7230460c7863af2b",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/4476695ca90805895afb8bb0863522e234c03d": "bfd830029b66bd68af0adff520d20ec6",
".git/objects/0c/d7186b0eb0374cbb871f572aa48c225f105999": "e67d5dee85ee0fd080821a23dc334ce3",
".git/objects/0c/f7057c68b6b4e387690d534f1239b85a1accee": "ee291a519de89b49cd207ddf07f6933b",
".git/objects/0e/8991454027a7a89ec558351bdc37fb87e99903": "b06e80ce22f95f1532a5f0167bc46657",
".git/objects/0e/bfaaf0689afe7805ece3b4bec86c0ca6cccd0e": "a1c25c0b8632a8de97044e363190174d",
".git/objects/0f/44621c70806b616952efa980fc7da7615cbf70": "b8cc42148ca93260c19c077713e7b097",
".git/objects/10/7b0fc5193f43c6201a7c24365206cb65b0c4be": "278ba0962b4f27b4ea1bcf5e78649b5f",
".git/objects/11/8897cf83c0e26df098a0f46e35f8a0d9892a5a": "4ae81b1813a6f1e2877b52617bf0c09b",
".git/objects/12/0c867c088c0e701f3fc08ff5341e3736cd7585": "976f18b81edff2be2f3364e5e2e53d78",
".git/objects/14/177db93d3c086ccecd1aaf693f13e587e2e296": "2753df6f28ee4ae1f9af2d93ad28772b",
".git/objects/14/ef97865529d1fb31bb9a6e960fc73fb2047f85": "ffbdfa50d531cc50e335ed8e7da8299b",
".git/objects/15/4a4d8860c337111d60f4ee251bf066645a909c": "2ee9d8231e4f6a444df1c3ac02661511",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/3600b580ed1ab184df78e250693684a02ab9cd": "2a2365e79516e0d75a86e89ffe62491d",
".git/objects/18/de2adee330a41954a86c62ed05b9ea6e1371ea": "b85895efb5abe93bb300ba8c35669420",
".git/objects/19/0c56309298a288427ff3f06c289b5d957fb86f": "053969a8b233f163a6c11f86ec30f98b",
".git/objects/19/fc2c8046de10357f8f78b460c3597b2506d14c": "6d7e9b38ef608fbd63865625e1d3f0c4",
".git/objects/1c/2a57b4968e940c53d8888a9505c7d9c3241b6d": "c124512b5f0d2c0fda62e44c21fc7eec",
".git/objects/1c/9c42011d34b191c01bf5bd9b34f3603526bd77": "94253df3969a9c5c3747f0d80e96d3e6",
".git/objects/1e/09ac2b85a4b8192ea057813d497c51f8f6dc47": "70f407fb043a2d9d36e2c2423575cd88",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/94529676c00704f62f7125188bb944f3a2fce0": "52400310816ef9c3f00fa4a5c9dd309f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/6aaecc6075faed422524fe42d392110fba7b44": "f53162207b1925bee806a620a4eccc69",
".git/objects/24/5ce2abe70627be807df009fbe5a200fcb32a44": "695e078022398bf4a52aa4d5267a2e18",
".git/objects/27/6ee0280d291eb2938080744215291f34b20298": "391451245279bba16e9df233afd64516",
".git/objects/27/7efb3c19f073340b676ee52cd5f821f82d672c": "d4bf1bba80ea3155bd0e4d789b44e090",
".git/objects/27/d81994504ee4f9b416ceb0b940db780367fbbb": "83e22a0eaf2b444386a13aa9df321038",
".git/objects/28/99ac872dde12bd910f95e282e6bcfc59117fb4": "e09d411b594e4f2d8f577f9f166253e4",
".git/objects/2c/9066c144396903f3299f99f58f7a3b7f6285a0": "d643f0367e332d384ad6dc9bbc07793c",
".git/objects/2d/05e2216d839488c9175c6d2ad5dcb91702923a": "eb3a9fe8a4f5fe6ca96b0bfdb6437701",
".git/objects/2e/f399452dfe369e92a1a5f5dbb06c47c296e441": "73791291f48e746d2dacf6b6f28254a7",
".git/objects/2f/453736575ae125c2ad2c955a231c2bb52ac3c9": "abc4adc1ba1d1a74cf2160a57d15c74c",
".git/objects/30/301fc0748d6c3c28f98c98e963ec5cf641a3f0": "514c8ec542cec3209a615669471ab47d",
".git/objects/31/2efd9d324de1d95d906bbb5b50aa8155c71e59": "b88ffd778f4358a92cbfb6d25b82c329",
".git/objects/32/959475d88cca943bbda010b6c075f6d4a2ed8f": "837fd1354b112658f320de6f954c8700",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/53c9d0a6e09281f0702c8f787cd427b5d7808f": "efcf55fddbb05e5f5f9e0cb69812e2e7",
".git/objects/35/6fb9dd3ed36e9365c1f24df2f62d36378d239d": "69189124dc1d422d1dad4ab975a669cc",
".git/objects/37/69ee0c3d3fdf04d7f37f634a2595e87a6ebbb0": "3561208d48003b36b4b7c569183b2353",
".git/objects/37/b69c16c8ab9ede493b5462244f1666b8363ad2": "c837f9111653ea6156175f98f2e15954",
".git/objects/39/dd399a350e0d71d8e19cd5fab20549e05cad65": "e5a2029ea35fbe9913663741f0e11520",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/af60d112d1ff7fadf0370bf7aba879cd14a6ee": "f53cac833c99f8513c850147ffea0b47",
".git/objects/3d/d7663dccfbb96c2267a2c8e9f8d8bc7efd976c": "ddf5d520c6a8a2c3173a3a0a2bbcda2a",
".git/objects/3d/f66cecc2a1f5b84f57cbccefdf6d6195f41a31": "8daa8fc9452a00f241b31b5280de431a",
".git/objects/40/282dfb37544a98a32e9832ab97dabfd66d747c": "694f1f59e0c984666438bdf55f7678a4",
".git/objects/43/0281c8db82b22364c3379737b1fbc22dc612d4": "f6db7e2d81e1848f1ba6bb7f2dd6c09c",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/44/155a13f24446c30509e04a601244db78b4b036": "21014a5d6fc1e4e14b0624adcd7267d3",
".git/objects/46/0e7c142ed782b80beeea9f712dccdd352861ec": "2a78f53db13805ae1766fd66d6a56bba",
".git/objects/46/9624beef7ad1a1ede3f3585f88663f57e26153": "54087496797e820fb9f9078c5ecc387a",
".git/objects/47/4e4c2c3bb605dbd8b704082f83627481847e0a": "258fbd7b14ee56fbff2e09844f60db3d",
".git/objects/47/815d99d415b49173360cc10d9cc79bcfad8e14": "65c562bce0e767ccdcafba55398817fe",
".git/objects/48/4f3b014520bdcb402f03ddd2a20d8dfc45bbf8": "8552a9bde71e83afb71a4429750261d4",
".git/objects/48/ffc27244706b28baddbf73767a80b42e146bb5": "ab539f1bb44c6fe85cb4c8ef6639ba3f",
".git/objects/4a/c6e8d28337ee9b598491a69f03053329aa3f2a": "f996792ca87ca47d5ea8714c5d77c28a",
".git/objects/4a/f3bd7c397182b9a365ac611f15168f8edc8eb3": "db79f1e36756617b1cb2e629b283fcf1",
".git/objects/4b/0bb6b8b9108709b40ec915a228dbda946280bf": "6269bbd44f932f35361e6c35791d11ce",
".git/objects/4b/b4b2149fda34a63041bdb7a55e9e7cdf8babfe": "7fd3ad35d96a8eafbc47ca83e7d4f527",
".git/objects/4c/015526c211e00da1846a656fe6c894983ea0e5": "3994150af850ad78d52bb8a4ffe5c76d",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/ab5d00f6abb37877d73c148702a6805ade9913": "b02f99bcf8a782cb735c467babc3c1d4",
".git/objects/4e/afa3b6930b74458684e17247b6d3e74a464562": "f3dc294aadd5d54c88eeb893bd69c194",
".git/objects/4f/53cfdf8869e0bdbcab346543e1d4bb83947dcf": "1be36eb7bc07dc489fe126634f0ad4d4",
".git/objects/50/3b7c44f6051db900e045fc600425a784457e65": "6ea63153161b10faa947173d21525d2f",
".git/objects/50/67f856d9f9174716cfdfd4b1971e6a757cb3ef": "ee91ad6b88dae8bade922c000d42514d",
".git/objects/53/125384d2655329713a42651d5c2e70c690dd16": "bbe2a727003d273136b1436841848628",
".git/objects/53/5069f5d18345b59867f7b735c571e2e19a4e27": "11ded0f1dd9f1031a58755bb8bbc5104",
".git/objects/58/08924a05b0d38236079a2cdb810ac91cd08752": "65759e81a147063d59c3a5fd223ef8e7",
".git/objects/59/ac70962d20442f81fe20aab74bc5365f9aff5b": "77cdac0f1f4ec29fb6d83c3ac7982c7b",
".git/objects/5b/aeddf681bc0caba11d3083b259db84a87e4abb": "f63abd4adcb879e623a3903532a920af",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/7a0bb7e0db062546f260a2b646a6f3d0170bdd": "c4b2f8e7f8e0470d2df6a8b8f1b189bf",
".git/objects/5d/e7291660dfced26610fd0b9e574b00f5f661ff": "cbe216ed485fa405a88ac85b60347b77",
".git/objects/5f/91027ddfae7c34ce8aca803a1aee6b41bb7e6a": "0af8c618d8d0be7fb644088f3017cd31",
".git/objects/5f/d8388b21a38c71c6e2251f381a387146971268": "2c97c635b877544cda6ec3cf4787d7d5",
".git/objects/64/268689dadea8f952e785d9bc5ef9e73d594009": "95556dd2667e19e11b7cca6c62662723",
".git/objects/67/aca2c7e998fe7c544e71dcf2d1ecc213d0bfd6": "f47f4ae449a87fe359a5df174713db5c",
".git/objects/69/b68b5b5b424b79035cd40e5c8acf7c2c22f409": "a7552f2e8cac8de5be932f29789f5845",
".git/objects/69/efe732435bc5e174f08c7d1610c8407dbfcb38": "c682fa124ff352f5a2862dbcf1ff939d",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6a/dacc890d5401095ac147e55350591bba4b83f5": "6ca277c275df35c50111e7ccbed15183",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/82969510df5e3a9d17a1bb4d3c3c27b3c7cbe4": "ea7a677be189a2801649571708921b12",
".git/objects/6e/6d3c9fd736fb510ebdeb1cf094b38111c72e8a": "13cb6a5153acad9a84645d4a1a98287f",
".git/objects/71/1457896e75d5a6fa6fd6919d8fd95343e815c1": "841632f68aa1139ff9b862ae7b32a20f",
".git/objects/73/1a69318e357910cbd7f4d34b668a2be125c040": "2156092f0a4d6fb2ead0f5d8d9666691",
".git/objects/75/43f66fc83fe821995ff49438368095dea4d6db": "4c2f7e40805f3eaadeab70ed0f1778b8",
".git/objects/77/0b32499cafc41569ab77e35fdd34bcf92df75c": "77f74ef36931542e34ca51433bc3b6b5",
".git/objects/77/921728085261bfeaa50124b995a04aed4846cc": "c48c30b757ad72db9f7ae534ebebc83d",
".git/objects/78/1fd15618a00be9f10c237e40dd45f8ed6db693": "7dc3041cd337dd827b09e78e7bd35a74",
".git/objects/78/49b0acdfde2c61f148e95cf40475c07d76214c": "5a10f9a816ae6098edac4225a2e565e5",
".git/objects/78/fb2a461d662be221276d7720d0b3c1963e6a22": "e8e4317560acf1736445cd6f43900ad1",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/79/9a8fa3603a66288647d832a7dec9a7d20ee38c": "42d77e9b3e7b7aadd31cb8abdfc7114a",
".git/objects/7a/25d411933c4493840bd7f3f6839e1330d0f5d9": "3f63a5cbe92f1f1426f5b044a51d16ed",
".git/objects/7b/365ed0a9011195b20d00a2730a12c7d0006c27": "4f61594df94a52f3f1580e9caf18aaa4",
".git/objects/7b/59a9685a5d467df2d2a894d6b15d8fe815488c": "a6389961a03398ac2b9651766c221134",
".git/objects/7d/49ac6516b15fcd4a0d318f2e1091f08672ce4b": "b7692a60a69fa215b8fc3db6e893aea4",
".git/objects/7f/2eb968f32deaae1e052c105508d0758e271a13": "9d27c51ab79b89792496172d9cf68819",
".git/objects/7f/3358fedb135c4a9bb77ff7bd2591cff9809250": "f983c3e8bfccd73af21fa0c63ff641c0",
".git/objects/7f/c0d5b8316c5fffda0cc3c2f010b10efe5b5a40": "de83fe52221bdca9cceadf50f0908430",
".git/objects/7f/ea00898d82bcfe23b77c5f0d72add7825b3156": "624877ca2f60712f7887a88cc5606860",
".git/objects/80/464f7e30999ede925a58b295cf0fd12ac7522b": "3b1a9aed89a9505f8aa9924a0a370017",
".git/objects/80/ccc2be0f754e9b27ac6c52e5a996ff98494670": "64759bbbd5c75d3eb1908fb1443dd952",
".git/objects/80/d56512236ebb7df9904f7da610e8ccdd395b1e": "edbd7535e3996ce5262611a7b79b8f1b",
".git/objects/81/68adc9787e676f6d43a1a17dad065d6c30aa3e": "e824618a4463d9d2c5b43c248b386e00",
".git/objects/83/a8121b6a2307bdab65bfb3f161af49acfa0efa": "1c078a44be2e58f589a3c5f10afe9e64",
".git/objects/83/c1d99c2c996fd7ae407746c824a1e5a0a48d10": "afbd8750b4f62a9b1ed9a0d0e4b65190",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/107372780156ef96b3a4946c0a2ed21ddce54e": "326bdb341ed56c5a97a27937df0d3b3f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/cf1366258a8dae204824722f7e43813c845633": "6077885e395ee417249a16baca5c0fd8",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/1bb7214b57f880a94816bde4a40c1a76379502": "672b3f65dfae20265b06d3af21109eb1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2377d77cded6f7a17ea2a994adeb082f4bf14e": "8cb9000676082ea9acc0d2909316d8b0",
".git/objects/89/3844c84b76ed590543846cc773a3133503cffc": "8bc3eb5c977bf4cd3575063e964f28d0",
".git/objects/8a/2c432ffe74f2489d5803a2ddb6605e82a12bf1": "c1b7e3d13cecbf5137eb53e9c240ba08",
".git/objects/8a/3ad3e095f118fe10c91e4c264e5ce60fbe1c4f": "2cf516476527e9f262223d61e1a96e46",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/db16d7d2e9f91e9258130a6f7434528b93175d": "fd2272a449a75bceaf37e9e3efeb8b39",
".git/objects/8d/069f9b0b47a06f4785f3442ce87bd03d4f5cb1": "cfcd91a6893a37fa108cb15b94499ddd",
".git/objects/8f/91a6c153929474c16dad50bcec47f6fb9679e3": "ff08f6e9c69d89e23c42e7da5ec271c3",
".git/objects/90/b0a3bf63cde19b6be0f6646d2bba00cc7b8e57": "3a7fe846e6076e70129f861737e8a973",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/e05dd0417aed86d76dfbc5b1edec5e728592d3": "94a53871af21b88f40e4afc9763be9cb",
".git/objects/92/ebfffa3db1e8203d156e57353d9c65f271b6b1": "1c42c451a4684a4667d875aea2694983",
".git/objects/94/4e809235c7e987f6eda14c4e42334f5409697a": "39f26a3653a9a3f463fba7dacb687173",
".git/objects/96/f23f1f089e92edeb94ab80c6190eb1c7531d5e": "dacd30582e2d7478b3ec6d951f56af10",
".git/objects/97/a4bd40f331c73bebdd23ac9782bc408368692b": "112e2656f08cf1a316649989afe59ab3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/89681f95f02b38e2b8bc4a5a61645f0829b941": "a5fee16885e4a3503a7a8b45ecf98c26",
".git/objects/99/dee9bf7e4b6f0846aec3428472a6c8583137b9": "96fc3382f8663da65907584fcfd8b90e",
".git/objects/9e/5047833549c78376a1758a1699640651ccc9c0": "6ec6c14352e7847387b7d0079151ccaf",
".git/objects/9e/661a274093cdfba2702664546be2a52f2a5470": "fec64546fe6a00f13130269a0efb41af",
".git/objects/9f/b2a14328ba665ad8119dadf13288e3f8cfff26": "7a3edc2690499b91e22d03f883adad61",
".git/objects/a0/b3a773f71143e274ad4614c6132330e37bf13b": "8064fa72b927320149287f5ce7b94108",
".git/objects/a2/64dc49de9bdae424c4e95978340c02e9458944": "df07a6224cc0fe2b9245be2ca76a40cc",
".git/objects/a2/a1416af09f3a6ed360725b9a639c82e7a9da30": "2250332f363820a34a5fbcd18748fa0d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a5/7b6397d47d5d7553eb0978e7828de557f398b1": "6061a887c1a051178ce912ff1664cb82",
".git/objects/a6/c1ac3c18e7100d6878c1ee463ba1cec8bfad48": "062079f782d7c81fb20250e3cef1e65e",
".git/objects/a8/b1dbff2a1afe0e7504cf9a2ac45e0a055503e8": "212c908b65f9ea192e0848f826eda315",
".git/objects/a8/d126c2815839d9d9c8854d41d314e734587545": "972866c475e4c4e7353425640b9b3f0d",
".git/objects/a8/f18f437470323304ed13eca4015bdfa2775cdc": "0da2f7fb39f21de81d06e8fa611b9f50",
".git/objects/a9/f59c49a25d835a26d49374694b7fbae668db2a": "c4f34847a2842f6a6a1a25b8feeaa934",
".git/objects/aa/61c918e3ed1e70305a39435dbd1bc794aec471": "8efecd4ea131af012cedfd66b32ba99e",
".git/objects/ae/28d8f93b0f0d42b53d5ea75c155a2c1090a000": "12442898349b023c1fc8b4f46496b28d",
".git/objects/b1/27899bc8dce4a5c99f9c14b0606be4d13bdc6b": "6c11e5b85e72d84375bdc4226da977e9",
".git/objects/b1/d53ab2697bbe25f2c1dd2eaa73584f273678dd": "12988fb15a4143e4849aae56ecf34fb6",
".git/objects/b2/c7f513563b646a5e5cdde2b96c3c0c25416c60": "aa1e7f3cd13e05a03ebec9d07727c675",
".git/objects/b3/bee578be804f98cc9095ef3a958001e2860522": "40d2964182a5f5e79da2e526d6cf0475",
".git/objects/b5/19ece33f429ec617839ad657abc5c7de3516d1": "80cdd3a5ee1c4a4b76484ff3e4a71347",
".git/objects/b5/7907f69cd187708d1250538d3e4abc2f832bb2": "4e207bf169753b949d65b1937ed19528",
".git/objects/b5/822f1c2728879ac33703b906981d5474a02c5a": "81b1febefa13c3376df3a6cd4532ce20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8ad92aa510419c8a1bde004755129d028ff628": "95aafbc47e84027484e446b03ccf640f",
".git/objects/b9/2102006919d8593e18d3fe3e4d4dcf9027cdcb": "f7753ee45adc822added95fa2a6e7c0c",
".git/objects/b9/22a99464f7bbfcf22986f35a5eadb0bcd90bf8": "87359075c02b3a0887c581f3782b44b8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f81b104e334217414badb6f5271dfad591247f": "d1bc6ba96c11cd8ae81f786f1febb979",
".git/objects/bb/79f2f81a2afbda59db7816029a159e888f0a43": "bba342c0edf1b554c1fee83ece53588c",
".git/objects/bc/cb1d53b8b8678677c90f2c8aeec0edea9ca7d9": "0124ca73938ed2474a3affad648bac74",
".git/objects/c0/6fa298329610b834d901c1e4f37881fe39e597": "d000275dc8c915516941e88c4c98cc38",
".git/objects/c2/319ac53fa93d18b7698826ac20de6d55cf7d52": "b88304f9a578148a373e8eb533add8d0",
".git/objects/c3/c65cf78eaff5d597cc091764ecf71c93487468": "813a26929d8f27398d3153e216618971",
".git/objects/c7/f9d67d2b6374faee04961a6b8d4b875509721b": "0f1b32660814fd5d7c3c9ae6d27e8030",
".git/objects/c9/3cf3a5efaa5e63d2675ecaf342e70860161ddf": "53c80431d4de9a19e79d818f6ac84266",
".git/objects/c9/7aec0ed49e12cb5867a9c78accc5780ff50823": "1c062ed4b9ec80f59e984549b18e6b14",
".git/objects/c9/86750fda334c538d965e19ef6cc24e2101dca6": "f1b160b7f6b88ad98edd05e44faecc8e",
".git/objects/ca/27e853cdea87aec7ba5def9df649ccf07e62ed": "b85d920bbc92509a8cc0490247032928",
".git/objects/cb/c248434597e7b5fa9cdfd6ac3bb91e27e411fb": "fcc100fb4cbaa8641b76ec5dfd9f9581",
".git/objects/cc/e66c42322a1de92f1e1610f4c86c58d5504328": "a2684248e2ac144e5ddf489f131c341f",
".git/objects/d2/777cf07f8b99ea788c0b4d87d50b639f9cef03": "aa4673646c054923c0dc9692797647ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9b84f3a41ae174454b4da55403f36cad65c90d": "f9a58e7b4e854c61e9c2b26457d9b21e",
".git/objects/d5/1087eeaa7b415a77cce2fdc31f65495968f58e": "2af2c971ae49cd08446a597b754b889b",
".git/objects/d6/242088128af865643635edb5dbd0d59cd05813": "c67a88513cd0af8fd2311b67ea97c492",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/463aea1a5474727ec5b0a70b5dbe151e4ae6ce": "5eb7caaa8aa3f11db9a4306b2a831cf5",
".git/objects/da/8b8a0257d84f687b64e6c0e2764740e2c8b100": "d84c78d7c98d4f0219a1aca0f3d2e851",
".git/objects/dc/4d14e96b61b92f9a1514bd2d439a46b8b59b91": "dc36b76bc43e7a8beb81f5ae2d910dcb",
".git/objects/dc/ff0e2ae4984342624bc91a3fd8303eed20d052": "5b3744c02984e2c23d62531e6c6d5c2f",
".git/objects/dd/41644e63ed4968e639b9f4dd028cd4d4344e5c": "43fa257dafb8ddc00df7b68d759a1902",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/af45d182b85b282fbb8b323a8ebdfbbce19a80": "f3b5feb130f74608f05e4a1a90818185",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/df/f111102d5a2944f0595c517e6e4cfdc3f7398b": "04d465cb74eaabca5d64b7d544c1a3c0",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e3/1f539494a1dce77148e424d6cdd03a0b84beff": "e2ffc577f64758e327154a6bbb205079",
".git/objects/e4/1a0eacf2a82f838d10d81309e1eeef2890ae46": "1dae7b71094387ce595a1666a147cae4",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/e7/af75f34da89d8992143b3df0f640b929fdb1cd": "88d00ea2836e4b3170c28809a0e83cc1",
".git/objects/ea/162aa7fe6b11e2d8a460d7fdae54adb969cfa5": "d233d38c4dfb8fd175771ee7b4959ff9",
".git/objects/ea/a2dc01f6f0e0ac7bd1d4ac380f4f92cc4d3436": "f2c34cf8bed2e79e5be0ada3a8519bf0",
".git/objects/eb/645cfc5c7258a99f1d99986523afc0858564bc": "55a379edb184f783756f14c4e349daf5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a8fdcddaedb6200f8507c911b1f09b8cba5c11": "0438ec0efa680030c2365c766948969e",
".git/objects/ed/e09cfba2582b15fff6a7af1761f9c489ec7ab8": "6a9754322d4aaed950ec1d2add82a4eb",
".git/objects/ef/92aca4ce41a7165c03577af8a4457e1f7bcf56": "2faef3832f60d6ab208c0743e4862a28",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/223c2afcc42de4bd6f125646470487c05c308a": "fd24c74faa54f1df387da6f91279c31b",
".git/objects/f4/b3569d45e83840c6c590aaf46945541054fc54": "4977eecd69a88f2e4f03cb34873dae50",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/683db5a0aa3046fa669c31e407856747d9e789": "58d4511d97b93cd8cdc763b12c85f312",
".git/objects/f5/95a556da8d816f855d97c51847dc74eaa656ae": "d3ee01c4ad035c40a1553db83f11aa6a",
".git/objects/f5/ec0e2d69d9c780f7f49f898ea71aa1a6087f30": "51c19dce9f55f95c0e72865d42436a9a",
".git/objects/f9/e4bdcae2c2243a29abe3bbb19c7efbb74f0c7c": "65ee9f61ec86f7457f85e599c02ab03b",
".git/objects/fa/802628379f570564896808d10df0bdaa90142c": "dd887b468f85ea09972c4c106c98d29c",
".git/objects/fb/83c2698e32dc0a69b39c87dadce70b12292faf": "98a6296a3071d827acf2ffa9137aa66c",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/ff/a7f023e0dac7df74c797782de052c8be105aa6": "3303e2741a1cabaa3e5ee888792fe095",
".git/refs/heads/main": "20b03380de6b48d4e74bffad2aba7bb3",
".git/refs/remotes/origin/main": "20b03380de6b48d4e74bffad2aba7bb3",
"assets/AssetManifest.bin": "7f76f8b60a11e609c07369b0d21ec1ef",
"assets/AssetManifest.bin.json": "4ab77b10befba68de2868909b804d539",
"assets/AssetManifest.json": "d35ee05590fee24602daa9b70babae3d",
"assets/assets/ABLDR_2.JPG": "5672f4aab00c8564bc7fbea618243e1e",
"assets/assets/ABLDR_2CIRCLE.png": "c9ef5e42cacf573469f2f6e353105759",
"assets/assets/ABLDR_2IND.JPG": "51f4ff57d1020098e339c0db52f81fc1",
"assets/assets/ABSAR_C.JPG": "e72a564d40b0e93dc7b84e4f9baa09b6",
"assets/assets/ABSAR_CIND.JPG": "8beea2da06d17c8bd8529b32e4c597df",
"assets/assets/ABSAR_D.JPG": "80e384dc2edbdf46a9baec42ac70f1c1",
"assets/assets/ABSAR_DIND.JPG": "276250ce1294d501ecf84f3cfe94de8d",
"assets/assets/ABTIQ_640.JPG": "37a6d5b0fc65f88d0fe4c23170c96731",
"assets/assets/ABTIQ_640IND.JPG": "b3933ec13e56921ead8579a69675d9de",
"assets/assets/ABTIQ_640_2.JPG": "277fb9ce162d10991ddc6641655e29c9",
"assets/assets/ABTIQ_640_2_IND.JPG": "617c418b8ffdad85acc4d27d859b4c55",
"assets/assets/ALHARIS_75.JPG": "f10df6dc23365f3d54d93dea463cdabd",
"assets/assets/ALHARIS_75IND.JPG": "238facf124aefef3908925e2e7db2687",
"assets/assets/ALHARIS_75IND_2.JPG": "5f6998137e1e87b462430a4f4143ad4b",
"assets/assets/ALHARIS_75_2.JPG": "27a727140564955f334e1022728a9491",
"assets/assets/ALHARIS_75_3.JPG": "66813612fdc2a74a1f7525c99faef369",
"assets/assets/AR_3.JPG": "61bdd734de2ba8ffd6f5f7fd30e41136",
"assets/assets/AR_3IND.JPG": "76389653dd8dd6959d7a5833a0b1214b",
"assets/assets/crystal-growth-modified.png": "c64e99d3834fc0157946563677b1f010",
"assets/assets/data.txt": "7787b5fbbb20173a9cce836536147c54",
"assets/assets/dielectric_mirrors-modified.png": "c2a3b4280247997b315c351ac68bd9ac",
"assets/assets/DSC00013.jpg": "9b58d440b700543f471cfcc3a9f40896",
"assets/assets/DSC00177.JPG": "69afc417d6c99a121e0c141f84382809",
"assets/assets/Environmental-testing-modified.png": "8c4425e440d8d8e9ed6d914131484916",
"assets/assets/FAOD.jpg": "5324b6ed8d0458ad5157938891074499",
"assets/assets/FAODIND.JPG": "2f25fb9ac96aa08196373da68194d122",
"assets/assets/FAODIND_2.JPG": "dc51ddd86afb3278e2bbb1084ee1db6e",
"assets/assets/FAOD_2.JPG": "b8297d12ac86c824e799ac35bca172eb",
"assets/assets/FAOD_3.JPG": "3eeeb16036b03e2528471e74f72c3061",
"assets/assets/FAOD_4.JPG": "ed0b20287b1e2cfb0eb22ecb8e7e6be1",
"assets/assets/Header-home.png": "fe8f43e30e69d9349294fe7ad049d087",
"assets/assets/images/about/deliver.png": "3a76b1d04ca25b9a7a495d08fd134f14",
"assets/assets/images/about/leos1.png": "79d437e5d1e40d22a60c32dd3931ed0e",
"assets/assets/images/about/leos3.png": "87f04b27295525b71180ed68c976dac9",
"assets/assets/images/certificate.png": "5d5830564f299135f1b1cc25ddd50017",
"assets/assets/images/contactsection/backg.png": "acab1b96370b08f1cccba363c662eaf3",
"assets/assets/images/contactsection/contact_banner.png": "f88c9aa64be8498bd2082016e402d95f",
"assets/assets/images/customer_support/webinars/elec.jpg": "673076121a301cd160c20fe7ef16e967",
"assets/assets/images/customer_support/webinars/webinar.png": "16b780fdc5572d08961ac3f525b7a94f",
"assets/assets/images/homepage/photg.jpg": "78db083627d45b1143a29538737f6fbc",
"assets/assets/images/homepage/photo-1.jpg": "1196cdb9ca575a3ceda530b66314997e",
"assets/assets/images/homepage/photo-3a.jpg": "3bbd95a6a1ed3062cc3c68c6164efdce",
"assets/assets/images/interns/ceo1.jpg": "8be443a47f415be1654b382ba22c1783",
"assets/assets/images/interns/ceo2.jpg": "0740300ea6adc852f00ea94fa575fb46",
"assets/assets/images/interns/ceo3.jpg": "4a93b6849e695b01e33bfa6912473b34",
"assets/assets/images/interns/ceo4.jpg": "feb2041028f98cf603ed08e748fe8adb",
"assets/assets/images/interns/wd_ceo.png": "5aa5138fccff0dce9c80c25332de3d3a",
"assets/assets/images/LEOS-Original-Logo-1.png": "e5cbcd09cf6b0d626311f53a77ccca4d",
"assets/assets/images/LEOS-Original-Logo-2.png": "2d1e5ff246a46171f08414f9d55dc4d3",
"assets/assets/images/media/ideas-22/ideas-2022-3.jpg": "7f0884eaa6a83175589b6394767021db",
"assets/assets/images/media/ideas-22/ideas-2022-a.jpg": "7d9094ad53931e676f879c6d4720b29a",
"assets/assets/images/media/ideas-22/ideas-2023.jpg": "9d7ea5ad613612941e817fb6bcc3ecc9",
"assets/assets/images/news_events_media/adex/adex-2022cover.jpg": "a129431e71399b64bdc29f22d1b93ac9",
"assets/assets/images/news_events_media/independence_Day/indepday.jpg": "29b820b6fd0760cf866949ecd46b66cf",
"assets/assets/images/news_events_media/interns/abd-1.jpg": "c7cdad925c39371a7b9a06fb266929e7",
"assets/assets/images/news_events_media/news_events.png": "0b5b988575fcc153d9eca4685efb6f22",
"assets/assets/images/news_events_media/workshop_1/wa-1.jpg": "1ab7e7f2811d770db7fd8d9e60582766",
"assets/assets/images/news_events_media/workshop_1/wa-2.jpg": "865f02fea071db0d4fbec42faec631e9",
"assets/assets/images/news_events_media/workshop_1/wa-3.jpg": "8fddba5aa97b0dbd300acb942b0c6464",
"assets/assets/images/news_events_media/workshop_1/wa-4.jpg": "c95d2021606ea48f1dbc47126fc9699d",
"assets/assets/images/news_events_media/workshop_1/wa-5.jpg": "eabaa76a83cdb01ac054273cb118182d",
"assets/assets/images/news_events_media/workshop_1/wa-6.jpg": "ba1c9faf8b10319da168278dc4b93164",
"assets/assets/images/news_events_media/workshop_1/wa-7.jpg": "83e9c5ccc7dfbb317787581cc6bd9507",
"assets/assets/images/news_events_media/workshop_1/wa-8.jpg": "597302f996213a8996daf9b58668dac6",
"assets/assets/images/news_events_media/workshop_1/wa-9.jpg": "fd441c4fa96267602b51ae2c08faa63d",
"assets/assets/lrf_banner.png": "f15ebbf1df350ab44eb1e42a69fc6076",
"assets/assets/mechanical-modified.png": "62e065c81b204a7bc26f3cbb5e01d29e",
"assets/assets/mechanical_home.png": "b70998edbad2a2382dbbb3fa8134dcaf",
"assets/assets/optical_component_circle.png": "a1c6683a8bf5aefe12c16213c63572a1",
"assets/assets/Products_banner.png": "70e8195f25131fc68015ac9c8e9ac74d",
"assets/assets/service.jpg": "ed562ee41826c3a15dbf7a242ac98910",
"assets/assets/services_banner.png": "c4706558f3c0e22dfa5a0d2dae551cb8",
"assets/assets/slideshow_lrf_home.png": "0ba4e25a51f408ebec5a51d158fbb15d",
"assets/assets/slideshow_surv_home.png": "24478e2f073b15e24cedfc0ae476ea69",
"assets/assets/slideshow_tank_home.png": "1de5180d77d3e434cc6edbc8cc5e2ac5",
"assets/assets/slideshow_weap_home.png": "9f46574d507131cb62562d9ff0ed10ae",
"assets/assets/Surface-mount-modified.png": "3f92ed28616cf30f2903cc55015237fe",
"assets/assets/surveillance-product.JPG": "e5e3d3182cf2f9ecf7c9824d7d2a5b26",
"assets/assets/surveillance_banner.png": "d5be7f1c32c29eca20077386b0ca489c",
"assets/assets/tank_apc_banner.png": "62da2a1a1289b4edc2c7baf9d1a683a3",
"assets/assets/TI786_3IND.JPG": "91983d926cad9fab3a2ed3d4de803ccf",
"assets/assets/TIB786_1.jpg": "ba3094578c7a91149bf0c47e00daf9e9",
"assets/assets/TIB786_1IND.JPG": "405c61732e83c211b65ff6f1d302920d",
"assets/assets/TIB786_3.jpg": "841e93c4e7775c7485cb1ec6ea5a05d4",
"assets/assets/TISA_506B.jpg": "87a3d5efca0aaebdbd4b319efa7e9cae",
"assets/assets/TISA_506BIND.JPG": "89b7fd4bcf2a35cf542ef43bc135f7b1",
"assets/assets/videos/internship/image.png": "69e6ea34bf05d0d644b71a7a3076e730",
"assets/assets/vision_home.jpg": "d940a294b7701c1bc62408e0f128a6d8",
"assets/assets/weapon_sights_banner.png": "ebcdb6ed37797f5fcab07dfc9c187a45",
"assets/assets/Wire-Harness-modified.png": "0145dc1bc260e5b5065169d62dce7aba",
"assets/FontManifest.json": "defb54322856d1a7e469c64cec6cac4b",
"assets/fonts/Lato/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/fonts/MaterialIcons-Regular.otf": "343729d01be0ef326729502dd5638530",
"assets/fonts/Montserrat.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/fonts/Playfair/PlayfairBold.ttf": "9b38798112efb7cf6eca1de031cec4ca",
"assets/fonts/Playfair/PlayfairRegular.ttf": "1a28efdbd2876d90e554a67faabad24b",
"assets/fonts/Playfair/PlayfairSemiBold.ttf": "54a87ef71bd558e23e1bdc47b4496bc1",
"assets/NOTICES": "7d8e83f741188de57d01fc0e5163e044",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "48ca32d42b6e8df4f497d270c3f62bf1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "ab3e8a6af4b0ff521df370ca5e51bb9d",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
