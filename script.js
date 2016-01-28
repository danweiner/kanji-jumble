$(document).ready(function() {
//To do list

//incorporate kanji vg - need backend?
//randomize components before showing on screen
//try to use object constructors
//sort by easy/medium/hard

  var 冶 = ["冫", "厶", "口"];
  var 省 = ["丿", "小", "目"];
  var 相 = ["木", "目"];
  var 想 = ["木", "目", "心"];
  var 箱 = ["木", "目", "⺮"];
  var 徳 = ["彳", "十", "罒", "心"];
  var 聞 = ["門", "耳"];
  var 聖 = ["耳", "王", "口"];
  var 取 = ["耳", "又"];
  var 最 = ["耳", "又", "曰"];
  var 右 = ["丿", "一", "口"];
  var 句 = ["勹", "口"];
  var 名 = ["夕", "口"];
  var 看 = ["龵", "目"];
  var 唱 = ["口", "曰", "曰"];
  var 可 = ["一", "亅", "口"];
  var 和 = ["禾", "口"]; 
  var 否 = ["不", "口"];
  var 告 = ["⺧", "口"];
  var 造 = ["⺧", "口", "辶"];
  var 辞 = ["舌", "立", "十"];
  var 息 = ["自", "心"];
  var 鼻 = ["自", "田", "廾"];
  var 首 = ["丷", "自", "一"];
  var 道 = ["丷", "自", "一", "辶"];
  var 導 = ["丷", "自", "一", "辶", "寸"];
  var 友 = ["丿", "又", "一"];
  var 反 = ["厂", "又"];
  var 板 = ["厂", "又", "木"];
  var 坂 = ["厂", "又", "土"];
  var 飯 = ["飠", "厂", "又"];
  var 返 = ["厂", "又", "辶"];
  var 仮 = ["厂", "又", "亻"];
  var 抜 = ["丿", "又", "一", "扌"];
  var 吸 = ["及", "口"];
  var 級 = ["糸 ", "及"];
  var 受 = ["⺍", "丿", "冖", "又"];
  var 授 = ["⺍", "丿", "冖", "又", "扌"];
  var 菜 = ["艹", "⺍", "丿", "木"];
  var 採 = ["⺍", "丿", "木", "扌"];
  var 乳 = ["⺍", "丿", "子 ", "乚"];
  var 浮 = ["⺍", "丿", "子 ", "氵"];
  var 挙 = ["⺍", "手", "一", "八"];
  var 押 = ["扌", "曰", "丨"];
  var 担 = ["扌", "曰", "一"];
  var 接 = ["扌", "立", "女"];
  var 指 = ["匕", "曰", "扌"];
  var 操 = ["扌", "口", "口", "口", "木"];
  var 兵 = ["斤", "一", "ハ"];
  var 具 = ["目", "一", "ハ"];
  var 弁 = ["厶", "廾"];
  var 正 = ["止", "一"];
  var 政 = ["止", "一", "攵"];
  var 証 = ["止", "一", "言"];
  var 武 = ["弋", "一", "止"];
  var 歩 = ["止", "小", "丿"];
  var 歴 = ["厂", "止", "木", "木"];
  var 歯 = ["止", "米", "凵"];
  var 出 = ["凵", "凵", "丨"];
  var 後 = ["幺", "彳", "夊"];
  var 夏 = ["自", "一", "夊"];
  var 各 = ["夊", "口"];
  var 格 = ["夊", "口", "木"];
  var 客 = ["夊", "口", "宀"];
  var 落 = ["艹", "氵", "夊", "口"];
  var 絡 = ["糸", "夊", "口"];

  //reworked loop displaying components using object contructors

  // function Kanji(character, components, level) {
  //   this.character = character;
  //   this.components = components;
  //   this.level = level;
  // }

  // var 冶 = new Kanji("冶", ["冫", "厶", "口"], "easy");
  // var 省 = new Kanji("省", ["丿", "小", "目"], "easy");
  // var 相 = new Kanji("相", ["木", "目"], "easy");
  // var 想 = new Kanji("想", ["木", "目", "心"], "easy");
  // var 箱 = new Kanji("箱", ["木", "目", "⺮"], "easy");
  // var 徳 = new Kanji("徳", ["彳", "十", "罒", "心"], "hard");
  // var 聞 = new Kanji("聞", ["門", "耳"], "easy");
  // var 聖 = new Kanji ("聖", ["耳", "王", "口"], "easy");
  // var 取 = new Kanji ("取", ["耳", "又"], "easy");
  // var 最 = new Kanji ("最", ["耳", "又", "曰"], "easy");
  // var 右 = new Kanji ("右", ["丿", "一", "口"], "easy");
  // var 句 = new Kanji ("句", ["勹", "口"], "easy");
  // var 名 = new Kanji ("名", ["夕", "口"]);
  // var 看 = new Kanji ("看", ["龵", "目"], "easy");
  // var 唱 = new Kanji ("唱", ["口", "曰", "曰"], "easy");
  // var 可 = new Kanji ("可", ["一", "亅", "口"], "easy");
  // var 和 = new Kanji ("和", ["禾", "口"], "easy"); 
  // var 否 = new Kanji ("否", ["不", "口"], "easy");
  // var 告 = new Kanji ("告", ["⺧", "口"], "easy");
  // var 造 = new Kanji ("造", ["⺧", "口", "辶"], "easy");
  // var 辞 = new Kanji ("辞", ["舌", "立", "十"], "easy");
  // var 息 = new Kanji ("息", ["自", "心"], "easy");
  // var 鼻 = new Kanji ("鼻", ["自", "田", "廾"], "easy");
  // var 首 = new Kanji ("首", ["丷", "自", "一"], "easy");
  // var 道 = new Kanji ("道", ["丷", "自", "一", "辶"], "easy");
  // var 導 = new Kanji ("導", ["丷", "自", "一", "辶", "寸"], "easy");
  // var 友 = new Kanji ("友", ["丿", "又", "一"], "easy");
  // var 反 = new Kanji ("反", ["厂", "又"], "easy");
  // var 板 = new Kanji ("板", ["厂", "又", "木"], "easy");
  // var 坂 = new Kanji ("坂", ["厂", "又", "土"], "easy");
  // var 飯 = new Kanji ("飯", ["飠", "厂", "又"], "easy");
  // var 返 = new Kanji ("返", ["厂", "又", "辶"], "easy");
  // var 仮 = new Kanji ("仮", ["厂", "又", "亻"], "easy");
  // var 抜 = new Kanji ("抜", ["丿", "又", "一", "扌"], "easy");
  // var 吸 = new Kanji ("吸", ["及", "口"], "easy");
  // var 級 = new Kanji ("級", ["糸 ", "及"], "easy");
  // var 受 = new Kanji ("受", ["⺍", "丿", "冖", "又"], "easy");
  // var 授 = new Kanji ("授", ["⺍", "丿", "冖", "又", "扌"], "easy");
  // var 菜 = new Kanji ("菜", ["艹", "⺍", "丿", "木"], "easy");
  // var 採 = new Kanji ("採", ["⺍", "丿", "木", "扌"], "easy");
  // var 乳 = new Kanji ("乳", ["⺍", "丿", "子 ", "乚"], "easy");
  // var 浮 = new Kanji ("浮", ["⺍", "丿", "子 ", "氵"], "easy");
  // var 挙 = new Kanji ("挙", ["⺍", "手", "一", "八"], "easy");
  // var 押 = new Kanji ("押", ["扌", "曰", "丨"], "easy");
  // var 担 = new Kanji ("担", ["扌", "曰", "一"], "easy");
  // var 接 = new Kanji ("接", ["扌", "立", "女"], "easy");
  // var 指 = new Kanji ("指", ["匕", "曰", "扌"], "easy");
  // var 操 = new Kanji ("操", ["扌", "口", "口", "口", "木"], "easy");
  // var 兵 = new Kanji ("兵", ["斤", "一", "ハ"], "easy");
  // var 具 = new Kanji ("具", ["目", "一", "ハ"], "easy");
  // var 弁 = new Kanji ("弁", ["厶", "廾"], "easy");
  // var 正 = new Kanji ("正", ["止", "一"], "easy");
  // var 政 = new Kanji ("政", ["止", "一", "攵"], "easy");
  // var 証 = new Kanji ("証", ["止", "一", "言"], "easy");
  // var 武 = new Kanji ("武", ["弋", "一", "止"], "easy");
  // var 歩 = new Kanji ("歩", ["止", "小", "丿"], "easy");
  // var 歴 = new Kanji ("歴", ["厂", "止", "木", "木"], "easy");
  // var 歯 = new Kanji ("歯", ["止", "米", "凵"], "easy");
  // var 出 = new Kanji ("出", ["凵", "凵", "丨"], "easy");
  // var 後 = new Kanji ("後", ["幺", "彳", "夊"], "easy");
  // var 夏 = new Kanji ("夏", ["自", "一", "夊"], "easy");
  // var 各 = new Kanji ("各", ["夊", "口"], "easy");
  // var 格 = new Kanji ("格", ["夊", "口", "木"], "easy");
  // var 客 = new Kanji ("客", ["夊", "口", "宀"], "easy");
  // var 落 = new Kanji ("落", ["艹", "氵", "夊", "口"], "easy");
  // var 絡 = new Kanji ("絡"["糸", "夊", "口"], "easy");
  // var kanjis = [冶, 省, 相, 想, 箱, 聞, 聖, 取, 最, 右, 句, 名, 看, 唱, 可, 和, 否, 告,
  // 造, 辞, 息, 鼻, 首, 道, 導, 友, 反, 板, 坂, 飯, 返, 仮, 抜, 吸, 級, 受, 授, 菜, 採, 乳, 浮,
  // 挙, 押, 担, 接, 指, 操, 兵, 具, 弁, 正, 政, 証, 武, 歩, 歴, 歯, 出, 後, 夏, 各, 格, 客, 落, 絡];

  // var c = 0;

  // $("#reset").click(function(){
  //   $(".spoiler span").hide();
  //   $(".spoiler button").show();

  //   var kanjiCom = '';

  //   for (var j = 0; j < kanji[c].components.length; j++) {
  //     kanjiCom = kanjiCom + kanji[c].components[j];
  //   };

  //   $("#problem-1 .components").text(kanjiCom);

  //   c++;

  // });

  // var d = 0;

  // $("#reset").click(function(){
  //   console.log("add span text")
  //   var kanjiChar = '';

  //   for (var i = 0; i < kanji[d].character.length; i++) {
  //     kanjiChar = kanjiChar + kanji[d].character[i];
  //   };

  //   $("span").text(kanjiChar);

  //   d++;

  // });


  var kanji = [
    {
    character: "冶",
    components: ["冫", "厶", "口"],
    level: "easy"
    },
    {
    character: "省",
    components: ["丿", "小", "目"],
    level: "easy"
    },
    {
    character: "相",
    components: ["木", "目"],
    level: "easy"
    },
    {
    character: "想",
    components: ["木", "目", "心"],
    level: "easy"
    },
    {
    character: "箱",
    components: ["木", "目", "⺮"],
    level: "easy"
    },

  ]

  //displays components at #problem 1 when reset button clicked
  //also refreshes the reval button if the button has been clicked by user
  var c = 0;

  $("#reset").click(function(){
    $(".spoiler span").hide();
    $(".spoiler button").show();

    var kanjiCom = '';

    for (var j = 0; j < kanji[c].components.length; j++) {
      kanjiCom = kanjiCom + kanji[c].components[j];
    };

    $("#problem-1 .components").text(kanjiCom);

    c++;

  });

  //adds the corresponding character to the kanji components
  var d = 0;

  $("#reset").click(function(){
    console.log("add span text")
    var kanjiChar = '';

    for (var i = 0; i < kanji[d].character.length; i++) {
      kanjiChar = kanjiChar + kanji[d].character[i];
    };

    $("span").text(kanjiChar);

    d++;

  });



  //hides and shows reveal button when clicked by user
    //1. Hide spoiler
    $(".spoiler span").hide();
    console.log("hide");
    //2. Add button
    // $(".spoiler").append("<button class='reveal'>Reveal Kanji!</button>");
    console.log("append");
    //3. When button pressed
    $(".reveal").click(function(){
    	//3.1. Show spoiler next to button clicked
    	$(this).prev().show();
    	//3.2. Get rid of button
    	// $(this).remove();
      $(this).hide();
    });


  var color = $(".selected").css("background-color");
  var $canvas = $("canvas");
  var context = $("canvas")[0].getContext("2d");
  var lastEvent;
  var mouseDown = false;
  //when clicking on control list items
  $(".controls").on("click", "li", function(){
    //deselect sibling elements
    $(this).siblings().removeClass("selected");
    //select clicked elements
    $(this).addClass("selected");
    //cache current color here
    color = $(this).css("background-color");

  });

  //on mouse events on the canvas
  $canvas.mousedown(function(e){
    lastEvent = e;
    mouseDown = true;
  }).mousemove(function(e){
      //draw lines
    if(mouseDown) {
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = color;
      context.stroke();
      lastEvent = e;
    }
  }).mouseup(function(){
    mouseDown = false;
  }).mouseleave(function(){
    $canvas.mouseup();
  });


  //When clicked reset the canvas back to an empy canvas 
  $("#resetCanvas").click(function(){
          //Used the [0] to select the correct element in canvas
      context.clearRect(0,0, $canvas[0].width, $canvas[0].height); 
  });

  $(".char").click(function() {
    if ($("ul").hasClass("open")) {
      $("ul").slideUp();
      $("ul").removeClass("open");
    } else {
      $("ul").slideDown();
      $("ul").addClass("open");
    }
  });

  $( window ).resize(function() {
    $("ul").removeAttr("style");
  });

});




