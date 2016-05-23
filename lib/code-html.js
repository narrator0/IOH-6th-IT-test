$(document).ready(function(){
		  
  //change background color
	$('.table tr').each(function(){
		var self = $(this);
		var color = self.find('.color-td').text();

		self.mouseover(function(){
			self.css('background-color', color);
		});

		self.mouseout(function(){
			self.css('background-color', "white");
		});
	});

	//code mirror
	var myCodeMirror = CodeMirror($('.editor')[0], {
	  value: "/* start css here... */\n\n\n\n\n\n\n\n\n",
	  mode:  "css",
	  tabSize: 2,
	  lineNumbers: true,
	  lineWrapping: true,
	  viewportMargin: Infinity,
	  theme: "base16-dark"
	});

	myCodeMirror.on("change", function(e){
		var cssRule = e.getValue();

		$('#answer-css').html(cssRule);
	});

});