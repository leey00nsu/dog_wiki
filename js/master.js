var Links = {
  setColor: function (color) {
    $("a").css("color", color);
  },
};

var Body = {
  setColor: function (color) {
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    $("body").css("backgroundColor", color);
  },
};

function nightDayHandler(self) {
  if (self.value == "다크모드") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "일반모드";
    Links.setColor("white");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "다크모드";
    Links.setColor("black");
  }
}
